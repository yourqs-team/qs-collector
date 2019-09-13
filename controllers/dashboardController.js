const Hashids = require('hashids');
const hashids = new Hashids(process.env.SHA256 || 'JapIsAwesome', 6);
const forms =  require("../handlers/forms");
const mail = require("../handlers/mail");

// Models
const models = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const User = models.User;
const Role = models.Role;
const Project = models.Project;

// Second Level
const Manpower = models.Manpower;
const SafetyRequirement = models.Safety_requirement;
const TemporaryService = models.Temporary_service;
const SiteArrangement = models.Site_arrangement;
const AllowanceAndInsurance = models.Allowance_and_insurance;
const ProffesionalServiceAllowance = models.Proffesional_service_allowance;
const Interior = models.Interior;
const Exterior = models.Exterior;

// Third Level
const HardLandscaping = models.Hard_landscaping;
const WindowAndDoor = models.Window_and_door;
const JoineryAllowance = models.Joinery_allowance;
const Electrical = models.Electrical;
const InteriorTrim = models.Interior_trim;
const InteriorFinish = models.Interior_finish;
const Plumbing = models.Plumbing;
const Drainage = models.Drainage;
const Other = models.Other;

// TODO: Put this to projects/search and /projects
const a_key = process.env.ADDY_KEY || "key";
const a_secret = process.env.ADDY_SECRET || "secret";

const checkOwnership = (project, user, req, res) => {
  //  Checks owner permission
  if(project.User.id != user.id){
    req.flash('error', 'You must be owner of this project. You don\'t have the permission to access this project.');
    res.redirect('/projects'); // redirect immediately, if the user is not the owner
    
    return; // stop further execution in this callback
  }
}

const confirmValidProject = (project_id, req, res) => {
  //  Checks validation for decoded ID
  if (!project_id){
    req.flash('error', 'Invalid Project code');
    res.redirect('/projects'); // redirect immediately, if its not valid
    
    return; // stop further execution in this callback
  }
}

const checkProjStatus = (project, req, res) => {
  //  Checks status
  if(project.project_status === "Submitted"){
    req.flash('error', 'You already submitted your project. You can only clone this project.');
    res.redirect("/project/"+ project.generateProjCode() +"/edit"); // redirect immediately, if already submitted
    
    return; // stop further execution in this callback
  }
}

// Show All Projects
exports.projects = async (req, res) => {
  // Select all projects
  const projects = await Project.findAll({
    include: [
      {model: User, include: [{model: Role}]}
    ]
  });

  // Render
  res.render('projects', {title: "Project Dashboard", projects, a_key, a_secret});
}

exports.submittedProjects = async (req, res) => {
  // Select all projects
  const projects = await Project.findAll({
    where: {project_status: "Submitted"},
    include: [
      {model: User, include: [{model: Role}]}
    ]
  });

  // Render
  res.render('projects', {title: "Submitted Projects", projects, a_key, a_secret});
}

exports.inProgressProjects = async (req, res) => {
  // Select all projects
  const projects = await Project.findAll({
    where: {project_status: "In Progress"},
    include: [
      {model: User, include: [{model: Role}]}
    ]
  });

  // Render
  res.render('projects', {title: "In-Progress Projects", projects, a_key, a_secret});
}

exports.search = async (req, res) => {
  const { q } = req.query;


  // Select all projects
  const projects = await Project.findAll({
    where: {
      [Op.or]: [
        { project_name: {[Op.like]: '%' + q + '%'} },
        { project_status: {[Op.like]: '%' + q + '%'} }
      ]
    },
    include: [
      {model: User, include: [{model: Role}]}
    ]
  });

  // Render
  res.render('projects', {title: "Search Project", projects, a_key, a_secret});
}


