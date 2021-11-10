import { useEffect, useRef, useState } from "react";
import { DropdownButton, Dropdown, Button} from "react-bootstrap";
import { fetchGet } from "../../util";

function FilterByType({list, setFilteredResults,setListToRender,setFilterApplied}){
    const [types, setTypes] = useState([]);
    const [filterSelected, setFilterSelected] = useState();
    
    useEffect(()=>{
        fetchGet('/type').then(({results})=>{
            const typeArr = results.map((typeobj)=>typeobj.name);
            setTypes(typeArr);
        });
    },[]);



    return(
        <div className="d-flex justify-content-start p-0 mb-3">
            <DropdownButton title="Filter by Type" variant="dark" menuVariant="dark" className="mb-3" onSelect={onSelectHandler}>
            <Dropdown.Header>
                {
                    (!filterSelected) ?
                    <Button disabled onClick={clearFilterHandler}>Clear filters</Button> :
                    <Button onClick={clearFilterHandler}>Clear filters</Button>
                }
            </Dropdown.Header>
                    {
                        types.map((type,idx)=>{
                            return (
                                (filterSelected && filterSelected === type) ? 
                                <Dropdown.Item eventKey={type} key={idx} active>{type}</Dropdown.Item>:
                                <Dropdown.Item eventKey={type} key={idx}>{type}</Dropdown.Item>
                            )
                        })
                    }
            </DropdownButton>
        </div>
    )

    function onSelectHandler(type){
        const results = list.filter(obj=>{
            if(obj.properTypes.includes(type)){
                return obj;
            }
        })

        console.log(results);

        setFilteredResults(results);
        setFilterApplied(true);
        setFilterSelected(type);
        setListToRender(results);
    }

    function clearFilterHandler(){
        setFilteredResults(undefined);
        setFilterApplied(false);
        setFilterSelected(undefined);
        setListToRender(list);
    }
}

export default FilterByType;