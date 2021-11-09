import { InputGroup, FormControl, Button } from "react-bootstrap";
function SearchBar({pokemonList, setSearchResults}){
    return(
        <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by name"
          onInput={onInputHandler}
        />
        <Button variant="outline-primary">
          Search
        </Button>
      </InputGroup>
    )

    function onInputHandler(e){
        const value = e.target.value.trim();
        const filteredResults = getFilteredListFor(value, pokemonList);

        setSearchResults(filteredResults);
    }

    function getFilteredListFor(filter, toFilterList){
        if(filter.length === 0) return toFilterList;

        return toFilterList.filter(element=>{
            if(element.name.includes(filter)){
                return element;
            }
        })
    }
}

export default SearchBar;