// Edit Project
exports.editProject = async (req, res) => {
  //1. decode ID first to retrieve primary key
  // hashids returns hash. so we need to fetch the data using hashids.decode(...)[0]
  const project_id = hashids.decode(req.params.id)[0]; // returns primary key of project

  //2. Check decoded project ID.
  confirmValidProject(project_id, req, res);

  const project = await Project.findOne({where: {id: project_id}, include: [
    {model: User},
    {model: Manpower},
    {model: SafetyRequirement},
    {model: TemporaryService},
    {model: SiteArrangement},
    {model: AllowanceAndInsurance},
    {model: ProffesionalServiceAllowance},
    {model: Interior},
    {model: Exterior},
    {model: HardLandscaping},
    {model: InteriorTrim},
    {model: InteriorFinish}, 
    {model: WindowAndDoor},
    {model: JoineryAllowance}, 
    {model: Electrical},
    {model: Plumbing}, 
    {model: Drainage}, 
    {model: Other}
  ]});
  //2. Select the project

  // lock down
  if (req.user.Role.description === "Client"){
    checkOwnership(project, req.user, req, res);
  }

  //3. Render
  // res.json(project);

  var page_title = "Edit Project";
  if (project.project_status === "Submitted"){
    var page_title = "Recall Project";
  }

  res.render('editProject', {title: page_title, project, forms, a_key, a_secret});
  //reference for return: https://stackoverflow.com/questions/52122272/err-http-headers-sent-cannot-set-headers-after-they-are-sent-to-the-client
  return; // stop further execution in this callback
}

// Create Project
exports.createProject = async (req, res) => {

  const project_name = req.body.project_name;
  const project_address = req.body.project_address;
  const user = req.user;

  const project = await Project.create({
      project_name: project_name,
      project_status: "In Progress",
      project_address: project_address,
      UserId: user.id,
      Manpower: {},
      Safety_requirement: {
        site_sign: true,
        fall_in_protection: "None",
        security_fencing: "None",
        crossing_protection: true
      },
      Temporary_service: {
        temporary_power: false,
        temporary_water: false,
        site_shed: "None"
      },
      Site_arrangement: {
        living_arrangements: "Vacated"
      },
      Allowance_and_insurance: {
        building_guarantee: "None"
      },
      Proffesional_service_allowance:{},
      Interior: {
        painting_interior: "Subcontract"
      },
      Exterior: {
        painting_exterior: "Subcontract",
        exterior_joinery_type: "Aluminium",
        gutter_material: "Plastic",
        gutter_profile: "Classic",
        downpipe_material: "Steel",
        downpipe_profile: "Round 80",
        fascia_type: "Pine 150x25"
      },
      Hard_landscaping: {
        deck_type: "Hardwood",
        handrail_type: "Timber",
        paving_type: "None",
        driveway_type: "None",
        fencing_type: "None"
      },
      Interior_trim: {},
      Interior_finish:{},
      Window_and_door:{
        interior_door_type: "MDF Hollow",
        door_hardware: "Standard"
      },
      Joinery_allowance:{},
      Electrical:{
        allowance_type: "Standard",
        distribution_board: "None"
      },
      Plumbing:{
        allowance_type: "Standard"
      },
      Drainage:{
        new_connections: false
      },
      Other:{}
  }, {
    include: [
      {model: Manpower},
      {model: SafetyRequirement},
      {model: TemporaryService},
      {model: SiteArrangement},
      {model: AllowanceAndInsurance},
      {model: ProffesionalServiceAllowance},
      {model: Interior},
      {model: Exterior},
      {model: HardLandscaping},
      {model: InteriorTrim},
      {model: InteriorFinish}, 
      {model: WindowAndDoor},
      {model: JoineryAllowance}, 
      {model: Electrical},
      {model: Plumbing}, 
      {model: Drainage}, 
      {model: Other}
    ]
 });

  // Encode the project id first to be able to redirect on current project
  const project_id = hashids.encode(project.id);

  // Redirect to newly create project and flash a message that they have successfully created a project
  req.flash("success", "You have created a project!");
  res.redirect(`/project/${project_id}/edit`);
  return;
}

