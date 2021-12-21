exports.userSignUpValidator = (req, res, next) => {
  req.check("name", "Name is Required !").notEmpty();

  req
    .check("email", "Email is Required !")
    .notEmpty()
    .isEmail()
    .withMessage("email should to respect email format");

  req
    .check("password", "Password is Required !")
    .notEmpty()
    .isLength({ min: 6, max: 20 })
    .withMessage("Password must between 6 and 20 Caracters");

  const errors = req.validationErrors();

  console.log("error", errors);
  if (errors) {
    return res.status(400).json({ error: errors[0].msg });
  }

  next();
};
