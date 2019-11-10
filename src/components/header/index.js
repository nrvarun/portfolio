import React from 'react';

import NavLink from '../navlink/index';

class Header extends React.Component {
    render(){
        return(
            <header className="header">
                <ul className="d-flex justify-content-between align-items-center">
                    <li>
                        <ul className="nav-list">
                            <li>
                                <NavLink text="About" link="" newTab="false"/>
                            </li>
                            <li>
                                <NavLink text="projects" link="" newTab="false"/>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className="nav-list">
                            <li>
                                <NavLink text="github" link="https://github.com/nrvarun/" newTab="true"/>
                            </li>
                            <li>
                                <NavLink text="linkedin" link="https://www.linkedin.com/in/varunnr/" newTab="true"/>
                            </li>
                        </ul>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header;