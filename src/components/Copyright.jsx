const Copyright = () => {
    return (
        <div className="copyright my-5">
            <p className="copyright__developedBy m-0 text-center">
                {`Developed by ${import.meta.env.VITE_DEVELOPER}`}
            </p>
            <p className="copyright__rights m-0 text-center">
                {`All Rights Reserved ${import.meta.env.VITE_COPYRIGHT}`}
            </p>
        </div>
    );
}

export default Copyright;