// Update Project
exports.updateProject = async (req, res) => {

  const project_id = hashids.decode(req.params.id)[0];

  confirmValidProject(project_id, req, res);

  const project = await Project.findOne({where: {id: project_id}, include: [
    {model: User},
    {model: Manpower},
    {model: SafetyRequirement},
    {model: TemporaryService},
    {model: SiteArrangement},
    {model: AllowanceAndInsurance},
    {model: ProffesionalServiceAllowance},
    {model: Interior},
    {model: Exterior},
    {model: HardLandscaping},
    {model: InteriorTrim},
    {model: InteriorFinish}, 
    {model: WindowAndDoor},
    {model: JoineryAllowance}, 
    {model: Electrical},
    {model: Plumbing}, 
    {model: Drainage}, 
    {model: Other}
  ]});

  // lock down
  if (req.user.Role.description === "Client"){
    checkOwnership(project, req.user, req, res);
  }

  if (project.project_status === "Submitted"){
    checkProjStatus(project, req, res);
  }


  // Update - Project
  await project.update({
      project_name: req.body.project_name,
      project_address: req.body.project_address
  });

  // Update - Manpower
  await project.Manpower.update({
    markup: req.body.manpower_markup,
    no_builder: req.body.manpower_no_builder,
    administration: req.body.manpower_administration,
    supervision: req.body.manpower_supervision,
    project_management: req.body.manpower_project_management,
    no_vehicles: req.body.manpower_no_vehicles,
    travel_distance: req.body.manpower_travel_distance,
    travel_price: req.body.manpower_travel_price
  });

  // Update - Safety Requirement
  await project.Safety_requirement.update({
    site_sign: req.body.safetyRequirement_site_sign,
    fall_in_protection:  req.body.safetyRequirement_fall_in_protection, 
    security_fencing: req.body.safetyRequirement_security_fencing,
    crossing_protection: req.body.safetyRequirement_crossing_protection
  });

  // Update - Temporary Service
  await project.Temporary_service.update({
    temporary_power: req.body.tempService_temporary_power,
    temporary_water: req.body.tempService_temporary_water,
    site_shed: req.body.tempService_side_shed
  });

  // Update - Site Arrangement
  await project.Site_arrangement.update({
    site_access: req.body.siteArrange_site_access,
    space_for_material_storage: req.body.siteArrange_space_for_material_storage,
    comment: req.body.siteArrange_comment,
    living_arrangement: req.body.siteArrange_living_arrangement,
    carpet_protection: req.body.siteArrange_carpet_protection,
    allow_extra_site_specific_time: req.body.siteArrange_allow_extra_site_specific_time
  });

  // Update - Allowance and Insurance
  await project.Allowance_and_insurance.update({
    estimated_project_duration: req.body.allowAndInsur_estimated_project_duration,
    risk_insurance: req.body.allowAndInsur_risk_insurance,
    building_guarantee: req.body.allowAndInsur_building_guarantee
  });

  // Update - Proffesional Service Allowance
  await project.Proffesional_service_allowance.update({
    plans: req.body.profServAllow_plans,
    engineer: req.body.profServAllow_engineer,
    council_fees: req.body.profServAllow_council_fees,
    geotechnical: req.body.profServAllow_geotechnical,
    surveyor: req.body.profServAllow_surveyor
  });

  // Update - Interior
  await project.Interior.update({
    painting_interior: req.body.painting_interior
  });

  // Update - Exterior
  await project.Exterior.update({
    painting_exterior: req.body.exterior_painting_exterior,
    wall_cladding_type: req.body.exterior_wall_cladding_type,
    wall_cladding_work_required: req.body.exterior_wall_cladding_work_required,
    base_cladding_type: req.body.exterior_base_cladding_type,
    base_cladding_work_required: req.body.exterior_base_cladding_work_required,
    soffit_cladding_type: req.body.exterior_soffit_cladding_type,
    soffit_cladding_work_require: req.body.exterior_soffit_cladding_work_require,
    exterior_joinery_type: req.body.exterior_exterior_joinery_type,
    exterior_joinery_work_required: req.body.exterior_exterior_joinery_work_required,
    entrance_door_type: req.body.exterior_entrance_door_type,
    roof_pitch: req.body.exterior_roof_pitch,
    roof_cladding_type: req.body.exterior_roof_cladding_type,
    roof_work_required: req.body.exterior_roof_work_required,
    gutter_material: req.body.exterior_gutter_material,
    gutter_profile: req.body.exterior_gutter_profile,
    downpipe_material: req.body.exterior_downpipe_material,
    downpipe_profile: req.body.exterior_downpipe_profile,
    downpipe_work_required: req.body.exterior_downpipe_work_required,
    fascia_type: req.body.exterior_fascia_type
  });

  // Update - Hard Landscaping
  await project.Hard_landscaping.update({
    deck_type: req.body.hardLandscaping_deck_type,
    deck_work_required: req.body.hardLandscaping_deck_work_required,
    handrail_type: req.body.hardLandscaping_handrail_type,
    handrail_work_required: req.body.hardLandscaping_handrail_work_required,
    paving_type: req.body.hardLandscaping_paving_type,
    paving_work_required: req.body.hardLandscaping_paving_work_required,
    driveway_type: req.body.hardLandscaping_driveway_type,
    driveway_work_required: req.body.hardLandscaping_driveway_work_required,
    fencing_type: req.body.hardLandscaping_fencing_type,
    fencing_work_required: req.body.hardLandscaping_fencing_work_required,
    other_type: req.body.hardLandscaping_other_type,
    other_work_required: req.body.hardLandscaping_other_work_required
  });

  // Update - Interior Trim
  await project.Interior_trim.update({
    scotia_type: req.body.interiorTrim_scotia_type,
    skirting_type: req.body.interiorTrim_skirting_type,
    window_architrave: req.body.interiorTrim_window_architrave,
    door_architrave: req.body.interiorTrim_door_architrave
  });

  // Update - Interior Finish
  await project.Interior_finish.update({
    kitchen_floor_covering: req.body.interiorFinish_kitchen_floor_covering,
    kitchen_wall_finish: req.body.interiorFinish_kitchen_wall_finish,
    living_floor_covering: req.body.interiorFinish_living_floor_covering,
    living_wall_finish: req.body.interiorFinish_living_wall_finish,
    bedrooms_floor_covering: req.body.interiorFinish_bedrooms_floor_covering,
    bedrooms_wall_finish: req.body.interiorFinish_bedrooms_wall_finish,
    bathroom_floor_covering: req.body.interiorFinish_bathroom_floor_covering,
    bathroom_wall_finish: req.body.interiorFinish_bathroom_wall_finish,
    ensuite_floor_covering: req.body.interiorFinish_ensuite_floor_covering,
    ensuite_wall_finish: req.body.interiorFinish_ensuite_wall_finish,
    laundry_floor_covering: req.body.interiorFinish_laundry_floor_covering,
    laundry_wall_finish: req.body.interiorFinish_laundry_wall_finish,
    other_floor_covering: req.body.interiorFinish_other_floor_covering,
    other_wall_finish: req.body.interiorFinish_other_wall_finish
  });

  // Update - Window and Door
  await project.Window_and_door.update({
    interior_door_type: req.body.windowAndDoor_interior_door_type,
    door_hardware: req.body.windowAndDoor_door_hardware
  });

  // Update - Joinery Allowance
  await project.Joinery_allowance.update({
    kitchen: req.body.joineryAllowance_kitchen,
    laundry: req.body.joineryAllowance_laundry,
    wardrobe_master_bed: req.body.joineryAllowance_wardrobe_master_bed,
    wardrobes_other: req.body.joineryAllowance_wardrobes_other,
    wardrobe_other_amount: req.body.joineryAllowance_wardrobe_other_amount,
    other: req.body.joineryAllowance_other,
    other_amount: req.body.joineryAllowance_other_amount
  });

  // Update - Electrical
  await project.Electrical.update({
    allowance_type: req.body.electrical_allowance_type,
    distribution_board: req.body.electrical_allowance_type,
    new_connection: req.body.electrical_new_connection,
    comments: req.body.electrical_comments
  });

  // Update - Plumbing
  await project.Plumbing.update({
    allowance_type: req.body.plumbing_allowance_type,
    HWC: req.body.plumbing_HWC,
    new_connection: req.body.plumbing_new_connection,
    comments: req.body.plumbing_comments
  });

  // Update - Drainage
  await project.Drainage.update({
    new_connections: req.body.drainage_new_connection,
    comments: req.body.drainage_comments
  });

  // Update - Other
  await project.Other.update({
    demolition: req.body.other_demolition,
    renovation: req.body.other_renovation,
    comments: req.body.other_comments
  });

  if (req.user.Role.description === "Client"){
    checkOwnership(project, req.user, req, res);
  }
  
  // Redirect to newly create project and flash a message that they have successfully created a project

  req.flash("success", "The project is now already saved.");
  res.redirect(`/project/${req.params.id}/edit`);
  return;
}

