import { useState,useEffect } from "react"
import { Container, Row, Col, Card, Button,Badge } from "react-bootstrap";
import { fetchGet, getCapitalizedName,getDetailedList, getImageSrcFor } from "../../util";

const baseURL = process.env.REACT_APP_BASEURL;

function Home() {
    const [currentPageUrl, setCurrentPageUrl] = useState();
    const [pokemonList, setPokemonList] = useState();

    useEffect(() => {
        fetchGet(baseURL + '/pokemon').then(async(data) => {
            const pokemonList = data.results;
            const detailedPokemonList = await getDetailedList(pokemonList);
            setPokemonList(detailedPokemonList);
        })
    }, [])
    
    return (
        <Container>
            <h1>{process.env.REACT_APP_TITLE}</h1>
            <Row>
            {
                pokemonList && pokemonList.map((pokemon, idx) => {
                    const capitalizedName = getCapitalizedName(pokemon.name);
                    const imgSrc = getImageSrcFor(pokemon.id);
                    return (
                        <Col xs={12} md={4} key={idx} style={{marginBottom:"1rem"}}>
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
                                    <Button variant="primary">View More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
            </Row>
        </Container> 
    )
}

export default Home