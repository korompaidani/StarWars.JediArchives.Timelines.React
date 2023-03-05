import { useState, useEffect } from 'react'

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
            <h1>This is the Home</h1>
        </div>
    );
};

export default Home;
