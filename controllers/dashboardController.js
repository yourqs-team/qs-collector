const Hashids = require('hashids');
const hashids = new Hashids(process.env.SHA256 || 'JapIsAwesome', 6);
const forms =  require("../handlers/forms");
// Models
const models = require('../models/index');
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

exports.projects = async (req, res) => {
  // Select all projects
  const projects = await Project.findAll({
    include: [
      {model: User, include: [{model: Role}]}
    ]
  });

  // Render
  res.render('projects', {title: "Project Dashboard", projects});
}

const checkOwnership = (project, user, req, res) => {
  //  Checks owner permission
  if(project.User.id != user.id){
    req.flash('error', 'You must be owner of this project');
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

exports.editProject = async (req, res) => {
  //1. decode ID first to retrieve primary key
  // hashids returns hash. so we need to fetch the data using hashids.decode(...)[0]
  const project_id = hashids.decode(req.params.id)[0]; // returns primary key of project

  //2. Check decoded project ID.
  confirmValidProject(project_id, req, res);

  const project = await Project.findOne({where: project_id, include: [
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

  res.render('editProject', {title: "Edit Project", project, forms});
  //reference for return: https://stackoverflow.com/questions/52122272/err-http-headers-sent-cannot-set-headers-after-they-are-sent-to-the-client
  return; // stop further execution in this callback
}

exports.createProject = async (req, res) => {


  // Project.create({where: project_name})

  // res.redirect('/e');
  const project_name = req.body.project_name;
  const project_address = req.body.project_address;
  const user_id = req.user.id;

  const project = await Project.create({
    where: {project_name: project_name, project_address: project_address},
    include: [
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
      {model: InteriorTrim}, //- Forgot these
      {model: InteriorFinish}, //- Forgot these
      {model: WindowAndDoor},
      {model: JoineryAllowance}, //- Forgot these
      {model: Electrical}, //- Forgot these TOFIX
      {model: Plumbing}, //- Forgot these
      {model: Drainage}, //- Forgot these
      {model: Other}
    ]
  })
}