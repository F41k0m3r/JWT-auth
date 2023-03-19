import React, {FC, Fragment} from 'react';
import './Loader.css';

const Loader:FC = () => {
    return (
        <Fragment>
            <div className='ldsFacebook'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Fragment>
    );
};

export default Loader;