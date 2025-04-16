import { useNavigate } from "react-router-dom";


const Contact = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <h1>Contact</h1>
            <button onClick={() => navigate("info")}>Information</button>
            <button onClick={() => navigate("form")}>Form</button>
        </div>
    );
};

export default Contact;