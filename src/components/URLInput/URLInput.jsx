import "./URLInput.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useContext, useState, useEffect, useDebugValue } from "react";
import { DataProvider } from "../../AppData";

const URLInput = ({ onType }) => {

    const { converters, conversionInfo, switchConverter, validURLFormat } = useContext(DataProvider);

    const [placeholder, setPlaceholder] = useState(null);

    useEffect(() => {
        // set placeholder based on the active opr current converter
        setPlaceholder(validURLFormat[conversionInfo.type.toString().toLowerCase()]?.sampleURL);
    }, [conversionInfo]);

    return (
        <InputGroup className="mb-3 app__main__urlField position-relative">
            <Form.Control onChange={onType} aria-label="Text input with dropdown button" placeholder={`e.g ${placeholder}`} />

            <DropdownButton
                variant="secondary"
                title={conversionInfo?.type}
                id="input-group-dropdown-2"
                align="end"
            >
                {converters.map(item => <Dropdown.Item key={item?.name} onClick={() => switchConverter(item?.name)}>{item?.type}</Dropdown.Item>)}
            </DropdownButton>
        </InputGroup>
    );
}

export default URLInput;