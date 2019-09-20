import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./containers/Main";
import KnowYourRights from "./containers/KnowYourRights";
import "./scss/App.scss";
import TellUsMore from "./containers/TellUsMore";
import apartmentSVG from "./assets/images/housing-apartment.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>SLC Renters Together</title>
      </header>
      <Router>
        <Navbar bg="light" expand="lg">
          <LinkContainer to="/">
            <Navbar.Brand className="handwritten-text">
              <div className="nav-brand">
                <img
                  className="housing-image"
                  alt="apartment-icon"
                  src={apartmentSVG}
                />
                SLC Renters Together
              </div>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer exact to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/know-your-rights">
                <Nav.Link>Know Your Rights</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/tell-us-more">
                <Nav.Link>Tell us more</Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/eviction-map">
                <Nav.Link>Eviction Map</Nav.Link>
              </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path="/" component={Main} />
        <Route path="/know-your-rights" exact component={KnowYourRights} />
        <Route path="/tell-us-more" exact component={TellUsMore} />
        {/* <Route path="/eviction-map" exact component={EvictionMap} /> */}
      </Router>
      {/* <footer id="sticky-footer" class="absolute-bottom py-4 bg-secondary text-white-50">
        <div class="container text-center">
          <small>Copyright &copy; Your Website</small>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
