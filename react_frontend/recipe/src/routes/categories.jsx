import {getCategories} from "../../recipes.jsx";
import {Link} from "react-router-dom";


function Categories() {
    const categories = getCategories();

    return (
        <>
            { categories.map(res => (
                <div
                    key={res.id}
                    className="h-25">
                    <Link
                        to={`/categories/${res.id}`}>
                        { res.titleOfCategories }
                    </Link>
                </div>
            )) }
        </>
    )
}

export default Categories
