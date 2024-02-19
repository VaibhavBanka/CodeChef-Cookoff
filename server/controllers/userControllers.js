const users = require("../models/farmer");


exports.api = async (req, res) => {
  res.status(200).json({ message: "Server is working" });
};

// user Registration
exports.userfarmer = async (req, res) => {
  const { name, income, password, isfarmerorcompany, phonenumber, aadharnumber, farmSize, cropsGrown, availability,preferredContactMethod } = req.body;

  if (!name || !income || !password || !isfarmerorcompany || !aadharnumber || !phonenumber || !farmSize || !cropsGrown || !availability || !preferredContactMethod) {
    res.status(400).json({ error: "Please Enter All Input Data" });
  }

  try {
    const preuser = await users.findOne({ email: email });

    if (preuser) {
      res.status(400).json({ error: "This User Allready exist in our db" });
    } else {
      const userregister = new users({
        name,
        income,
        password,
        phonenumber,
        aadharnumber,
        farmSize,
        cropsGrown,
        availability,
        preferredContactMethod,
        isfarmerorcompany:true,
      });

      // here password hasing

      const storeData = await userregister.save();
      res.status(200).json(storeData);
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
};

// user Registration
exports.usercompany = async (req, res) => {
  const { name, description, password, isfarmerorcompany,contact, email } = req.body;

  if (!name || !description || !password || !isfarmerorcompany || !contact || !email) {
    res.status(400).json({ error: "Please Enter All Input Data" });
  }

  try {
    const preuser = await users.findOne({ email: email });

    if (preuser) {
      res.status(400).json({ error: "This User Allready exist in our db" });
    } else {
      const userregister = new users({
        name,
        description,
        password,
        phonenumber,
        aadharnumber,
        farmSize,
        cropsGrown,
        availability,
        preferredContactMethod,
        isfarmerorcompany:true,
      });

      // here password hasing

      const storeData = await userregister.save();
      res.status(200).json(storeData);
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
};

exports.userLogin = async (req, res) => {
  const { email, otp } = req.body;

  if (!otp || !email) {
    res.status(400).json({ error: "Please Enter Your OTP and email" });
  }

  try {
    const otpverification = await userotp.findOne({ email: email });

    if (otpverification.otp === otp) {
      const preuser = await users.findOne({ email: email });

      // token generate
      const token = await preuser.generateAuthtoken();
      res
        .status(200)
        .json({ message: "User Login Succesfully Done", userToken: token });
    } else {
      res.status(400).json({ error: "Invalid Otp" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
};