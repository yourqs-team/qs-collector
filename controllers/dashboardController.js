const Hashids = require('hashids');
const hashids = new Hashids(process.env.SHA256 || 'JapIsAwesome', 6);
// Models
const models = require('../models/index');
const User = models.User;
const Role = models.Role;
const Project = models.Project;

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
  const project = await Project.findOne({where: project_id});

  //3. Render
  res.json(project);
}