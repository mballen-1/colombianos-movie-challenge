import React, { FormEvent } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Button } from '@material-ui/core';
import { HeaderProps } from './types';
import { CustomInputEvent } from '../types';

function Header(props: HeaderProps) {
  const dataProps = props.headerData;

  const handleInputChange  = (e : CustomInputEvent) => {
    const target = e.currentTarget;
    if(target !== null) {
      dataProps.onInputTitleChange(target.value);
    }
  }

  const handleInputSubmit = (e : FormEvent) => {
      e.preventDefault();
      dataProps.onHeaderInputSubmit();
  }

  return (
    <>
      <header className="header-container header-container__position">
        <div>
          <a href="/" className="muvizIcon">MUVIZ</a>
        </div>        
        <div >
            <form onSubmit={handleInputSubmit}>
              <Button>
                <ArrowDropDownIcon style={{ color: 'white' }}/>
              </Button>
              <Button
                onClick={handleInputSubmit}
              >
                <SearchIcon style={{ color: 'white' }} />
              </Button>
              <input 
                type="text" 
                placeholder="Search by movie or director"
                className='input__font input__background'
                onChange={handleInputChange}
              />
            </form>              
        </div>
      </header>
    </>
  );
}

export default Header;
