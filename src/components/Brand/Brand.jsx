import "./Brand.css";
const Brand = () => {
    return (
        <div className="brand">
            <h1 className="brand__text">
                {import.meta.env.VITE_APP_TITLE}
                <span className="brand__version">{import.meta.env.VITE_APP_VERSION}</span>
            </h1>
        </div>
    );
};

export default Brand;