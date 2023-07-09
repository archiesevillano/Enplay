import { DataProvider } from "../../AppData.jsx";
import "./Converters.css";
import { useContext } from "react";

const converterLogos = items => {
    return items.map((item, index) => {
        return (<li className="d-md-inline-block d-block mx-5" key={`converter${index}`}><img src={item?.logo} alt="media" className="convertersLogo" /></li>);
    });
}

const Converters = () => {
    // get the converter images from DataProvider APIContext
    const { converters } = useContext(DataProvider);

    return (
        <ul className="list-unstyled convertersList">
            {converterLogos(converters)}
        </ul>
    );
}

export default Converters;