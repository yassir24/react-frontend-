
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class ComponentssNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              to="/"
              id="navbar-brand"
              tag={Link}
            >
              <span>Pro-Teachers</span>
           
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Learn Now!
            </UncontrolledTooltip>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Pro-Teachers
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                tag={Link} to="/courses-page"
                  data-placement="bottom"
                  rel="noopener noreferrer"
                  title="Buy a Course"
                >
                  <i class="fas fa-book"></i>Courses
                  <p className="d-lg-none d-xl-none"></p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                tag={Link} to="/pricing-page"
                  data-placement="bottom"
                  rel="noopener noreferrer"
                  title="Buy a Course"
                >
                  <i class="fas fa-dollar-sign"></i>Pricing
                  <p className="d-lg-none d-xl-none"></p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                tag={Link} to="/contact-page"
                  data-placement="bottom"
                  rel="noopener noreferrer"
                  title="Who We are"
                >
                  <i class="far fa-address-card"></i>Contact Us
                  <p className="d-lg-none d-xl-none"></p>
                </NavLink>
              </NavItem>
             
              <NavItem>
              <NavLink
             tag={Link} to="/register-page"
                  data-placement="bottom"
                  rel="noopener noreferrer"
                  title="Start Learning now"
                >
                 <i class="fas fa-sign-in-alt"></i>Sign up
                  <p className="d-lg-none d-xl-none"></p>
                </NavLink>
             </NavItem>
              <NavItem>
              <NavLink 
                  tag={Link} to="/profile-page"
                  data-placement="bottom"
                  href=""
                  rel="noopener noreferrer"
                  title="My Profile"
                >
                  <i class="fas fa-user"></i>Profile
                  <p className="d-lg-none d-xl-none"></p>
                </NavLink>
                
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default ComponentssNavbar;
