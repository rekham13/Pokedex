import { Button, Container } from "react-bootstrap";

function Paginator({setCurrentPageURL, limit, offset,setOffset}){
    const commonProps = {
        "variant" : "dark",
        "className" : "mb-3"
    }
    let nextButtonProps = {};
    let prevButtonProps = {};
    
    if(offset === 1100){
        nextButtonProps.disabled = true;
    }

    if(offset === 0){
        prevButtonProps.disabled = true;
    }
    return(
        <Container className="d-flex flex-column flex-sm-row justify-content-sm-between mb-3">
            <Button {...prevButtonProps} {...commonProps} onClick={handlePrevClick}>
                Previous
            </Button>
            <span className="small text-center mb-3">Showing {offset+1} to {offset + limit} </span>
            <Button {...nextButtonProps} {...commonProps} onClick={handleNextClick}>
                Next
            </Button>
        </Container>
    )

    function handleNextClick(){
        const nextOffset = offset + limit;
        const url = `/pokemon?offset=${nextOffset}&limit=${limit}}`;

        setOffset(nextOffset);
        setCurrentPageURL(url);
    }

    function handlePrevClick(){
        let prevOffset = offset - limit;

        if(prevOffset < 0) {
            prevOffset = 0;
        }
        const url = `/pokemon?offset=${prevOffset}&limit=${limit}}`;
        setOffset(prevOffset);
        setCurrentPageURL(url);
    }
};

export default Paginator;