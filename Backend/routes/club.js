const express=require("express");
const router=express.Router();
const clubController=require("../controllers/club.js");


router.get("/posts",clubController.getAllClubs);
router.post("/post/save",clubController.addClub);
router.get("/post/:id",clubController.getByClubById);
router.put("/post/update/:id",clubController.updateclub);
router.delete("/post/delete/:id",clubController.deleteclub);
module.exports=router;