import { useState,useEffect } from "react"
import { Container, Row,Spinner } from "react-bootstrap";
import FilterByType from "../../components/FilterByType/FilterByType";
import Paginator from "../../components/Paginator/Paginator";
import PokemonList from "../../components/PokemonList";
import PokePerPage from "../../components/PokePerPage/PokePerPage";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchGet, getDetailedList} from "../../util";

function Home() {
    const [pokemonList, setPokemonList] = useState();
    const [filteredResults, setFilteredResults] = useState();
    const [isFilterApplied, setIsFilterApplied] = useState(false);
    const [filterApplied, setFilterApplied] = useState();

    const [offset,setOffset] = useState(0);
    const [limit, setLimit] = useState(20);

    const [currentPageURL, setCurrentPageURL] = useState(`/pokemon?limit=${limit}&offset=${offset}`);

    const [listToRender, setListToRender] = useState();
    
    useEffect(() => {
        fetchGet(currentPageURL).then(async(data) => {
            const pokemonList = data.results;
            const detailedPokemonList = await getDetailedList(pokemonList);
            let toRenderList = detailedPokemonList;

            if(isFilterApplied){
                toRenderList = detailedPokemonList.filter((obj)=>{
                    if(obj.properTypes.has(filterApplied)){
                        return obj;
                    }
                })
            }
            setPokemonList(detailedPokemonList);
            setListToRender(toRenderList);
        })
    }, [currentPageURL]);   

    return ( 
       (pokemonList === undefined || listToRender === undefined) ?
       <Container className="d-flex justify-content-center" fluid>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
       </Container>:
        <Container>
            {
                (isFilterApplied) ? 
                <SearchBar list = {filteredResults} setListToRender={setListToRender} /> :
                <SearchBar list = {pokemonList} setListToRender={setListToRender} />
            }
            <Container className="d-flex flex-column flex-sm-row justify-content-sm-between p-0">
                <PokePerPage offset={offset} limit={limit} setCurrentPageURL={setCurrentPageURL} setLimit={setLimit} />
                <FilterByType list={pokemonList} setFilteredResults={setFilteredResults} setListToRender={setListToRender}  setIsFilterApplied={setIsFilterApplied} filterApplied={filterApplied} setFilterApplied={setFilterApplied}/>
            </Container>
            <Row>
                {
                    (listToRender.length === 0) ?
                    <div className="d-flex justify-content-center" style={{width:"100%",height:"100vh"}}>
                        <h2>
                            Nothing to show
                        </h2>
                    </div> 
                    : <PokemonList list={listToRender} />
                }
                <Paginator setCurrentPageURL={setCurrentPageURL} limit={limit} offset= {offset} setOffset={setOffset} />
            </Row>
        </Container> 
    )
}

export default Home