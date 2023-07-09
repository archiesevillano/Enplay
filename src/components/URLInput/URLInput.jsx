import "./URLInput.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useContext } from "react";
import { DataProvider } from "../../AppData";

const URLInput = () => {

    const { converters, conversionInfo, switchConverter } = useContext(DataProvider);

    return (
        <InputGroup className="mb-3 app__main__urlField position-relative">
            <Form.Control aria-label="Text input with dropdown button" placeholder="Paste valid URL here" />

            <DropdownButton
                variant="secondary"
                title={conversionInfo?.type}
                id="input-group-dropdown-2"
                align="end"
            >
                {converters.map(item => <Dropdown.Item onClick={() => switchConverter(item?.name)}>{item?.type}</Dropdown.Item>)}
            </DropdownButton>
        </InputGroup>
    );
}

export default URLInput;