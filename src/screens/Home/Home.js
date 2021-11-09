import { useState,useEffect } from "react"
import { Container, Row } from "react-bootstrap";
import PokemonList from "../../components/PokemonList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchGet, getDetailedList } from "../../util";

const baseURL = process.env.REACT_APP_BASEURL;

function Home() {
    const [currentPageUrl, setCurrentPageUrl] = useState();
    const [pokemonList, setPokemonList] = useState([]);
    const [searchResults, setSearchResults] = useState();

    useEffect(() => {
        fetchGet(baseURL + '/pokemon').then(async(data) => {
            const pokemonList = data.results;
            const detailedPokemonList = await getDetailedList(pokemonList);
            setPokemonList(detailedPokemonList);
        })
    }, [])
    
    return (
        <Container>
            <SearchBar pokemonList = {pokemonList} setSearchResults={setSearchResults} />
            <Row>
                {
                    (searchResults !== undefined) ?  <PokemonList list={searchResults} /> : <PokemonList list={pokemonList} />
                }
            </Row>
        </Container> 
    )
}

export default Home