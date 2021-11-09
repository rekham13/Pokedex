import { useState,useEffect } from "react"
import { Container, Row,Spinner } from "react-bootstrap";
import FilterByType from "../../components/FilterByType/FilterByType";
import PokemonList from "../../components/PokemonList";
import PokePerPage from "../../components/PokePerPage/PokePerPage";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchGet, getDetailedList } from "../../util";

function Home() {
    const [currentPageUrl, setCurrentPageUrl] = useState();
    const [pokemonList, setPokemonList] = useState();
    const [searchResults, setSearchResults] = useState();
    const [filteredResults, setFilteredResults] = useState();

    useEffect(() => {
        fetchGet('/pokemon').then(async(data) => {
            const pokemonList = data.results;
            const detailedPokemonList = await getDetailedList(pokemonList);
            setPokemonList(detailedPokemonList);
        })
    }, []);

    let listToRender;
    let listToSearch;

    if(searchResults){
        listToRender = searchResults;
        listToSearch = pokemonList;
    }else if(filteredResults){
        listToRender = filteredResults;
        listToSearch = filteredResults;
    }else{
        listToRender = pokemonList;
        listToSearch = pokemonList;
    }
    
    return ( 
       (pokemonList === undefined) ?
       <Container className="d-flex justify-content-center" fluid>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
       </Container>:
        <Container>
            <SearchBar list = {listToSearch} setSearchResults={setSearchResults} />
            <Container className="d-flex flex-column flex-sm-row justify-content-sm-between p-0">
                <PokePerPage />
                <FilterByType />
            </Container>
            <Row>
                <PokemonList list={listToRender} />
            </Row>

        </Container> 
    )
}

export default Home