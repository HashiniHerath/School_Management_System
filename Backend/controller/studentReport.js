const pdf=require('html-pdf')
const path=require('path')
const pdfTemplate=require("../models/studentDocument")

const createPdf =(req,res)=>{

  pdf.create(pdfTemplate(req.body),{format: 'A4', orientation: 'landscape' }).toFile('studentreport.pdf',(err)=>{
    if(err){
        console.log(err);
    }
    res.send('pdf generated')
  })
}

const fetchPdf=(req,res)=>{
    res.sendFile(path.join(__dirname,'../studentreport.pdf'))
}

module.exports={
   createPdf,
   fetchPdf
}