import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="play">Play</Nav.Link>
            </Navbar>
        </div>
    )
}
export default NavBar