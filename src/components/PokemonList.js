import { Col, Card, Badge, Button  } from "react-bootstrap";
import { getCapitalizedName,getImageSrcFor } from "../util";

function PokemonList({list}){
    console.log(list);
    return(
        list.map((pokemon, idx) => {
            const capitalizedName = getCapitalizedName(pokemon.name);
            const imgSrc = getImageSrcFor(pokemon.id);
            return (
                <Col sm={6} md={4} key={idx} style={{marginBottom:"1rem"}}>
                    <Card>
                        <Card.Img variant="top" src={imgSrc} />
                        <Card.Body>
                            <Card.Title>{ capitalizedName }</Card.Title>
                            <Card.Text>
                                {
                                    pokemon.properTypes.map((type,idx) => {
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