import { Link } from "react-router-dom";
import { DataProvider } from "../../AppData.jsx";
import "./Converters.css";
import { useContext } from "react";

const converterLogos = items => {
    return items.map((item, index) => {
        return (<li className="d-md-inline-block d-block mx-5 my-3" key={`converter${index}`}><a href={item?.to}><img src={item?.logo} alt="media" className="convertersLogo" /></a></li>);
    });
}

const Converters = () => {
    // get the converter images from DataProvider APIContext
    const { converters } = useContext(DataProvider);

    return (
        <ul className="list-unstyled convertersList m-0">
            {converterLogos(converters)}
        </ul>
    );
}

export default Converters;