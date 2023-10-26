import ErrorPage from "./error-page.jsx";
import * as ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import App from './routes/App.jsx';

import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/custom.scss";
import Categories from "./routes/categories.jsx";
import Category from "./routes/category.jsx";
import Recipies from "./routes/recipies.jsx";
import Recipe from "./routes/recipe.jsx";


function InboxApp() {

    return (
        <Routes>
            <Route
                path="/" element={<App />}
                errorElement={<ErrorPage />}
            >
                <Route path="categories" element={<Categories />} />
                <Route path="categories/:categoryId" element={<Category />} />
                <Route path="categories/:categoryId/recipies/:recipiesId" element={<Recipies />} />
                <Route path="categories/:categoryId/recipies/:recipiesId/:titleOfRecipe" element={<Recipe />} />
            </Route>
        </Routes>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <InboxApp />
    </BrowserRouter>
)
