import { Dropdown,DropdownButton } from "react-bootstrap"

function PokePerPage({limit, offset, setCurrentPageURL,setLimit}){
const limits = [10,20,30,40,50];

    return(
            <DropdownButton title="Poke's Per Page" variant="dark" menuVariant="dark" className="mb-3" onSelect={onSelectHandler}>
                {
                    limits.map((numLimit,idx)=>{
                        return (
                            (numLimit === limit) ?
                            <Dropdown.Item eventKey={numLimit} key={idx} active>{numLimit}</Dropdown.Item>
                            :
                            <Dropdown.Item eventKey={numLimit} key={idx}>{numLimit}</Dropdown.Item>
                        )
                    })
                }
            </DropdownButton>
    )

    function onSelectHandler(newlimit){
        setLimit(+newlimit);
        setCurrentPageURL(`/pokemon?offset=${offset}&limit=${newlimit}`);
    }
}

export default PokePerPage;