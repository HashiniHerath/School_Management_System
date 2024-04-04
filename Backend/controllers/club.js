const Clubs = require("../models/club.js");

const getAllClubs = async (req, res, next) => {
  let clubs;

  try {
    clubs = await Clubs.find();
  } catch (err) {
    console.log(err);
  }
  if (!clubs) {
    return res
      .status(404)
      .json({ message: "No clubs found in the system" });
  }
  return res.status(200).json({ clubs: clubs });
};

const getByClubById = async (req, res, next) => {
  const id = req.params.id;
  let club;

  try {
    club = await Clubs.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!club) {
    return res.status(500).json({ message: "No Club found" });
  }

  return res.status(201).json({ club });
};

const addClub = async (req, res, next) => {
  const {
    Club_Name,
    Teacher_Incharge,
    Description,
    Club_President,
    Club_Meeting_Dates
  } = req.body;
  let club;

  try {
    club = new Clubs({
        Club_Name,
        Teacher_Incharge,
        Description,
        Club_President,
        Club_Meeting_Dates
    });
    await club.save();
  } catch (err) {
    console.log(err);
  }

  if (!club) {
    return res
      .status(500)
      .json({ message: "Unable to Add club to the system." });
  }

  return res.status(201).json({ club });
};

const updateclub = async (req, res, next) => {
  const id = req.params.id;
  const {
    Club_Name,
    Teacher_Incharge,
    Description,
    Club_President,
    Club_Meeting_Dates
  } = req.body;

  let club;

  try {
    club = await Clubs.findByIdAndUpdate(id, {
        Club_Name,
        Teacher_Incharge,
        Description,
        Club_President,
        Club_Meeting_Dates
    });
    club = await club.save();
  } catch (err) {
    console.log(err);
  }

  if (!club) {
    return res
      .status(400)
      .json({ message: "Unable to Update club Details." });
  }

  return res.status(200).json({ club });
};

const deleteclub = async (req, res, next) => {
    const id = req.params.id;
    let club;
  
    try {
      club = await Clubs.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!club) {
      return res
        .status(404)
        .json({ message: "Unable to remove  club Details." });
    }
  
    return res.status(200).json({ message: "club Successfully Deleted " });
  };

exports.getAllClubs = getAllClubs;
exports.getByClubById = getByClubById;
exports.addClub = addClub;
exports.updateclub=updateclub;
exports.deleteclub=deleteclub;
