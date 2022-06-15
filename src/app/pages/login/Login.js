import React, { useEffect, useState } from 'react';
import './login.module.min.css';
import { Input, Button } from '../../components'
import './login.module.min.css';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/userSlice';
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAdmin = useSelector((state) => state?.user?.isAdmin);
  

  const handleLogin = async (e) => {
    e.preventDefault();
    // Validation form
    if (password.length < 8)
      return toast.error("password must be at least 8 characters");
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_PROXY_URI}/login`, {
          email,
          password
        });
      dispatch(login(data));
      if(data?.userInfo?.role === "user") toast.error("Sorry You are not admin")
      else toast.success("Admin Login successful")
      setLoading(false);
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      setLoading(false);
      console.log(error)
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() =>{
    if(isAdmin === "admin") return navigate("/dashboard")
  }, [isAdmin])

  return (
    <>
      {loading ? <p>loading...</p> : (
        <section className="login">
        <div className="container">
            <div className="login_container">
                <div className="login_img">
                    <img src="https://dashtar-admin.vercel.app/static/media/login-office.c7786a89.jpeg" alt="Razu Islam" />
                </div>
                <div className="login_info">
                    <h1>Admin Login</h1>
                    <form className='login_from' onSubmit={handleLogin}>
                      <div className="form_control">
                          <label htmlFor="email" className="label_text">Email</label>
                          <Input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Please enter email"
                          />
                      </div>
                      <div className="form_control">
                          <label htmlFor="password" className="label_text">Password</label>
                          <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Please enter password"
                          />
                      </div>
                      <Button
                      type='submit'
                      className="app_btn login_btn"
                      text={"Admin Login"}
                      />
                    </form>
                </div>
            </div>
        </div>
      </section>
      )}
    </>
  )
}

export default Login