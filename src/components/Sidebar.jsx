import { NavLink } from "react-router-dom";

function Sidebar () {
    return (
        <div className="sidebar">
            <ul className="sidebar-menu">
                <li>
                    <NavLink to="/"><h3>Dashboard</h3></NavLink>
                </li>
                <li>
                    <NavLink to="/about"><h3>Acerca de</h3></NavLink>
                </li>
            </ul>
        </div>
    )
}   

export default Sidebar;
