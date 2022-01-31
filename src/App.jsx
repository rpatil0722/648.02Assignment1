const NAME = "Raj Patil";

const element = (
	<div className="container border">
		<h1 className="border">{NAME}</h1>
		<img className="border" src="https://drive.google.com/file/d/1iRBYtk77AfxhBgsD0tDtIIMoyIw-vh3r/view?usp=sharing" width="300px" />
		<p>A Fullstack Web Developer from San Diego,California. International Graduate Student at San Diego State University pursuing Masters in Computer Science with an expected graduation date of May 2023. Actively seeking internship opportunities in Software Engineering for Summer 2022.</p>
		<a href="https://github.com/rpatil0722" target="_blank">
			<button className="border"><h3>VIEW MY GITHUB REPO</h3></button>
		</a>
	</div>
);

ReactDOM.render(element, document.getElementById('root'));