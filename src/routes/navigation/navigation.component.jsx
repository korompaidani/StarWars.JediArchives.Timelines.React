import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <h1>This is the navigation</h1>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;