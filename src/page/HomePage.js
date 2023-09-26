import EcoTable from "../component/table/EcoTable";
import {useEffect, useState} from "react";
import CreatePollutionForm from "../component/pollution/CreatePollutionForm";
import axios from "axios";

function HomePage() {

    const [pollutions, setPollutions] = useState([]);

    useEffect( () => {
        fetchPollutions();
    }, []);

    const fetchPollutions = async () => {
        const response = await axios.get("http://localhost:8080/api/v1/pollutions");
        setPollutions(response.data);
    }

    const onPollutionUpdate = async () => {
        await fetchPollutions();
    }

    const onPollutionCreated = async () => {
        await fetchPollutions();
    }

    const onPollutionDelete = async () => {
        await fetchPollutions();
    }

    return (
        <div>
            <CreatePollutionForm onPollutionCreated={onPollutionCreated}/>
            <EcoTable pollutions={pollutions} onPollutionUpdate={onPollutionUpdate} onPollutionDelete={onPollutionDelete}/>
        </div>
    );
}

export default HomePage;