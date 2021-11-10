import { Navbar,Container } from "react-bootstrap"
function NavBar(){
    return(
        <Navbar variant="dark" bg="dark" style={{marginBottom:"2rem"}}>
            <Container style={{justifyContent:"center"}}>
                <Navbar.Brand href="/">PokeDex</Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default NavBar;