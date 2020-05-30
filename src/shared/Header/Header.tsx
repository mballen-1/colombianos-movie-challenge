import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Button } from '@material-ui/core';
import { HeaderProps } from './types';
import { CustomInputEvent } from '../types';

function Header(props: HeaderProps) {

  const handleInputChange  = (e : CustomInputEvent) => {
    const target = e.currentTarget;
    if(target !== null) {
      props.headerData.onInputTitleChange(target.value);
    }
  }

  return (
    <>
      <header className="header-container">
        <div>
          <a href="/" className="muvizIcon">MUVIZ</a>
        </div>        
        <div className="header-searchForm__display">
            <form>
              <Button>
                <ArrowDropDownIcon style={{ color: 'white' }}/>
              </Button>
              <Button
                // onClick={this.handleChange}
              >
                <SearchIcon style={{ color: 'white' }} />
              </Button>
              <input 
                type="text" 
                placeholder="Search by movie or director"
                onChange={handleInputChange}
              />
            </form>              
        </div>
      </header>
    </>
  );
}

export default Header;
