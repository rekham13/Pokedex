import paginationFactory, { PaginationListStandalone, PaginationProvider } from "react-bootstrap-table2-paginator";
import { Button, Container } from "react-bootstrap";

function Paginator({nextPageURL, prevPageURL, setCurrentPageURL, limit,setLimit, offset,setOffset}){
    const commonProps = {
        "variant" : "dark",
        "className" : "mb-3"
    }
    let nextButtonProps = {};
    let prevButtonProps = {};
    
    if(nextPageURL === null){
        nextButtonProps.disabled = true;
    }

    if(prevPageURL=== null){
        prevButtonProps.disabled = true;
    }
    return(
        <Container className="d-flex flex-column flex-sm-row justify-content-sm-between mb-3">
            <Button {...prevButtonProps} {...commonProps} onClick={handlePrevClick}>
                Previous
            </Button>
            <span className="small">Showing {offset+1} to {offset + limit} </span>
            <Button {...nextButtonProps} {...commonProps} onClick={handleNextClick}>
                Next
            </Button>
        </Container>
    )

    function handleNextClick(){
        setOffset(offset + limit);
        setCurrentPageURL(nextPageURL);
    }

    function handlePrevClick(){
        let calculatedOffset = offset - limit;

        if(calculatedOffset < 0) {
            calculatedOffset = 0;
        }

        setOffset(calculatedOffset);
        setCurrentPageURL(prevPageURL);
    }
};

export default Paginator;