import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <h1>Jedi Archives - Timelines</h1>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;