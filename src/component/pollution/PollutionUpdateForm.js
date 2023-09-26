import React, { useState, useEffect } from "react";
import axios from "axios";

function PollutionUpdateForm({ pollution, onUpdate }) {
    const [formData, setFormData] = useState({
        objectName: pollution.objectName,
        pollutantName: pollution.pollutantName,
        year: pollution.year,
        valuePollution: pollution.valuePollution,
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
            const response = await axios.put(
                `http://localhost:8080/api/v1/pollutions/${pollution.id}`,
                formData
            );
            if (response.status === 200) {
                setError(""); // Clear any previous errors
                onUpdate();
                setIsFormVisible(false); // Hide the form after submission
            }
        } catch (error) {
            console.error("Error updating pollution data:", error);
            setError(error.response.data);
        }
    };

    return (
        <div className="text-center m-3">
            <button className="btn btn-primary" onClick={toggleFormVisibility}>
                {isFormVisible ? "Hide Update Form" : "Update Pollution Data"}
            </button>
            {isFormVisible && (
                <div className="d-flex justify-content-center">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Object Name:</label>
                            <br />
                            <input
                                type="text"
                                name="objectName"
                                value={formData.objectName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Pollutant Name:</label>
                            <br />
                            <input
                                type="text"
                                name="pollutantName"
                                value={formData.pollutantName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Year:</label>
                            <br />
                            <input
                                type="number"
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Value Pollution:</label>
                            <br />
                            <input
                                type="number"
                                name="valuePollution"
                                value={formData.valuePollution}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn mt-2 btn-success">
                            Update
                        </button>
                        {error && <div className="text-danger">{error}</div>}
                    </form>
                </div>
            )}
        </div>
    );
}

export default PollutionUpdateForm;
