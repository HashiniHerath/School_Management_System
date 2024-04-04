import React from 'react';
import '../styles/styles.HomePage.css';
import WebFont from 'webfontloader';
import {Link} from 'react-router-dom';

function HomePage() {
    return(

        <div class="container-fluid vh-100">
		<div class="row vh-100 p-4 d-flex align-items-center justify-content-center">
			<div class="col-md-6 py-4" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
				<img src="https://drive.google.com/uc?id=16dsAg1kliNFBtx78DTZTJUbgmA9bB4ep" class="img-fluid" alt="Image"/>
				<h2 class="text-white mt-4">Boomiriya Central College</h2>
			</div>
			<div class="col" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#13141A"}}>
				<div class="d-flex flex-column justify-content-center align-items-center h-100">
					<h3 class="mb-4">Who are you?</h3>
					<div class="w-75 mb-4">
                        <Link to={`/adminloginpage`} className="btn btn-primary btn-block mb-3" role="button">ADMIN</Link>
						<p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae bibendum lorem. Ut rhoncus ex id arcu blandit, ac semper nisi sagittis. Duis maximus urna a diam pellentesque ullamcorper.</p>
					</div>
					<div class="w-75 mb-4">
                        <Link to={`/studentloginpage`} className="btn btn-primary btn-block mb-3" role="button">STUDENT</Link>
						<p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae bibendum lorem. Ut rhoncus ex id arcu blandit, ac semper nisi sagittis. Duis maximus urna a diam pellentesque ullamcorper.</p>
					</div>
					<div class="w-75 mb-4">
                        <Link to={`/teacherloginpage`} className="btn btn-primary btn-block mb-3" role="button">TEACHER</Link>
						<p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae bibendum lorem. Ut rhoncus ex id arcu blandit, ac semper nisi sagittis. Duis maximus urna a diam pellentesque ullamcorper.</p>
					</div>
				</div>
			</div>
		</div>
	</div>

    )    

}

export default HomePage;