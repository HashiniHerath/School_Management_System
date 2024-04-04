module.exports=(leave)=>{

    console.log(leave);
    let total=0;
    
    return `
    
    <meta charset="UTF-8">
    <title>Leave Report</title>
    <style>
      /* Style for header */
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background-color:  #88AED0;
        flex-direction: row;
      }
      
      /* Style for school logo */
      .logo {
        height: 200px;
        margin-right: 10px;
      }
      
      /* Style for school details */
      .details {
        text-align: right;
        margin-left: auto;
        color : white;
      }
      
      .detailscontact{
      	text-align: left;
      	margin-left: 255px;
      }
      
      /* Style for principle signature box */
      .signature-box {
        border: 1px solid black;
        height: 100px;
        width: 200px;
        margin-top: 30px;
        margin-left: auto;
        margin-right: 0;
        padding: 10px;
        float: right;
      }
      
      /* Style for topic */
      .topic {
        text-align: center;
        font-size: 24px;
        margin-top: 40px;
        margin-bottom: 20px;
      }
      
      /* Style for table */
      table {
        border-collapse: collapse;
        width: 100%;
        font-size: 12px;
        margin-top: 100px;
      }
      
      th, td {
        text-align: left;
        padding: 8px;
        border: 1px solid #ddd;
      }
      
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }
      
      th {
        background-color: #88AED0;
        color: white;
      }
      
      /* Style for page break */
      .page-break {
        page-break-after: always;
      }
    </style>
  </head>
  <body>
  <div class="header">
    <div> <img class="logo" src="https://drive.google.com/uc?id=16dsAg1kliNFBtx78DTZTJUbgmA9bB4ep" alt="School Logo"></div>
    <div class="details">
    <h2 style="margin-bottom: 5px;">Boomiriya Central College</h2><br>
    <p style="margin: 0;">Address : <br>Bomiriya Central College, Bomiriya, Kaduwela.</p>
    <p style="margin: 0;">Contact Details : 011 253 9444</p>
    </div>
  </div>
        
        
      </div>
    </div>
    <div class="signature-box">
      <h3 style="margin-top: 0;">Principal Signature</h3><br>
      <p style="margin-top: 0; margin-bottom: 0;">...........................................<br> (The Principle)</p>
    </div>
    <br>
    <h1 class="topic">Leave Report</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Reason Category</th>
          <th>Reason</th>
          <th>Date</th>
          <th>Start Date of Leave</th>
          <th>Last Day of Leave</th>
          <th>Number of Leaves</th>
        </tr>
      </thead>
  
        <tbody>
          ${leave.map((per) => {
             return(
              `
              <tr>
              <td>${per.fullName}</td>
              <td>${per.reasonCategory}</td>
              <td>${per.reason}</td>
              <td>${per.dateOfOriginalAppoinment}</td>
              <td>${per.startDateOfTheLeave}</td>
              <td>${per.lastDayOfTheLeave}</td>
              <td>${per.noOfLeaveCount}</td>
            </tr>

              `
             )
          })}
         
          
        </tbody>
      </table>
      <footer>
        <p></p>
      </footer>
    </body>
  </html>
    
    
    `




}