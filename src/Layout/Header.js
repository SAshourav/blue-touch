import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png'

const Header = () => {
    return (
        <div className="navbar bg-base-100 py-5">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case"><img className='w-36' src={logo} alt='DW Matrix'/> </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className="relative">
                    <details>
                        <summary className='text-xl'>
                        Services
                        </summary>
                        <ul className="p-2 bg-base-100 absolute mt-2">
                            <li><Link to="/Facebook">Facebook</Link></li>
                            <li><Link to="Instagram">Instagram</Link></li>
                            <li><Link to="/LinkedIn">LinkedIn</Link></li>
                            <li><Link to="/twitter">Twitter</Link></li>
                        </ul>
                    </details>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Header;