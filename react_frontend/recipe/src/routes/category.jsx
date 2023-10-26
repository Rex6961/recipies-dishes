import {getCategory} from "../../recipes.jsx";
import {Link, useParams} from "react-router-dom";


function Category() {
    let params = useParams();
    let categoryId = params.categoryId;
    const category = getCategory();
    console.log(category, " ", categoryId);

    return (
        <>
            { category.map(res => (
                categoryId == res.categories &&
                <div
                    key={res.id}
                    className="h-25">
                    <Link
                        to={`recipies/${res.id}`}>
                        {res.titleOfCategory}
                    </Link>
                </div>
            )) }
        </>
    )
}

export default Category