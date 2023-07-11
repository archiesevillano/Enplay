import "./Brand.css";
const Brand = () => {
    return (
        <div className="brand">
            <h1 className="brand__text">
                <span className="d-inline-block brand__text__en">{`${import.meta.env.VITE_APP_TITLE}`.slice(0, 2)}</span>
                <span className="brand__text__play">{`${import.meta.env.VITE_APP_TITLE}`.slice(2)}</span>
                <span className="brand__version">{import.meta.env.VITE_APP_VERSION}</span>
            </h1>
        </div>
    );
};

export default Brand;