import  Navbar  from "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";
const TopNav = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Ameer Mushani</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end">
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#link">Temp</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default TopNav;