// Delete Project
exports.deleteProject = async (req, res) => {

  //1. Decrypt code first
  const project_id = hashids.decode(req.params.id)[0];

  //2. Check decoded project ID.
  confirmValidProject(project_id, req, res);

  //3. Find project
  const project = await Project.findOne({where: {id: project_id}, include: [
    {model: User},
    {model: Manpower},
    {model: SafetyRequirement},
    {model: TemporaryService},
    {model: SiteArrangement},
    {model: AllowanceAndInsurance},
    {model: ProffesionalServiceAllowance},
    {model: Interior},
    {model: Exterior},
    {model: HardLandscaping},
    {model: InteriorTrim},
    {model: InteriorFinish}, 
    {model: WindowAndDoor},
    {model: JoineryAllowance}, 
    {model: Electrical},
    {model: Plumbing}, 
    {model: Drainage}, 
    {model: Other}
  ]});

  // Check ownership first
  if (req.user.Role.description === "Client"){
    checkOwnership(project, req.user, req, res);
  }

  // Delete Data
  await Project.destroy({
    where: {id: project_id}
  });

  req.flash("success", "You have successfully deleted a project!");
  res.redirect("/projects");
}

exports.submitProject = async (req, res) => {
  //1. Decrypt code first
  const project_id = hashids.decode(req.params.id)[0];

  //2. Check decoded project ID.
  confirmValidProject(project_id, req, res);

  //3. Find project
  const project = await Project.findOne({where: {id: project_id}, include: [
    {model: User},
    {model: Manpower},
    {model: SafetyRequirement},
    {model: TemporaryService},
    {model: SiteArrangement},
    {model: AllowanceAndInsurance},
    {model: ProffesionalServiceAllowance},
    {model: Interior},
    {model: Exterior},
    {model: HardLandscaping},
    {model: InteriorTrim},
    {model: InteriorFinish}, 
    {model: WindowAndDoor},
    {model: JoineryAllowance}, 
    {model: Electrical},
    {model: Plumbing}, 
    {model: Drainage}, 
    {model: Other}
  ]});

  // Check ownership first
  if (req.user.Role.description === "Client"){
    checkOwnership(project, req.user, req, res);
  }

  if (project.project_status === "Submitted"){
    checkProjStatus(project, req, res);
  }
  
  if (project.project_status === "In Progress"){
    // Update Status first
    await project.update({
      project_status: "Submitted"
    });

    // Assign values for email.
    const email_client = project.User.email;
    const client_fname = project.User.firstname;
    const project_name = project.project_name;
    const project_code = project.generateProjCode();
    const downloadURL = `http://${req.headers.host}/pdf/${project_code}/download`;
    const yourqs_scope_admin = process.env.YOURQS_SCOPE_ADMIN || 'Nick';
    const yourqs_scope_receiver = process.env.YOURQS_SCOPE_RECEIVER || 'yourqs.helper@gmail.com';


    // send email using mail.send(options) method coming from handlers/mail

    // Send email to client
    await mail.send({
      to: email_client,
      filename: 'projectSubmit-client',
      subject: 'YourQS - Your have successfully submitted your Project',
      client_fname, // see also on templates: email/projectSubmit-Client.pug
      project_name,
      project_code,
      downloadURL
    });

    // Send email to YourQS
    await mail.send({
      to: yourqs_scope_receiver,
      filename: 'projectSubmit-yourqs',
      subject: `YourQS - ${client_fname} submitted a project: ${project_name} - ${project_code}`,
      yourqs_scope_admin, // see on templates: email/projectSubmit-Client.pug
      client_fname,
      project_name,
      project_code,
      downloadURL
    });

    req.flash("success", "You submitted a project to YourQS! You will receive an email notification to download your PDF.");
    res.redirect("/projects");
  }

}

