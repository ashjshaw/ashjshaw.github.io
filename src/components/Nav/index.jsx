import { Link } from "react-router-dom";
import { NavItem, NavList, NavWrapper } from "./Nav.css";
import navicon from '../../images/navicon.png'
export default function Nav({ show, setShow }) {
  return (
    <>
      
        <NavWrapper onClick={() => setShow(!show)} show={show}>
          <NavList>
          <img src={navicon} />
          {show ? (
            <>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/experience">Previous Experience</Link>
            </NavItem>
            <NavItem >
              <Link to="/demonstration">Code examples</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact_info">Contact Information</Link>
            </NavItem> </>) : null}
          </NavList>
        </NavWrapper>
    </>
  );
}
