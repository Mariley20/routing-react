class Home extends React.Component {
	render() {
		return (
			<div className="main-content home">
				<h2>HOME</h2>
				<p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
				<p>Learn front end web development and much more! This simple directory app offers a preview of our course
					library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
					skills you need to launch a new career in front end web development.</p>
				<p>We have thousands of videos created by expert teachers on web design and front end development. Our
					library is continually refreshed with the latest on web technology so you will never fall behind.</p>
				<hr />

			</div>
		);
	}
}
class About extends React.Component {
	render() {
		return (
			<div className="main-content">
				<h2>About</h2>
				<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
			</div>
		);
	}
}
class teachers extends React.Component {
	render() {
		return (
			<div className="teachers">
				<h2>Teachers</h2>
				<div className="row">
					<div className="col-sm-6">
						<img className="img-fluid" src="img/angie.png" alt="" />
						<div className="content">
							<h3 className="title">Angie McAngular</h3>
							<p>Angie is a web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!</p>
						</div>
					</div>
					<div className="col-sm-6">
						<img className="img-fluid" src="img/nodestradamus.png" alt="" />
						<div className="content">
							<h3 className="title">NodeStradamus</h3>
							<p>'NodeStra' is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<img className="img-fluid" src="img/geo.png" alt="" />
						<div className="content">
							<h3 className="title">Geo 'Lo' Cation</h3>
							<p>Geo is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing all barriers to learning code.</p>
						</div>
					</div>
					<div className="col-sm-6">
						<img className="img-fluid" src="img/ecma.png" alt="" />
						<div className="content">
							<h3 className="title">Ecma Scriptnstuff</h3>
							<p>Ecma found her passion for computers and programming over 15 years ago. She is excited to introduce people to the wonderful world of JavaScript.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<img className="img-fluid" src="img/jay.png" alt="" />
						<div className="content">
							<h3 className="title">Jay Query</h3>
							<p>Jay is a developer, author of CSS: The Missing Manual, JavaScript & jQuery: The Missing Manual, and web development teacher.</p>
						</div>
					</div>
					<div className="col-sm-6">
						<img className="img-fluid" src="img/json.png" alt="" />
						<div className="content">
							<h3 className="title">Json Babel</h3>
							<p>All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job.</p>
						</div>
					</div>
				</div>
			</div>)
	}
}

