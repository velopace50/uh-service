import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import Button from '../component/Button';
import Logo from '../img/logo.png';

const Header = () => {
  const [hambergerMenu, setHambergerMenu] = useState(true);

  const handleOnclick = () => {
    setHambergerMenu(!hambergerMenu);
  };

  return (
    <div>
      <div
        className={`flex justify-between items-center bg-secondary px-65 py-10 `}
      >
        <div className="text-white text-20 xl:hidden">
          {hambergerMenu ? (
            <FontAwesomeIcon
              className="text-40"
              icon={faBars}
              onClick={handleOnclick}
            />
          ) : (
            <FontAwesomeIcon
              className=""
              icon={faXmark}
              onClick={handleOnclick}
            />
          )}
        </div>
        <div
          className={`xl:flex xl:flex-row absolute top-0 left-0 z-50 ${
            hambergerMenu ? '' : 'px-120 pt-20 pb-10'
          } bg-danger-300 xl:relative  xl:bg-transparent xl:items-center`}
        >
          <div
            className={`${
              hambergerMenu ? 'hidden' : 'block'
            }  xl:inline xl:mr-50`}
          >
            <img
              className={`${hambergerMenu ? 'w-130 h-36' : 'w-200 h-50'}`}
              src={Logo}
              alt="logo"
            />
            {!hambergerMenu && (
              <FontAwesomeIcon
                className="absolute top-25 right-35 text-warning text-50"
                icon={faXmark}
                onClick={handleOnclick}
              />
            )}
          </div>
          <nav
            className={`flex flex-col items-center ${
              hambergerMenu
                ? 'text-black text-14'
                : 'text-warning text-20 leading-100'
            }  xl:flex xl:flex-row xl:text-white xl:h-90`}
          >
            <ul
              className={`${
                hambergerMenu
                  ? 'hidden'
                  : 'inline hover:bg-danger-400 rounded-20 px-5'
              } xl:inline xl:mr-20 xl:px-20 xl:py-10 xl:rounded-20 xl:hover:bg-secondary-50`}
            >
              Marketplace
            </ul>
            <ul
              className={`${
                hambergerMenu
                  ? 'hidden'
                  : 'inline hover:bg-danger-400 rounded-20 px-5'
              } xl:inline xl:mr-20 xl:px-20 xl:py-10 xl:rounded-20 xl:hover:bg-secondary-50`}
            >
              Signature Kits
            </ul>
            <ul
              className={`${
                hambergerMenu
                  ? 'hidden'
                  : 'inline hover:bg-danger-400 rounded-20 px-5'
              } xl:inline xl:mr-20 xl:px-20 xl:py-10 xl:rounded-20 xl:hover:bg-secondary-50`}
            >
              How It Works
            </ul>
            <ul
              className={`${
                hambergerMenu
                  ? 'hidden'
                  : 'inline hover:bg-danger-400 rounded-20 px-5'
              } xl:inline xl:mr-20 xl:px-20 xl:py-10 xl:rounded-20 xl:hover:bg-secondary-50`}
            >
              Our Story
            </ul>
            <ul
              className={`${
                hambergerMenu
                  ? 'hidden'
                  : 'inline hover:bg-danger-400 rounded-20 px-5'
              } xl:inline xl:mr-20 xl:px-20 xl:py-10 xl:rounded-20 xl:hover:bg-secondary-50`}
            >
              Contact Us
            </ul>
          </nav>
        </div>
        <div>
          <Button
            label="Get Started"
            bg_color="bg-gradient-to-r from-primary to-primary-500"
            font_size="text-10"
            padding="px-20 py-7"
            border="rounded-8"
            hover="hover:to-primary-300"
          />
          <span className="ml-20" />
          <Button
            label="Log In"
            bg_color="bg-gradient-to-r from-warning to-warning-400"
            font_size="text-10"
            padding="px-20 py-7"
            border="rounded-8"
            hover="hover:to-warning-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
