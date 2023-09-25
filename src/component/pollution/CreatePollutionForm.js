import React, { useState } from "react";
import axios from "axios";

function CreatePollutionForm({ onPollutionCreated }) {
    const [formData, setFormData] = useState({
        objectName: "",
        pollutantName: "",
        year: "",
        valuePollution: "",
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
        if (
            !formData.objectName ||
            !formData.pollutantName ||
            !formData.year ||
            !formData.valuePollution
        ) {
            setError("All fields are required.");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8080/api/v1/pollutions",
                formData
            );
            if (response.status === 201) {
                // Clear form data on successful submission
                setFormData({
                    objectName: "",
                    pollutantName: "",
                    year: "",
                    valuePollution: "",
                });
                setError(""); // Clear any previous errors
                onPollutionCreated(); // You can use this callback to refresh your table or perform other actions
                setIsFormVisible(false); // Hide the form after submission
            }
        } catch (error) {
            console.error("Error creating pollution data:", error);
            setError("An error occurred while creating the pollution data.");
        }
    };

    return (
        <div className="text-center">
            <button
                className="btn btn-primary"
                onClick={toggleFormVisibility}
            >
                {isFormVisible ? "Hide Form" : "Show Form"}
            </button>
            {isFormVisible && (
                <div className="d-flex justify-content-center">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Object Name:</label>
                            <br/>
                            <input
                                type="text"
                                name="objectName"
                                value={formData.objectName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Pollutant Name:</label>
                            <br/>
                            <input
                                type="text"
                                name="pollutantName"
                                value={formData.pollutantName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Year:</label>
                            <br/>
                            <input
                                type="number"
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Value Pollution:</label>
                            <br/>
                            <input
                                type="number"
                                name="valuePollution"
                                value={formData.valuePollution}
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

export default CreatePollutionForm;
