import {getRecipies} from "../../recipes.jsx";
import {useParams} from "react-router-dom";
import Table from "react-bootstrap/Table";


function Recipe() {
    let params = useParams();
    let recipeName = params.titleOfRecipe;
    const recipe = getRecipies();

    return (
        <>
            { recipe.map(res => (
                res.titleOfRecipe.includes(recipeName) &&
                    <Table
                        key={res.id}
                        striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th className="text-center" colSpan={2}>
                                    <h1 className="fs-1">{res.titleOfRecipe}</h1>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width="50%">
                                    <img src={res.image} style={{width: "100%", height: "auto"}}/>
                                </td>
                                <td>
                                    <p className="fs-6">{res.ingredients}</p>
                                </td>
                            </tr>
                        <tr>
                            <td colSpan={2}>
                                <p className="fs-4">{res.processToCook}</p>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
            )) }
        </>
    )
}

export default Recipe