import { Container, Form,Dropdown,DropdownButton,Button } from "react-bootstrap"

function PokePerPage(){
    return(
            <DropdownButton title="Poke's Per Page" variant="dark" menuVariant="dark" className="mb-3">
                <Dropdown.Item eventKey="1">10</Dropdown.Item>
                <Dropdown.Item eventKey="2">20</Dropdown.Item>
                <Dropdown.Item eventKey="3">30</Dropdown.Item>
                <Dropdown.Item eventKey="4">40</Dropdown.Item>
                <Dropdown.Item eventKey="5">50</Dropdown.Item>
            </DropdownButton>
    )
}

export default PokePerPage;