const User = require("../models").User;
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

const multerOptions = {
  storage: multer.memoryStorage(),
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/');
    if(isPhoto) {
      // If valid image run on the next method.
      next(null, true);
    } else {
      // If not, return a message on dont send data.
      next({ message: 'That filetype isn\'t allowed!' }, false);
    }
  }
};

exports.upload = multer(multerOptions).single('profile_pic');

// Resize Photo
exports.resize = async (req, res, next) => {
  // no file to resize
  if (!req.file) {
    next(); // skip to the next middleware
    return;
  }

  const extension = req.file.mimetype.split('/')[1];
  req.body.profile_pic = `${uuid.v4()}.${extension}`;

  // resize the photo
  const photo = await jimp.read(req.file.buffer);
  await photo.resize(800, jimp.AUTO);
  await photo.write(`./public/uploads/users/${req.user.id}/profile_pic/${req.body.profile_pic}`);

  next();
};

exports.changeProfile = async (req, res) => {
  // req.body.profile_pic.path
  console.log(req.body.profile_pic.path);
  console.log(req.body.profile_pic.path);
  console.log(req.body.profile_pic.path);
  console.log(req.body.profile_pic.path);
  console.log(req.body.profile_pic.path);


  
  req.flash("success", `- ${req.body.profile_pic}`);
  res.redirect('/projects');

}
