import { Col, Card, Badge, Button  } from "react-bootstrap";
import { Link } from "react-router-dom";

function PokemonList({list}){
    return(
        list.map((pokemon, idx) => {
            const properTypesArr = [...pokemon.properTypes];
            return (
                <Col sm={6} md={4} key={idx} style={{marginBottom:"1rem"}}>
                    <Card>
                        <Card.Img variant="top" src={pokemon.imageSrc} />
                        <Card.Body>
                            <Card.Title className="text-capitalize">{ pokemon.name }</Card.Title>
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
                            <Link to={`/details/${pokemon.id}`} style={{textDecoration:"none","color":"inherit"}}>
                                <Button variant="dark">
                                        View More
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    )
}

export default PokemonList;