exports.cloneProject = async (req, res) => {
  //1. Decrypt code first
  const project_id = hashids.decode(req.params.id)[0];

  //2. Check decoded project ID.
  confirmValidProject(project_id, req, res);

  //3. Find project
  const project = await Project.findOne({where: {id: project_id}, include: [
    {model: User},
    {model: Manpower},
    {model: SafetyRequirement},
    {model: TemporaryService},
    {model: SiteArrangement},
    {model: AllowanceAndInsurance},
    {model: ProffesionalServiceAllowance},
    {model: Interior},
    {model: Exterior},
    {model: HardLandscaping},
    {model: InteriorTrim},
    {model: InteriorFinish}, 
    {model: WindowAndDoor},
    {model: JoineryAllowance}, 
    {model: Electrical},
    {model: Plumbing}, 
    {model: Drainage}, 
    {model: Other}
  ]});
 
  // Check ownership first
  if (req.user.Role.description === "Client"){
    checkOwnership(project, req.user, req, res);
  }

  if (project.project_status === "Submitted"){
    console.log(req.body.project_name);

    // Clone Project
    const project = await Project.create({
      project_name: req.body.project_name,
      project_status: "In Progress",
      project_address: req.body.project_address,
      UserId: req.user.id,
      Manpower: {
        markup: req.body.manpower_markup,
        no_builder: req.body.manpower_no_builder,
        administration: req.body.manpower_administration,
        supervision: req.body.manpower_supervision,
        project_management: req.body.manpower_project_management,
        no_vehicles: req.body.manpower_no_vehicles,
        travel_distance: req.body.manpower_travel_distance,
        travel_price: req.body.manpower_travel_price
      },
      Safety_requirement: {
        site_sign: req.body.safetyRequirement_site_sign,
        fall_in_protection:  req.body.safetyRequirement_fall_in_protection, 
        security_fencing: req.body.safetyRequirement_security_fencing,
        crossing_protection: req.body.safetyRequirement_crossing_protection
      },
      Temporary_service: {
        temporary_power: req.body.tempService_temporary_power,
        temporary_water: req.body.tempService_temporary_water,
        site_shed: req.body.tempService_side_shed
      },
      Site_arrangement: {
        site_access: req.body.siteArrange_site_access,
        space_for_material_storage: req.body.siteArrange_space_for_material_storage,
        comment: req.body.siteArrange_comment,
        living_arrangement: req.body.siteArrange_living_arrangement,
        carpet_protection: req.body.siteArrange_carpet_protection,
        allow_extra_site_specific_time: req.body.siteArrange_allow_extra_site_specific_time
      },
      Allowance_and_insurance: {
        estimated_project_duration: req.body.allowAndInsur_estimated_project_duration,
        risk_insurance: req.body.allowAndInsur_risk_insurance,
        building_guarantee: req.body.allowAndInsur_building_guarantee
      },
      Proffesional_service_allowance:{
        plans: req.body.profServAllow_plans,
        engineer: req.body.profServAllow_engineer,
        council_fees: req.body.profServAllow_council_fees,
        geotechnical: req.body.profServAllow_geotechnical,
        surveyor: req.body.profServAllow_surveyor
      },
      Interior: {
        painting_interior: req.body.painting_interior
      },
      Exterior: {
        painting_exterior: req.body.exterior_painting_exterior,
        wall_cladding_type: req.body.exterior_wall_cladding_type,
        wall_cladding_work_required: req.body.exterior_wall_cladding_work_required,
        base_cladding_type: req.body.exterior_base_cladding_type,
        base_cladding_work_required: req.body.exterior_base_cladding_work_required,
        soffit_cladding_type: req.body.exterior_soffit_cladding_type,
        soffit_cladding_work_require: req.body.exterior_soffit_cladding_work_require,
        exterior_joinery_type: req.body.exterior_exterior_joinery_type,
        exterior_joinery_work_required: req.body.exterior_exterior_joinery_work_required,
        entrance_door_type: req.body.exterior_entrance_door_type,
        roof_pitch: req.body.exterior_roof_pitch,
        roof_cladding_type: req.body.exterior_roof_cladding_type,
        roof_work_required: req.body.exterior_roof_work_required,
        gutter_material: req.body.exterior_gutter_material,
        gutter_profile: req.body.exterior_gutter_profile,
        downpipe_material: req.body.exterior_downpipe_material,
        downpipe_profile: req.body.exterior_downpipe_profile,
        downpipe_work_required: req.body.exterior_downpipe_work_required,
        fascia_type: req.body.exterior_fascia_type
      },
      Hard_landscaping: {
        deck_type: req.body.hardLandscaping_deck_type,
        deck_work_required: req.body.hardLandscaping_deck_work_required,
        handrail_type: req.body.hardLandscaping_handrail_type,
        handrail_work_required: req.body.hardLandscaping_handrail_work_required,
        paving_type: req.body.hardLandscaping_paving_type,
        paving_work_required: req.body.hardLandscaping_paving_work_required,
        driveway_type: req.body.hardLandscaping_driveway_type,
        driveway_work_required: req.body.hardLandscaping_driveway_work_required,
        fencing_type: req.body.hardLandscaping_fencing_type,
        fencing_work_required: req.body.hardLandscaping_fencing_work_required,
        other_type: req.body.hardLandscaping_other_type,
        other_work_required: req.body.hardLandscaping_other_work_required
      },
      Interior_trim: {
        scotia_type: req.body.interiorTrim_scotia_type,
        skirting_type: req.body.interiorTrim_skirting_type,
        window_architrave: req.body.interiorTrim_window_architrave,
        door_architrave: req.body.interiorTrim_door_architrave
      },
      Interior_finish:{
        kitchen_floor_covering: req.body.interiorFinish_kitchen_floor_covering,
        kitchen_wall_finish: req.body.interiorFinish_kitchen_wall_finish,
        living_floor_covering: req.body.interiorFinish_living_floor_covering,
        living_wall_finish: req.body.interiorFinish_living_wall_finish,
        bedrooms_floor_covering: req.body.interiorFinish_bedrooms_floor_covering,
        bedrooms_wall_finish: req.body.interiorFinish_bedrooms_wall_finish,
        bathroom_floor_covering: req.body.interiorFinish_bathroom_floor_covering,
        bathroom_wall_finish: req.body.interiorFinish_bathroom_wall_finish,
        ensuite_floor_covering: req.body.interiorFinish_ensuite_floor_covering,
        ensuite_wall_finish: req.body.interiorFinish_ensuite_wall_finish,
        laundry_floor_covering: req.body.interiorFinish_laundry_floor_covering,
        laundry_wall_finish: req.body.interiorFinish_laundry_wall_finish,
        other_floor_covering: req.body.interiorFinish_other_floor_covering,
        other_wall_finish: req.body.interiorFinish_other_wall_finish
      },
      Window_and_door:{
        interior_door_type: req.body.windowAndDoor_interior_door_type,
        door_hardware: req.body.windowAndDoor_door_hardware
      },
      Joinery_allowance:{
        kitchen: req.body.joineryAllowance_kitchen,
        laundry: req.body.joineryAllowance_laundry,
        wardrobe_master_bed: req.body.joineryAllowance_wardrobe_master_bed,
        wardrobes_other: req.body.joineryAllowance_wardrobes_other,
        wardrobe_other_amount: req.body.joineryAllowance_wardrobe_other_amount,
        other: req.body.joineryAllowance_other,
        other_amount: req.body.joineryAllowance_other_amount
      },
      Electrical:{
        allowance_type: req.body.electrical_allowance_type,
        distribution_board: req.body.electrical_allowance_type,
        new_connection: req.body.electrical_new_connection,
        comments: req.body.electrical_comments
      },
      Plumbing:{
        allowance_type: req.body.plumbing_allowance_type,
        HWC: req.body.plumbing_HWC,
        new_connection: req.body.plumbing_new_connection,
        comments: req.body.plumbing_comments
      },
      Drainage:{
        new_connections: req.body.drainage_new_connection,
        comments: req.body.drainage_comments
      },
      Other:{
        demolition: req.body.other_demolition,
        renovation: req.body.other_renovation,
        comments: req.body.other_comments
      }
    }, {
      include: [
        {model: Manpower},
        {model: SafetyRequirement},
        {model: TemporaryService},
        {model: SiteArrangement},
        {model: AllowanceAndInsurance},
        {model: ProffesionalServiceAllowance},
        {model: Interior},
        {model: Exterior},
        {model: HardLandscaping},
        {model: InteriorTrim},
        {model: InteriorFinish}, 
        {model: WindowAndDoor},
        {model: JoineryAllowance}, 
        {model: Electrical},
        {model: Plumbing}, 
        {model: Drainage}, 
        {model: Other}
      ]
    });

    req.flash("success", "You have succesfully cloned the project. Now you can modify this Project.");
    res.redirect("/project/"+ project.generateProjCode() +"/edit");
    
  } else {
    // Don't allow any clone on submission.
    req.flash("error", "You can only clone project when it is submitted");
    res.redirect("/project/"+ project.generateProjCode() +"/edit");

  }
}