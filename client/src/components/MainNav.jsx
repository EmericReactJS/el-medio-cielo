import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import { MdReorder } from "react-icons/md";
import MediaQuery from "react-responsive";
import { HashLink as Link } from "react-router-hash-link";
import { LanguagesConsumer } from "./I18nContext";

const MainNav = props => {
  const [isOpen, updateIsOpen] = useState(false);
  const [bisIsOpen, bisUpdateIsOpen] = useState(false);
  const [thirdIsOpen, thirdUpdateIsOpen] = useState(false);
  const [burgerIsOpen, toggleBurger] = useState(false);

  return (
    <LanguagesConsumer>
      {languages => (
        <Navbar className="mainnav" expand="md">
          {/* <NavbarBrand to="/">EL MEDIO CIELO LOGO</NavbarBrand> */}
          <NavbarToggler onClick={() => toggleBurger(!burgerIsOpen)}>
            <MdReorder />
          </NavbarToggler>
          <Collapse isOpen={burgerIsOpen} navbar>
            <Nav>
              <MediaQuery minDeviceWidth={415}>
                <UncontrolledDropdown
                  onMouseOver={() => bisUpdateIsOpen(true)}
                  onFocus={() => bisUpdateIsOpen(true)}
                  onMouseLeave={() =>
                    setTimeout(() => {
                      bisUpdateIsOpen(false);
                    }, 100)
                  }
                  toggle={() => bisUpdateIsOpen(!bisIsOpen)}
                  isOpen={bisIsOpen}
                >
                  <DropdownToggle nav>
                    {languages.Nav.Medio.main}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Link smooth to="/#Cielo">
                        {languages.Nav.Medio.mission}
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link smooth to="/#About">
                        {languages.Nav.Medio.about}
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown
                  onMouseOver={() => updateIsOpen(true)}
                  onFocus={() => updateIsOpen(true)}
                  onMouseLeave={() =>
                    setTimeout(() => {
                      updateIsOpen(false);
                    }, 100)
                  }
                  toggle={() => updateIsOpen(!isOpen)}
                  isOpen={isOpen}
                >
                  <DropdownToggle nav>
                    {languages.Nav.Servicios.main}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Link smooth to="/#Services">
                        {languages.Nav.Servicios.lecture}
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link smooth to="/#Services">
                        {languages.Nav.Servicios.coaching}
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown
                  onMouseOver={() => thirdUpdateIsOpen(true)}
                  onFocus={() => thirdUpdateIsOpen(true)}
                  onMouseLeave={() =>
                    setTimeout(() => {
                      thirdUpdateIsOpen(false);
                    }, 100)
                  }
                  toggle={() => thirdUpdateIsOpen(!thirdIsOpen)}
                  isOpen={thirdIsOpen}
                >
                  <DropdownToggle nav>
                    {languages.Nav.Recursos.main}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Link smooth to="/#Recursos">
                        {languages.Nav.Recursos.meditation}
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link smooth to="/#Recursos">
                        {languages.Nav.Recursos.social}
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </MediaQuery>
              <MediaQuery maxDeviceWidth={415}>
                <NavItem>
                  <Link
                    smooth
                    to="/#Cielo"
                    onClick={() => toggleBurger(!burgerIsOpen)}
                  >
                    {languages.Nav.Medio.mission}
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    smooth
                    to="/#About"
                    onClick={() => toggleBurger(!burgerIsOpen)}
                  >
                    {languages.Nav.Medio.about}
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    smooth
                    to="/#Lecture"
                    onClick={() => toggleBurger(!burgerIsOpen)}
                  >
                    {languages.Nav.Servicios.lecture}
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    smooth
                    to="/#Coaching"
                    onClick={() => toggleBurger(!burgerIsOpen)}
                  >
                    {languages.Nav.Servicios.coaching}
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    smooth
                    to="/#Youtube"
                    onClick={() => toggleBurger(!burgerIsOpen)}
                  >
                    {languages.Nav.Recursos.meditation}
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    smooth
                    to="/#Instagram"
                    onClick={() => toggleBurger(!burgerIsOpen)}
                  >
                    {languages.Nav.Recursos.social}
                  </Link>
                </NavItem>
                
              </MediaQuery>
              <NavItem>
                <Link smooth to="/#Reviews">
                  {languages.Nav.Testimonios}
                </Link>
              </NavItem>
              <NavItem>
                <Link smooth to="/#Recursos">
                  {languages.Nav.Contacto}
                </Link>
              </NavItem>
              <NavItem>
                <Button
                  className="buttonNav"
                  onClick={() => {
                    props.setLang("fr");
                    
                  }}
                >
                  Fr
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  className="buttonNav"
                  onClick={() => {
                    props.setLang("es");
                    
                  }}
                >
                  Es
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      )}
    </LanguagesConsumer>
  );
};

export default MainNav;
