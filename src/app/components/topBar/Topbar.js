import React, { useEffect, useState } from "react";
import "./topbar.module.min.css";
import { IoMdMoon, IoMdNotifications } from "react-icons/io";
import { FaBars } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { showMenu } from "../../redux/menuSlice";
import { changeTheme } from "../../redux/themeSlice";

const TopBar = () => {

  const dispatch  = useDispatch();
  const [show, setShow] = useState(false);
  const profileImg = useSelector((state) => state?.user?.user?.avatar);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));


  useEffect(() =>{
      dispatch(showMenu(show));
  }, [show])

  const toogleTheme = () =>{
    setTheme((current) => (current === "light" ? "dark" : "light"))
  }


  useEffect(() =>{
    dispatch(changeTheme(theme));
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <>
      <header className="header">
        <div className="topbar">
          {/* Mobile Menu */}
          <div className="mobile_menu" onClick={() => setShow(!show)}>
            <FaBars />
          </div>
          <div className="container">
            <div className="topbar_wrap">
            <div className="dark_mode" onClick={toogleTheme}>
              {theme === "light" ? (
                <IoMdMoon size={20} color="#0e9f6e" style={{cursor:"pointer"}} />
              ) : (
                <BsSunFill size={20} color="#0e9f6e" style={{cursor:"pointer"}} />
              )}
              
            </div>
            <div className="notification">
              <IoMdNotifications size={20} color="#0e9f6e" style={{cursor:"pointer"}} />
            </div>
            <div className="profile">
              <img src={profileImg} alt="Razu Islam" />
            </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopBar;
