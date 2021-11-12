import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Row,Col,Container,Button,Badge } from "react-bootstrap";
import { getStats,getAbilities} from "../../util";
import { Link } from "react-router-dom";

function Details({detailsList}){
    const [allDetailsSet, setAllDetailsSet] = useState(false);
    const [name, setName] = useState();
    const [types, setTypes] = useState();
    const [imgSrc, setImgSrc] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [stats, setStats] = useState();
    const [abilities, setAbilities] = useState();
    const {id} = useParams();

    useEffect(()=>{
        const details = JSON.parse(localStorage.getItem("details"));
        const specificDetail = details[id];
        
        setHeight(specificDetail["height"]);
        setWeight(specificDetail["weight"]);
        setName(specificDetail["name"]);
        setImgSrc(specificDetail["imageSrc"]);
        const properStats = getStats(specificDetail["stats"]);
        const properAblities = getAbilities(specificDetail["abilities"]);
        setAbilities(properAblities);
        setTypes(specificDetail["types"]);
        setStats(properStats);
        setAllDetailsSet(true);
    },[])

    const labelStyle = {
        fontSize:".7rem",
        fontWeight:"bold"
    }
    return(
        <Container className="px-xs-2 px-md-5">
            {
                allDetailsSet && <Row>
                    <Container className="d-flex flex-row align-items-center justify-content-around">
                    <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
                        <Button className="mb-5" variant="dark">
                            Back
                        </Button>
                    </Link>
                        <h3 className="text-center text-capitalize mb-5 flex-grow-1">{name}</h3>
                    </Container>
                    <Col xs={12} lg={4} >
                        <img src={imgSrc} className="img-thumbnail w-100" alt="pokemon-image" />
                    </Col>
                    <Col xs={12} lg={8} >
                        <Row>
                            <Col xs={6} lg={3}>
                                <p className="text-capitalize text-center" style={labelStyle}>Type</p>
                                <p className="text-center d-flex">
                                    {
                                        types.map((type,idx) => {
                                            return (
                                                <Badge className="flex-grow-1" key={idx} pill bg='secondary' style={{ marginRight:'.5rem', padding:'.5rem'}}>
                                                    {type}
                                                </Badge>
                                            )
                                        })
                                    }
                                </p>
                            </Col>  
                            <Col xs={6} lg={3}>
                                <p className="text-capitalize text-center" style={labelStyle}>Height</p>
                                <p className="font-weight-bold fs-4 text-center">
                                    {height}
                                </p>
                            </Col>   
                            <Col xs={6} lg={3}>
                                <p className="text-capitalize text-center" style={labelStyle}>Weight</p>
                                <p className="fs-4 text-center">
                                    {weight}
                                </p>
                            </Col>
                            <Col xs={6} lg={3}>
                                <p className="text-capitalize text-center" style={labelStyle}>Abilities</p>
                                <p className="d-flex justify-content-around">
                                    {
                                        abilities.map((ability,idx) => {
                                            return (
                                                <Badge className="flex-grow-1" key={idx} pill bg='secondary' style={{ marginRight:'.5rem', padding:'.5rem'}}>
                                                    {ability}
                                                </Badge>
                                            )
                                        })
                                    }
                                </p>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                        {
                            stats.map((statObj,idx)=>{
                                return(
                                        <Col xs={6} key={idx} className="mb-3">
                                            <p className="text-capitalize text-center mb-1" style={labelStyle}>{statObj.statName}</p>
                                            <p className="text-center fs-3">{statObj.statScore}</p>
                                        </Col>
                                )
                            })
                        }
                        </Row>
                    </Col>
                </Row>
            }
        </Container>
    )
}

export default Details;