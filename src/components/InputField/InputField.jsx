import "./InputField.css";

const InputField = ({ inputAction, component, width, radius, id, label, autoComplete, placeholder, type, fontFamily, fontSize, backgroundColor }) => {
    switch (component) {
        case "textbox":
            return (<div className="inputFieldContainer align-items-center gap-2" style={{ width: width === undefined ? "auto" : width, borderRadius: radius === undefined ? 0 : radius, fontFamily: fontFamily === undefined ? "inherit" : fontFamily, backgroundColor: backgroundColor === undefined ? "#f2f2f2" : backgroundColor }}>
                <label htmlFor={id} className="inputFieldContainer__label">{label}</label>
                <input onChange={e => inputAction(e.target.value)} id={id} type={type} className="inputFieldContainer__input" autoComplete={autoComplete} placeholder={placeholder} style={{ fontSize: fontSize === undefined ? "1rem" : fontSize }} />
            </div>)
        case "richbox":
            return (<div className="inputFieldContainer d-flex flex-column align-items-start gap-1" style={{ width: width === undefined ? "auto" : width, borderRadius: radius === undefined ? 0 : radius, fontFamily: fontFamily === undefined ? "inherit" : fontFamily, backgroundColor: backgroundColor === undefined ? "#f2f2f2" : backgroundColor }}>
                <label htmlFor={id} className="inputFieldContainer__label">{label}</label>
                <textarea onChange={e => inputAction(e.target.value)} id={id} type={type} className="inputFieldContainer__input" autoComplete={autoComplete} placeholder={placeholder} style={{ width: "100%", fontSize: fontSize === undefined ? "1rem" : fontSize, resize: "none" }}></textarea>
            </div>)
        default:
            return (<div className="inputFieldContainer align-items-center" style={{ width: width === undefined ? "auto" : width, borderRadius: radius === undefined ? 0 : radius, fontFamily: fontFamily === undefined ? "inherit" : fontFamily, backgroundColor: backgroundColor === undefined ? "#f2f2f2" : backgroundColor }}>
                <label htmlFor={id} className="inputFieldContainer__label">{label}</label>
                <input onChange={e => inputAction(e.target.value)} id={id} type={type} className="inputFieldContainer__input" autoComplete={autoComplete} placeholder={placeholder} style={{ fontSize: fontSize === undefined ? "1rem" : fontSize }} />
            </div>)
    }
}

export default InputField;