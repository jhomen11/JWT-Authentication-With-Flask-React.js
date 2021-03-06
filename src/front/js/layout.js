import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import PublicRoute from "./layout/PublicRoute";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import {Registro} from "./pages/registro";
import { Detalle } from "./pages/detalle";
import { Publica } from "./pages/publica";
import PrivateRoute from "./layout/PrivateRoute";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<PublicRoute exact path="/">
							<Home/>
						</PublicRoute>
						<PublicRoute exact path="/publica">
							<Publica />
						</PublicRoute>
						<Route exact path="/registro">
							<Registro />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:id">
							<Single />
						</Route>
						<PrivateRoute exact path="/detalle/:id">
							<Detalle/>
						</PrivateRoute>
						{/* <PrivateRoute comp={Detalle} path="detalle/:id" exact/> */}
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);