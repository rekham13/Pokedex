import { Col, Card, Badge, Button  } from "react-bootstrap";
import { getCapitalizedName,getImageSrcFor } from "../util";

function PokemonList({list}){
    return(
        list.map((pokemon, idx) => {
            const capitalizedName = getCapitalizedName(pokemon.name);
            const imgSrc = getImageSrcFor(pokemon.id);
            const properTypesArr = [...pokemon.properTypes];
            return (
                <Col sm={4} md={3} key={idx} style={{marginBottom:"1rem"}}>
                    <Card>
                        <Card.Img variant="top" src={imgSrc} />
                        <Card.Body>
                            <Card.Title>{ capitalizedName }</Card.Title>
                            <Card.Text>
                                {
                                    properTypesArr.map((type,idx) => {
                                        return (
                                            <Badge key={idx} pill bg='secondary' style={{ marginRight:'.5rem', padding:'.5rem'}}>
                                                {type}
                                            </Badge>
                                        )
                                    })
                                }
                            </Card.Text>
                            <Button variant="dark">View More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    )
}

export default PokemonList;