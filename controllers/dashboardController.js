const models = require('../models/index');
const User = models.User;
const Role = models.Role;
const Project = models.Project;

exports.projects = (req, res) => {
  Project.findAll({
    include: [
      {model: User}
    ]
  }).then(
    (projects) => {
      res.render('dashboard-layout', {title: "Project Dashboard", projects});
    }
  );
}