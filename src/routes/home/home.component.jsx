import {Outlet} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Directory from './../../components/directory/directory.component.jsx';

const Home = () => {
    const [timelines, setTimelines] = useState([]);

    useEffect(() => {
        fetch('https://localhost:44355/api/v1/Timeline/all')
            .then(response => response.json())
            .then((entries) => setTimelines(entries));
    }, []);
    return (
        <div>
            <Outlet/>
            <Directory timelines={timelines} />
        </div>
    );
};

export default Home;
