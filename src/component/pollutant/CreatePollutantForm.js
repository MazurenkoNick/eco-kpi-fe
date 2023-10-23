import React, { useState } from "react";
import axios from "axios";

function CreatePollutantForm({ onPollutantCreated }) {
    const [formData, setFormData] = useState({
        name: "",
        elv: "",
        tlv:"",
        mfr: "",
        sf: "",
        rfc: ""
    });

    const [error, setError] = useState("");
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic not-null checks
        if (!formData.name || !formData.elv || !formData.mfr || !formData.tlv || !formData.sf || !formData.rfc) {
            setError("All fields are required.");
            return;
        }

        if (formData.elv < 0 || formData.mfr < 0 || formData.tlv < 0 || formData.sf < 0 || formData.rfc < 0) {
            setError("Fields cannot be less than 0.");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8080/api/v1/pollutants",
                formData
            );
            if (response.status === 201) {
                // Clear form data on successful submission
                setFormData({
                    name: "",
                    elv: "",
                    tlv:"",
                    mfr: "",
                    sf: "",
                    rfc: ""
                });
                setError(""); // Clear any previous errors
                onPollutantCreated(); // You can use this callback to refresh your table or perform other actions
                setIsFormVisible(false); // Hide the form after submission
            }
        } catch (error) {
            console.error("Error creating pollutant data:", error);
            setError(error.response.data);
        }
    };

    return (
        <div className="text-center mt-3">
            <button className="btn btn-primary" onClick={toggleFormVisibility}>
                {isFormVisible ? "Hide Form" : "Add a new pollutant"}
            </button>
            {isFormVisible && (
                <div className="d-flex justify-content-center">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name:</label>
                            <br />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>TLV:</label>
                            <br />
                            <input
                                type="number"
                                name="tlv"
                                value={formData.tlv}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>ELV:</label>
                            <br />
                            <input
                                type="number"
                                name="elv"
                                value={formData.elv}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>MFR:</label>
                            <br />
                            <input
                                type="number"
                                name="mfr"
                                value={formData.mfr}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>RFC:</label>
                            <br />
                            <input
                                type="number"
                                name="rfc"
                                value={formData.rfc}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>SF:</label>
                            <br />
                            <input
                                type="number"
                                name="sf"
                                value={formData.sf}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn mt-2 btn-success">
                            Submit
                        </button>
                        {error && <div className="text-danger">{error}</div>}
                    </form>
                </div>
            )}
        </div>
    );
}

export default CreatePollutantForm;
