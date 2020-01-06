/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  TEM UMA PERGUNTA?
                </h3>
                <h4 className="ml-2 mb-0 font-weight-light">
                  help@briosense.com.br
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <span>
                  <img
                    src={require("assets/img/brand/apple-icon.png")}
                    alt="..."
                    style={{ height: "15%", width: "15%" }}
                  /></span>

                <h4 className=" mb-3 font-weight-light">
                  @briosensebr
                </h4>
                <Button
                  className=" btn-neutral btn-icon-only btn-round"
                  color="twitter"
                  href="https://twitter.com/briosensebr"
                  id="tooltip126536702"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip126536702">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  color="facebook"
                  href="https://www.facebook.com/briosense"
                  id="tooltip383967593"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip383967593">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  color="instagram"
                  href="https://instagram.com/briosensebr?igshid=x0car84rfply"
                  id="tooltip568564532"
                  size="lg"
                  target="_blank"
                >
                  <i className=" fa fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip568564532">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  href="https://www.linkedin.com/company/briosenseapp"
                  id="tooltip568564532"
                  size="lg"
                  target="_blank"
                >
                  <span>
                    <img src={require("assets/img/icons/common/linkedin-icon.svg")}
                    />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip568564532">
                  Follow us
                </UncontrolledTooltip>

                <Button
                  className="btn-icon-only btn-round ml-1"
                  color="an"
                  href="https://open.spotify.com/user/gd1yktg5r7ko1cd5soicmsbkq?si=LR1ZKKCwQgCJGwOjaven_w"
                  id="tooltip568564532"
                  size="lg"
                  target="_blank"
                >
                  <span>
                    <img src={require("assets/img/icons/common/spotify.svg")}
                    />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip568564532">
                  Follow us
                </UncontrolledTooltip>

              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href=""
                    target="_blank"
                  >
                    Briosense
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href=""
                      target="_blank"
                    >
                      Briosense
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href=""
                      target="_blank"
                    >
                      Sobre Nós
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href=""
                      target="_blank"
                    >
                      Briotext
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
