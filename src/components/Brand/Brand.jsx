import "./Brand.css";
import { Link } from 'react-router-dom';

const Brand = () => {
    return (
        <Link to="/" className="brandLink">
            <div className="brand">
                <h1 className="brand__text">
                    <span className="d-inline-block brand__text__en">{`${import.meta.env.VITE_APP_TITLE}`.slice(0, 2)}</span>
                    <span className="brand__text__play">{`${import.meta.env.VITE_APP_TITLE}`.slice(2)}</span>
                    <span className="brand__version">{import.meta.env.VITE_APP_VERSION}</span>
                </h1>
            </div>
        </Link>
    );
};

export default Brand;