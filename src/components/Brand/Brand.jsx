import "./Brand.css";
import { Link } from 'react-router-dom';
import logo from "./../../../EnplayLogo.svg";

const Brand = ({ scale }) => {
    return (
        <Link to="/" className="brandLink">
            <div className="brand" style={{ transform: `scale(${scale === undefined ? 1 : scale})` }}>
                <img className="brand__logo" src={logo} />
                <h1 className="brand__text">
                    <span className="brand__text__play">{import.meta.env.VITE_APP_TITLE}</span>
                    <span className="brand__version">{import.meta.env.VITE_APP_VERSION}</span>
                </h1>
            </div>
        </Link>
    );
};

export default Brand;