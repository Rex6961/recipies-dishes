import {Form} from "react-bootstrap";


export default function Search(props) {

    return (
        <>
            <Form onChange={props.handleSubmit}>
                <input
                    id="q"
                    aria-label="Search recipe"
                    placeholder="Search"
                    type="search"
                    name="titleOfRecipe"
                />
            </Form>
        </>
    )
}