class Repos extends React.Component {
	render() {
		const { route } = this.props;
		let cssCourse = [
			{
				imgSrc: "img/css/1.png",
				title: "CSS Basics",
				content: "CSS (Cascading Style Sheets) is a style sheet language that describes the presentation of web pages. Whereas HTML is what forms the structure of a web page, CSS is what we use to style the HTML with colors, backgrounds, font sizes, layout, and more. As you'll soon learn, CSS is one of the core technologies for designing and building websites."
			},
			{
				imgSrc: "img/css/2.png",
				title: "CSS Selectors",
				content: "In this course, we're going to go beyond the basic selector concepts covered in CSS Basics. Besides the common ways to select elements with type, ID and class selectors, we're able to target elements based on their attributes, position in the HTML document, even their relation to other elements."
			},
			{
				imgSrc: "img/css/3.png",
				title: "Responsive Layouts",
				content: "Responsive web design is a collection of techniques for building websites that work on multiple screen sizes. In these lessons, we're going to use the foundational principles of responsive design as a framework for thinking about page layout. By the end, you should have a better understanding of how to approach common decisions in responsive design."
			},
			{
				imgSrc: "img/css/4.png",
				title: "CSS Flexbox Layout",
				content: "Flexbox is a set of CSS properties that give you a flexible way to lay out content. With flexbox you can change the direction, alignment, size and order of elements, regardless of their original size and order in the HTML. You can even stretch and shrink elements and distribute space, all with just a few lines of CSS!"
			},
			{
				imgSrc: "img/css/5.png",
				title: "CSS Transitions and Transforms",
				content: "CSS transitions and transforms can create simple animations that enhance user interactions in websites and apps. In this course, you'll build an interactive image gallery using CSS transitions and transforms."
			}, {
				imgSrc: "img/css/6.png",
				title: "Bootstrap 4 Basics",
				content: "Learn to use Bootstrap 4, one of the most popular open source front end frameworks, to help you build a functional design and layout in little time."
			}
		];
		let htmlCourse = [
			{
				imgSrc: "img/html/1.png",
				title: "How to Make a Website",
				content: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web."

			},
			{
				imgSrc: "img/html/2.png",
				title: "HTML Forms",
				content: "The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis."
			},
			{
				imgSrc: "img/html/3.png",
				title: "HTML Video and Audio",
				content: "Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text."
			},
			{
				imgSrc: "img/html/4.png",
				title: "SVG Basics",
				content: "Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density."
			},
			{
				imgSrc: "img/html/5.png",
				title: "Responsive Images",
				content: " Using the new source-set and sizes attributes, and the new picture element, it's possible to create images that behave better in a responsive design. These new pieces of markup allow us to deliver the right image to the right device, based on resolution, pixel density, and other factors we define. This will help web pages load faster and look better, and the most capable devices will get the best looking images possible."
			},
			{
				imgSrc: "img/html/6.png",
				title: "Introduction to HTML and CSS",
				content: "Get started creating web pages with HTML and CSS, the basic building blocks of web development. HTML, or Hypertext Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are structured. Use CSS, or Cascading Style Sheets, to select HTML tags and tell the browser what your content should look like."
			}
		];
		let jsCourse = [
			{
				imgSrc: "img/js/1.png",
				title: "JavaScript Basics",
				content: "JavaScript is a programming language that drives the web: from front-end user interface design, to backend server-side programming, you'll find JavaScript at every stage of a web site and web application. In this course, you'll learn the fundamental programming concepts and syntax of the JavaScript programming language."
			},
			{
				imgSrc: "img/js/2.png",
				title: "JavaScript Loops, Arrays and Objects",
				content: "Storing, tracking and handling data is a large part of computer programming. Arrays provide a method for storing multiple values into a single variable. That makes an array a convenient way to pass around a list of items."
			},
			{
				imgSrc: "img/js/3.png",
				title: "jQuery Basics",
				content: "jQuery Basics covers why you'd want to use jQuery, what it is and how to include it in your projects. You'll build several projects over the course to give you the confidence to integrate jQuery in your own projects and add that level of flair and interactivity to any site you work on."
			},
			{
				imgSrc: "img/js/4.png",
				title: "AJAX Basics",
				content: "AJAX is an important front-end web technology that lets JavaScript communicate with a web server. It lets you load new content without leaving the current page, creating a better, faster experience for your web site's visitors. In this course, you'll learn how AJAX works and how you can use JavaScript to communicate with a web server."
			},
			{
				imgSrc: "img/js/5.png",
				title: "Interactive Web Pages with JavaScript",
				content: "In this course we’ll create a to-do list application using JavaScript alone, without using any third party libraries. You’ll get to grips with manipulating and traversing the DOM and adding event handlers to web page elements. The things that you can do with JavaScript are always increasing and this course will give you a solid footing going forward."
			},
			{
				imgSrc: "img/js/6.png",
				title: "Node.js Basics",
				content: "In this course we will create a command line application to retrieve user's profile information from the Treehouse website. We'll be writing our application in JavaScript to run on the Node.js platform."
			}];
		let CurrentList = null;
		switch (route) {

			case 'css':
				CurrentList = cssCourse.map((item, index) => {
					return (<li key={index} className="course media group">
						<img src={item.imgSrc}  />
						<div><h3>{item.title}</h3>
							<p>{item.content}</p></div>
					</li>)
				});
				break;
			case 'javascript':
				CurrentList = jsCourse.map((item, index) => {
					return (<li key={index} className="course media group">
						<img src={item.imgSrc}  />
						<div><h3>{item.title}</h3>
							<p>{item.content}</p></div>
					</li>)
				});
				break;
			default: //'html'
				CurrentList = htmlCourse.map((item, index) => {
					return (<li key={index} className="course media group">
						<img className="course-img" src={item.imgSrc} alt="course" />
						<div><h3>{item.title}</h3>
							<p>{item.content}</p></div>
					</li>)
				});
				break;
		}
		return (
			<div className="main-content courses">
				<div className="course-header group">
					<h2>Cuurses</h2>
					<ul className="nav nav-pills mb-3">
						<li className="nav-item"><a className="nav-link" href='#/repos/html'>HTML</a></li>
						<li className="nav-item"><a className="nav-link" href='#/repos/css'>CSS</a></li>
						<li className="nav-item"><a className="nav-link" href='#/repos/javascript'>JavaScript</a></li>
					</ul>

					<ul>
						{CurrentList}
					</ul>
				</div>

				{/* Write routes here... */}
			</div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			route: window.location.hash.substr(1)
		};
	}
	//  $(document).ready ()
	componentDidMount() {
		window.addEventListener('hashchange', () => {
			console.log(window.location.hash.substr(1));

			this.setState({
				route: window.location.hash.substr(1)
			});
		});
	}
	render() {
		let Child;
		let propsForRepos = null;
		switch (this.state.route) {
			case '/about':
				Child = About;
				break;
			case '/teachers':
				Child = teachers;
				break;
			case '/repos':
				Child = Repos;
				break;
			case '/repos/html':
				Child = Repos;
				propsForRepos = 'html';
				break;
			case '/repos/css':
				Child = Repos;
				propsForRepos = 'css';
				break;
			case '/repos/javascript':
				Child = Repos;
				propsForRepos = 'javascript';
				break;
			default:
				Child = Home;
		}
		return (
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="#">Navbar</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav ml-auto">
							<a className="nav-item nav-link active" href="#/home">Home <span className="sr-only">(current)</span></a>
							<a className="nav-item nav-link" href="#/about">About</a>
							<a className="nav-item nav-link" href="#/teachers">Teachers</a>
							<a className="nav-item nav-link" href="#/repos">Courses</a>
						</div>
					</div>
				</nav>

				{
					propsForRepos ?
						<Child route={propsForRepos} />
						:
						<Child />
				}
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById("root"));
