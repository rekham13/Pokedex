import { useEffect, useRef, useState } from "react";
import { DropdownButton, Dropdown} from "react-bootstrap";
import { fetchGet } from "../../util";

function FilterByType(){
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
            <DropdownButton title="Filter by Type" variant="dark" menuVariant="dark" className="mb-3">
                {
                    types.map((type,idx)=>{
                        return (
                            <Dropdown.Item eventKey={type} key={idx}>{type}</Dropdown.Item>
                        )
                    })
                }
            </DropdownButton>
        </div>
    )
}

export default FilterByType;