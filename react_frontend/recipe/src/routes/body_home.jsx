import {
    Col,
    Container,
    Row,
} from "react-bootstrap";
import {Link, Outlet, useSearchParams} from "react-router-dom";
import Search from "./search.jsx";
import Reclama from "./reclama";
import {getRecipies} from "../../recipes.jsx";


function Body_home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const recipeQuery = searchParams.get('titleOfRecipe') || "";
    const recipies = getRecipies();

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = e.target.value;
        setSearchParams({titleOfRecipe: params})
    }

    return (
        <Container className="bg-dark bg-gradient text-white fs-1"
                   fluid>
            <Row style={{minHeight: "63vh"}}>
                <Col
                    className="border border-danger"
                    xs={{ span: 7 }}
                    xxl={{ span: 9 }}>
                    {recipeQuery == "" || recipies.filter(value => {
                        return value.titleOfRecipe.toLowerCase().includes(recipeQuery.toLowerCase());
                    }).map(res => (
                            <Link
                                key={res.id}
                                to={`categories/${res.category}/recipies/${res.id}/${res.titleOfRecipe}`}
                            >
                                {res.titleOfRecipe}<hr/>
                            </Link>
                    ))}
                    <Outlet />
                </Col>
                <Col
                    className="border border-danger"
                    xs={{ span: 5 }}
                    xxl={{ span: 3 }}>
                    <Search handleSubmit={handleSubmit}/>
                    <Reclama />
                </Col>
            </Row>
            <Row className="bg-dark text-white">
                <Col
                    className="border border-danger"
                    xs={{ span: 4 }}
                    sm={{ span: 4 }}
                    md={{ span: 4 }}
                    lg={{ span: 4 }}>
                    <div>search</div>
                </Col>
                <Col
                    className="border border-danger"
                    xs={{ span: 4 }}
                    sm={{ span: 4 }}
                    md={{ span: 5 }}
                    lg={{ span: 5 }}>
                    <div>event</div>
                    <div>search</div>
                    <div>rec</div>
                </Col>
                <Col
                    className="border border-danger"
                    xs={{ span: 4 }}
                    sm={{ span: 4 }}
                    md={{ span: 3 }}
                    lg={{ span: 3 }}>
                    <div>search</div>
                </Col>
            </Row>
        </Container>
    )
}

export default Body_home