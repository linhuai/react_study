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