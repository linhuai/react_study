# React Study #

### 一、创建项目 ###

    create-react-app react_study
    cnpm i react-router-dom --save
    cd react_study && npm start

### 二、修改项目目录###

**(1) 删除 public 文件夹 和 src 文件下的文件**

**(2) 在 public 文件夹下创建 index.html 文件, 做为入口文件**

    // index.html
    <!DOCTYPE html>
    <html lang="en">
		<head>
			<meta charset="utf-8">
			<title>React Study</title>
		</head>
		<body>
			<div id="root"></div>
		</body>
	</html>

**(3) 在 src 文件夹下创建 index.js 文件，做为文件入口**

    // index.js
    import React from 'react';
    import ReactDom from 'react-dom';
    import App from './app'; // 在第4步创建
    ReactDom.render(
		<App/>,
		document.getElementById('root')
    )
  
**(4) 在 src 文件夹下创建 app.js 文件**

    // app.js
    import React, { Component } from 'react';
    import { Route, NavLink, HashRouter } from 'react-router-dom';
    import Home from './views/home'; // 在第 5 步创建
    import Contact from './views/contact'; // 在第 5 步创建
    class App extends Component {
    	render () {
    		return (
				<HashRouter>
					<div>
						<nav>
							<ul>
								<li><NavLink to="/">Home</NavLink></li>
								<li><NavLink to="/contact">Contact</NavLink></li>
							</ul>
						</nav>
						<div className="content">
							<Route exact path="/" component={Home} />
							<Route path="/contact" component={Contact} />
						</div>
					</div>
				</HashRouter>
    		)
    	}
    }
    export default App;

**(5) 在 src 文件夹下创建 views 文件夹，并在 views 文件夹下创建 home.js、contact.js**

	// home.js
	import React, { Component } from 'react';
	class Home extends Component {
		render () {
			return (
				<div>
					<h1> Home Page </h1>
					<p>Hello world, My first react project! </p>
				</div>
			)
		}
	}
	export default Home;

	// contact.js
	import React, { Component } from 'react';
	class Contact extends Component {
		render () {
			return (
				<div>
					<h1> Contact Page </h1>
				</div>
			)
		}
	}
	export default Contact;


  现在，项目已经创建好了
