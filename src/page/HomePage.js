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
        console.log(response);
        setPollutions(response.data);
    }

    const onPollutionCreated = async () => {
        await fetchPollutions();
    }

    return (
        <div>
            <EcoTable pollutions={pollutions}/>
            <CreatePollutionForm onPollutionCreated={onPollutionCreated}/>
        </div>
    );
}

export default HomePage;