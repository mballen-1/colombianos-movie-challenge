import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Button } from '@material-ui/core';

function Header() {
  return (
    <div>
      <header className="header-container">
        <div className="muviz-anchor-container">
          <a href="/">MUVIZ</a>
        </div>        
        <div className="header-options-container">
          <div className="options-padding">
              <Button>
                <ArrowDropDownIcon style={{ color: 'white' }}/>
              </Button>
              <Button>
                  <SearchIcon style={{ color: 'white' }} />
              </Button>
              <input type="text" placeholder="Search by movie or director"></input>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
