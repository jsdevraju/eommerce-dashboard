import React, { useState } from "react";
import "./aside.module.min.css";
import { MdOutlineDashboardCustomize, MdOutlineExplore, MdOutlineLogout } from "react-icons/md";
import { FiShoppingBag, FiUsers, FiGift, FiUser } from "react-icons/fi";
import { AiOutlineBars, AiOutlineSetting } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from '../button/Button';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userSlice";
import axios from "axios";
import toast from "react-hot-toast";

const menuData = [
  {
    icon: <MdOutlineDashboardCustomize />,
    url: "/dashboard",
    text: "Dashboard",
  },
  {
    icon: <FiShoppingBag />,
    url: "/products",
    text: "Products",
  },
  {
    icon: <AiOutlineBars />,
    url: "/category",
    text: "Category",
  },
  {
    icon: <FiUsers />,
    url: "/customers",
    text: "Customers",
  },
  {
    icon: <MdOutlineExplore />,
    url: "/orders",
    text: "Orders",
  },
  {
    icon: <FiGift />,
    url: "/coupons",
    text: "Coupons",
  },
  {
    icon: <FiUser />,
    url: "/member",
    text: "Member",
  },
  {
    icon: <AiOutlineSetting />,
    url: "/setting",
    text: "Setting",
  },
];

const AsideBar = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menu = useSelector((state) => state.menu?.isClick);
  
  


  const handleLogOut = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_PROXY_URI}/logout`
      );
      dispatch(login(data));
      setLoading(false);
      localStorage.removeItem("user");
      toast.success(data.message);
      navigate("/login")
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
     {loading ? <p>loading...</p> : (
       <nav className={menu ? "asidebar active" : "asidebar"}>
       <Link to="/dashboard" className="logo">Razu Islam</Link>
       {/* Menu Item */}
       <div className="menu_item">
         <ul>
           {menuData.map(({ url, text, icon }, index) => (
             <li key={index}>
               <NavLink className="nav_links" to={url}>
                 {icon} {text}
               </NavLink>
             </li>
           ))}
         </ul>
       </div>
       {/* Logout Button */}
       <Button
       onClick={handleLogOut}
       text={"Logout"}
       icon={<MdOutlineLogout />}
       type="button"
       className="app_btn login_btn"
       style={{
         display:"flex",
         justifyContent:"center",
         alignItems:"center",
         gap:"10px"
       }}
       />
       
     </nav>
     )}
    </>
  );
};

export default AsideBar;
