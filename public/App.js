const NAME = "Raj Patil";

const element = React.createElement(
	"div",
	{ className: "container border" },
	React.createElement(
		"h1",
		{ className: "border" },
		NAME
	),
	React.createElement("img", { className: "border", src: "https://drive.google.com/file/d/1iRBYtk77AfxhBgsD0tDtIIMoyIw-vh3r/view?usp=sharing", width: "300px" }),
	React.createElement(
		"p",
		null,
		"A Fullstack Web Developer from San Diego,California. International Graduate Student at San Diego State University pursuing Masters in Computer Science with an expected graduation date of May 2023. Actively seeking internship opportunities in Software Engineering for Summer 2022."
	),
	React.createElement(
		"a",
		{ href: "https://github.com/rpatil0722", target: "_blank" },
		React.createElement(
			"button",
			{ className: "border" },
			React.createElement(
				"h3",
				null,
				"VIEW MY GITHUB REPO"
			)
		)
	)
);

ReactDOM.render(element, document.getElementById('root'));