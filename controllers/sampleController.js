const models = require('../models/index');
const Op = models.Sequelize.Op;
const User = models.User; // sequelizing models



exports.homePage = (req, res) => {
  // res.render('index', {title: "Home Page"});
  res.redirect('/login');
};

exports.emailSample = (req, res) => {
  res.render('email-templates/successRegister', {title: ""});
};

exports.getUsers = async (req, res) => {
    const user = await User.findAll({ attributes: ['username', 'firstname', 'lastname', 'birthday'],});
    res.json(user);
}

exports.getUserRole = async (req, res) =>{
  const user = await User.findOne({
    attributes: ['username', 'firstname', 'lastname', 'birthday'],
    include:[{ model: models.Role,
        where: {
          description: 'Admin' // filter only with description of 'Admin' value
        }
    }],
  });

  res.json(user);
}


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
const InteriorTrim = models.Interior_trim; //- Forgot these
const InteriorFinish = models.Interior_finish;
const Plumbing = models.Plumbing;
const Drainage = models.Drainage;
const Other = models.Other;

exports.pdfView = async (req, res) => {
  //1. decode ID first to retrieve primary key
  // let project_id = hashids.decode(req.params); // returns primary key of project
  let project_id = req.params;

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
    {model: InteriorTrim}, //- Forgot these
    {model: InteriorFinish}, //- Forgot these
    {model: WindowAndDoor},
    {model: JoineryAllowance}, //- Forgot these
    {model: Electrical}, //- Forgot these TOFIX
    {model: Plumbing}, //- Forgot these
    {model: Drainage}, //- Forgot these
    {model: Other}
  ]});

  //3. Render
  // res.json(project);
  res.render('pdf-templates/project-scope', {project});

}

