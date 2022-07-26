import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const TopNav = () => {
    return (
        //bootstrap nav with right justified content
        <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    Ameer Mushani
                    {/* <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/a982ad29-1b19-4d8d-8a40-7285b3ed4465-profile_image-300x300.png" alt="logo" /> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
        </Navbar>
    );
}
export default TopNav;