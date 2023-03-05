import { useState, useEffect } from 'react'
import OpenAi from './../../components/openai/openai.componenct'

const Home = () => {
    const [timelines, setTimelines] = useState([]);

    useEffect(() => {
        fetch('https://localhost:44355/api/v1/Timeline/all')
            .then(response => response.json())
            .then((entries) => setTimelines(entries));
    }, []);

    console.log(timelines);

    return (
        <div>
            <OpenAi />
        </div>
    );
};

export default Home;
