import Converters from "../Converters/Converters";
import Copyright from "../Copyright";
import "./AppFooter.css";

const AppFooter = () => {
    return (
        <div className="app__footer">
            <Converters />
            <Copyright />
        </div>
    );
}

export default AppFooter;