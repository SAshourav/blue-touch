import React from 'react';
import Aheader from './Aheader';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const AMain = () => {
    return (
        <div>
            <Aheader></Aheader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AMain;