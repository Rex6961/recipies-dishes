import {
    Button,
    ButtonGroup,
    ButtonToolbar} from "react-bootstrap";
import {useState} from "react";


function ButtonsNavigate() {
    const [isOnline, setIsOnline] = useState(null);
    const buttonStyle = 'shadow-w';


    function isOverButton(e) {
        setIsOnline(e.target.id)
    }
    function isOutButton() {
        setIsOnline(null)
    }
    return (
        <ButtonToolbar
            aria-label="Toolbar with button groups"
            onMouseOver={isOverButton}
            onMouseOut={isOutButton}>
            <ButtonGroup className="pt-4 me-5 gap-2 ms-auto" aria-label="First group">
                <Button
                    id="1"
                    href="/"
                    className={` ${isOnline === "1"? buttonStyle:""} rounded`}
                    variant="outline-warning">Домой</Button>
                <Button
                    id="2"
                    href="/categories/"
                    className={`${isOnline === "2"? buttonStyle:""} rounded`}
                    variant="outline-warning">Категории</Button>
            </ButtonGroup>
            <ButtonGroup
                className="pt-4"
                aria-label="Second group">
                <Button
                    id="3"
                    href="https://web.telegram.org/"
                    target="_blank"
                    className={`${isOnline === "4"? buttonStyle:""} rounded`}
                    variant="outline-warning">Tg</Button>
                <Button
                    id="4"
                    href="https://www.instagram.com/"
                    target="_blank"
                    className={`${isOnline === "5"? buttonStyle:""} rounded`}
                    variant="outline-warning">i</Button>
            </ButtonGroup>
        </ButtonToolbar>
    )
}

export default ButtonsNavigate