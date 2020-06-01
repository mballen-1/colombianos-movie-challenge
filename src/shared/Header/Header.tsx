import React, { FormEvent } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Button } from '@material-ui/core';
import { HeaderProps } from './types';
import { CustomInputEvent } from '../types';

function Header(props: HeaderProps) {
  const dataProps = props.headerData;

  const handleInputChange = (e: CustomInputEvent) => {
    const target = e.currentTarget;
    if (target !== null) {
      dataProps.onInputTitleChange(target.value);
    }
  }

  const handleInputSubmit = (e: FormEvent) => {
    e.preventDefault();
    dataProps.onHeaderInputSubmit();
  }

  console.log(document.location);
  
  return (
    <>
      <header className={`header-container header-container__position`}>
        <div>
          <a href="/" className="muvizIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="149" height="17" viewBox="0 0 149 17">
              <path fill="#F1BE00" d="M.647 16.76c-.176 0-.327-.063-.455-.191S0 16.289 0 16.114V.646C0 .471.064.32.192.192.32.064.472 0 .647 0h3.788c.398 0 .714.17.947.51l3.56 5.883L12.418.646c.24-.43.584-.646 1.031-.646h3.788c.176 0 .328.064.456.192.128.127.191.279.191.454v15.468c0 .176-.063.327-.191.455s-.28.192-.456.192h-4.34c-.175 0-.327-.064-.455-.192-.127-.128-.191-.28-.191-.455v-6.56l-1.583 2.585c-.112.176-.235.32-.371.431-.136.112-.308.168-.516.168H8.103c-.208 0-.38-.056-.515-.168-.136-.111-.26-.255-.372-.43L5.634 9.553v6.56c0 .176-.064.327-.192.455s-.28.192-.455.192H.647zM40.69 17c-2.397 0-4.295-.547-5.694-1.64-1.398-1.094-2.098-2.734-2.098-4.92V.645c0-.175.064-.327.192-.454.128-.128.28-.192.456-.192h4.699c.175 0 .327.064.455.192.128.127.192.279.192.454v9.698c0 .606.148 1.065.443 1.376.296.312.74.467 1.33.467.592 0 1.036-.155 1.331-.467.296-.31.444-.77.444-1.376V.646c0-.175.064-.327.192-.454.128-.128.28-.192.455-.192h4.7c.175 0 .327.064.455.192.128.127.191.279.191.454v9.793c0 2.187-.695 3.827-2.085 4.92C44.957 16.454 43.07 17 40.689 17zm27.407-.24c-.303 0-.543-.08-.719-.239-.176-.16-.296-.343-.36-.55L62.51.693l-.024-.167c0-.144.052-.268.156-.371.104-.104.228-.156.372-.156h4.459c.304 0 .543.08.72.24.175.16.295.343.359.55l2.277 8.907L73.107.79c.064-.207.184-.39.36-.55.175-.16.415-.24.719-.24h4.459c.144 0 .268.052.371.156.104.103.156.227.156.37l-.024.168-4.507 15.276c-.064.208-.184.392-.36.551-.175.16-.415.24-.719.24h-5.466zm25.921 0c-.175 0-.327-.063-.455-.191s-.192-.28-.192-.455V.646c0-.175.064-.327.192-.454.128-.128.28-.192.455-.192h4.891c.176 0 .328.064.456.192.127.127.191.279.191.454v15.468c0 .176-.064.327-.191.455-.128.128-.28.192-.456.192h-4.89zm20.863 0c-.176 0-.328-.063-.456-.191-.127-.128-.191-.28-.191-.455v-3.448c0-.32.12-.598.36-.838l6.712-6.967h-6.185c-.176 0-.328-.064-.456-.192s-.192-.28-.192-.455V.646c0-.175.064-.327.192-.454.128-.128.28-.192.456-.192h13.137c.176 0 .328.064.456.192.128.127.192.279.192.454v3.4c0 .274-.077.507-.23.698l-6.435 7.108h6.329c.176 0 .328.064.455.192.128.127.192.279.192.455v3.615c0 .176-.064.327-.192.455-.127.128-.28.192-.455.192h-13.69zm29.301 0c-.176 0-.327-.063-.455-.191s-.192-.28-.192-.455v-4.166c0-.176.064-.327.192-.455s.28-.192.455-.192h4.172c.176 0 .327.064.455.192s.192.28.192.455v4.166c0 .176-.064.327-.192.455s-.28.192-.455.192h-4.172z" />
            </svg>
          </a>
        </div>
        <div >
          <form onSubmit={handleInputSubmit}>
            <Button>
              <ArrowDropDownIcon style={{ color: 'white' }} />
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
