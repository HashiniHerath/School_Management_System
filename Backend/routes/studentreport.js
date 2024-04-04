const pdf_c= require("../controller/studentReport");

const router = require("express").Router();

router.post("/createpdf",pdf_c.createPdf);
router.get("/fetchpdf",pdf_c.fetchPdf);


module.exports = router;