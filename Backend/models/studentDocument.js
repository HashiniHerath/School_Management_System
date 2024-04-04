module.exports=(student)=>{

    console.log(student);
    let total=0;
    
    return `
    
    <!DOCTYPE html>
  <html>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">
    <style>
      /* CSS styles for the certificate layout */
      body {
        rotate: 90deg;
        font-family: 'Josefin Sans', sans-serif;
        margin: 0;
      }
      .certificate {
        width: 1350px;
        margin: 20px auto;
        border: 2px solid #000;
        background: #DFDDE0;
      }
      .Container {
        width: 1350px;
        height: 200px;
        background: #759BB2;
      }
      .logo {
        float: left;
        text-align: center;
        padding: 8px;
      }
      .logo img {
        height: 120px;
        width: 120px;
      }
      .Contact {
        color: white;
        margin-left: 20px;
        font-weight: bold;
        letter-spacing: 5px;
        float: left;
        text-align: center;
        font-size: 25px;
        padding: 35px 0;
      }
      .recipient {
        padding-top: 10px;
        text-align: center;
        font-size: 24px;
        margin: 40px 0;
      }
      .description {
        padding-top: 40px;
        margin: 10px;
        font-size: 20px;
        margin-bottom: 30px;
        text-align: justify;
        line-height: 30px;
      }
      .footer {
        margin: 10px;
        font-size: 14px;
        text-align: right;
        padding-bottom: 10px;
      }

    </style>
  </head>
  <body>
    <div class="certificate">
      <div class="Container">
        <div class="logo">
          <img src="https://drive.google.com/uc?id=16dsAg1kliNFBtx78DTZTJUbgmA9bB4ep" alt="School/Organization Logo">
        </div>
        <div class="Contact">
          <p>BOMIRIYA CENTRAL COLLEGE</p>
          <!-- <p>
            Contact : 011 253 9444 <br>
            Email : bomiriyammv.kaduwela@gmail.com <br>
            Address : Bomiriya Central College, Bomiriya, Kaduwela. 10640 Colombo, Sri Lanka
          </p> -->
        </div>
      </div>
      <div class="recipient">
        <h1>Certificate of Good Character</h1> 
      </div>
      <div class="description">
        <p>Presented to: ${student.fullName}</p>
        <p>This certificate is awarded to ${student.fullName} in recognition of their outstanding character, integrity, and positive contributions to the school community. They have consistently demonstrated ethical behavior, respect for others, and a strong commitment to academic excellence. ${student.fullName} has served as an exemplary role model for their peers, exhibiting leadership skills, teamwork abilities, and a genuine spirit of kindness and compassion.</p>
        <p>We are proud to recognize ${student.fullName}'s commendable character and congratulate them on this well-deserved achievement.</p>
      </div>
      <div class="footer">
        <p>Issued on: [Date]</p>
        <p>Authorized Signature: ..........................................................................</p>

      </div>
    </div>
  </body>
  </html>        
    
    `




}