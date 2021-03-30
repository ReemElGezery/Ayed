import axios from 'axios';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import '../src/css/contactus.css';
import NavBar from './NavBar'
import { useState } from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import Footer from './home/footer'


const trial = () => {
	const { t, i18n } = useTranslation();
	const [username, setUserName] = useState('');
	const [selectedFile, setSelectedFile] = useState(null);


	function mySubmitHandler(event) {
		event.Default();
		alert("Form Submitted Successfully");
	}
	
	function myChangeHandler(event) {
		let nam = event.target.name;
		let val = event.target.value;
		this.setState({ [nam]: val });
	}




	function onFileChange(event) {


		setSelectedFile(event.target.files[0])

	};


	function onFileUpload() {

		const formData = new FormData();


		formData.append(
			"myFile",
			selectedFile,
			selectedFile.name
		);

		console.log(selectedFile);


		axios.post("api/uploadfile", formData);
	};


	function fileData() {

		if (selectedFile) {

			return (
				<div>
					<h2>File Details:</h2>

					<p>File Name: {selectedFile.name}</p>


					<p>File Type: {selectedFile.type}</p>


					<p>
						Last Modified:{" "}
						{selectedFile.lastModifiedDate.toDateString()}
					</p>

				</div>
			);
		}

	};




	return (

		<div>
			<NavBar></NavBar>
			<h1 className="header2">{t('Contactus.1')}</h1>
			<form onSubmit={this.mySubmitHandler}>

				<p classname="t">{t('name.1')}</p>
				<input
					type='text'
					name='username'
					onChange={this.myChangeHandler}
					className="input"
				/>
				<p classname="t">{t('email.1')}</p>
				<input
					type='text'
					name='Email'
					onChange={this.myChangeHandler}
					className="input"
				/>

				<p classname="t"> {t('subject.1')}</p>
				<input
					type='text'
					name='Subject'
					onChange={this.myChangeHandler}
					className="input"
				/>
				<br></br>
				<br></br>

				<div>
					<input type="file" onChange={this.onFileChange} />

				</div>
				{fileData()}
				<br></br>

				<p classname="t"> {t('message.1')}</p>
				<input
					type='text'
					name='message'
					onChange={this.myChangeHandler}
					className="input"
					style={{ height: "10em" }}
				/>
				<br />
				<br />
				{/* <button className="button1"  onClick={this.onFileUpload} /> */}
				<CardActions>
					
						<Button className="click" style={{ position: "relative", left: "39em" }}>
							{t('submit.1')}
						</Button>
					
				</CardActions>

			</form>
			<div className="Footer"> 
     <Footer></Footer>
     </div>

		</div>
	);
}


export default trial;



