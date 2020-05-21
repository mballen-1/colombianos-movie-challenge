import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Button } from '@material-ui/core';

function Header() {
  return (
    <div>
      <header className="header-container">
        <h5>MUVIZ</h5>
        <div className="header-options-container">
            <Button>
              <ArrowDropDownIcon style={{ color: 'white' }}/>
            </Button>
            <Button>
                <SearchIcon style={{ color: 'white' }} />
            </Button>
            <input type="text" placeholder="search by movie or director"></input>
        </div>
      </header>
    </div>
  );
}

export default Header;
