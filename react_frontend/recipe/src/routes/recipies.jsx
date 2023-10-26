import {getRecipies} from "../../recipes.jsx";
import {Link, useParams} from "react-router-dom";


function Recipies() {
    let params = useParams();
    let recipiesId = params.recipiesId;
    const recipies = getRecipies();

    return (
        <>
            { recipies.map(res => (
                recipiesId == res.category &&
                <div
                    key={res.id}
                    className="h-25">
                    <Link
                        to={res.titleOfRecipe}
                        state={{ some: `${res}` }}>
                        {res.titleOfRecipe}
                    </Link>
                </div>
            )) }
        </>
    )
}

export default Recipies