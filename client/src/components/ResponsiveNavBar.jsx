import React from 'react';
import { useNavigate } from 'react-router-dom';
import listIcon from "../assets/list.svg";

function ResponsiveNavBar() {
    const navigate = useNavigate();

    return (
        <div className="dropdown">
            <button className="btn btn-info dropdown w-[60px] h-[60px] rounded-[50%]" type="button" id="dropdownMenuButton"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img src={listIcon} alt="The image was not found"
                    className='list-icon-navBar w-full h-full' />
            </button>
            <ul className="dropdown-menu w-[200px] h-auto text-[1.5rem]" aria-labelledby="dropdownMenuButton">
                <li><button className="dropdown-item" onClick={() => navigate("/about")}>אודות</button></li>
                <li><button className="dropdown-item" onClick={() => navigate("/contact")}>צור קשר</button></li>
                <li><button className="dropdown-item" onClick={() => navigate("/RegistrationMenu")}>רישום</button></li>
                <li><button className="dropdown-item" onClick={() => navigate("/")}>דף הבית</button></li>
            </ul>
        </div>
    );
}

export default ResponsiveNavBar;
