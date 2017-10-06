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
		let CurrentList = null;
		switch (route) {

			case 'css':
				CurrentList = ['How to Make a CSS', 'HTML CSS'].map((item, index) => {
					return <li key={index}> {item} </li>
				});
				break;
			case 'javascript':
				CurrentList = ['How to Make a JS', 'HTML JS'].map((item, index) => {
					return <li key={index}> {item} </li>
				});
				break;
			default: //'html'
				CurrentList = ['How to Make a Website', 'HTML Forms'].map((item, index) => {
					return <li key={index}> {item} </li>
				});
				break;
		}
		return (
			<div className="main-content courses">
				<div className="course-header group">
					<h2>Cuurses</h2>
					<ul className="nav nav-pills mb-3">
						<li className="nav-item"><a className="nav-link active" href='#/repos/html'>HTML</a></li>
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
