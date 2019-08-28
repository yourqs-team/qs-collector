const Hashids = require('hashids');
const hashids = new Hashids(process.env.SHA256 || 'JapIsAwesome', 6);
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
const InteriorFinish = models.InteriorFinish;
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

exports.editProject = async (req, res) => {
  //1. decode ID first to retrieve primary key
  let project_id = hashids.decode(req.params); // returns primary key of project

  //2. Select the project
  const project = await Project.findOne({where: project_id, include: [
    {model: Manpower},
    {model: SafetyRequirement},
    {model: TemporaryService},
    {model: SiteArrangement},
    {model: AllowanceAndInsurance},
    {model: ProffesionalServiceAllowance},
    {model: Interior},
    {model: Exterior}
  ]});

  //3. Render
  res.json(project);
}