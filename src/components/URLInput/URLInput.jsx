import "./URLInput.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const URLInput = () => {
    return (
        <InputGroup className="mb-3 app__main__urlField position-relative">
            <Form.Control aria-label="Text input with dropdown button" placeholder="Paste valid URL here" />

            <DropdownButton
                variant="outline-secondary"
                title="Youtube"
                id="input-group-dropdown-2"
                align="end"
            >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
        </InputGroup>
    );
}

export default URLInput;