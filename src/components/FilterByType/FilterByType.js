import { useEffect, useRef, useState } from "react";
import { DropdownButton, Dropdown, Button} from "react-bootstrap";
import { fetchGet } from "../../util";

function FilterByType({list, setFilteredResults,setListToRender,isFilterApplied,setIsFilterApplied,filterApplied,setFilterApplied}){
    const [types, setTypes] = useState([]);
    
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
                    (!filterApplied) ?
                    <Button disabled onClick={clearFilterHandler}>Clear filters</Button> :
                    <Button onClick={clearFilterHandler}>Clear filters</Button>
                }
            </Dropdown.Header>
                    {
                        types.map((type,idx)=>{
                            return (
                                (filterApplied && filterApplied === type) ? 
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
            if(obj.properTypes.has(type)){
                return obj;
            }
        })

        console.log(results);

        setFilteredResults(results);
        setIsFilterApplied(true);
        setFilterApplied(type);
        setListToRender(results);
    }

    function clearFilterHandler(){
        setFilteredResults(undefined);
        setIsFilterApplied(false);
        setFilterApplied(undefined);
        setListToRender(list);
    }
}

export default FilterByType;