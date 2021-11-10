import { InputGroup, FormControl, Button, FormGroup,Form } from "react-bootstrap";
function SearchBar({list, setListToRender}){
    console.log(list);  
    return(
        <FormGroup className="mb-3">
          <Form.Label>Search</Form.Label>
          <FormControl
           placeholder="Search by name"
           onInput={onInputHandler}
          />
      </FormGroup>
    )

    function onInputHandler(e){
        const value = e.target.value.trim();
        const searchResults = getFilteredListFor(value, list);

        setListToRender(searchResults);
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