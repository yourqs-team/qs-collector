const Hashids = require('hashids');
const hashids = new Hashids(process.env.SHA256 || 'JapIsAwesome', 6);
const models = require('../models/index');

// First Level
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

const moment = require('moment');


exports.pdfDownload = async (req, res) => {
  //1. decode ID first to retrieve primary key
  let project_id = hashids.decode(req.params.id)[0]; // returns primary key of project
  // let project_id = req.params

  //2. Select the project
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

  //3. Render
  res.render('pdf-templates/download-project-scope', {title: "Project Scope - Download", project});

}
