import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Dropdown.scss'

const DropdownMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div >
      <Link onClick={toggleDropdown}>
        <AccountCircleIcon className='dropdown' style={{ fontSize: 30 }} />
      </Link>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          <ul>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
