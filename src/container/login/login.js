import React, { useState } from "react";
import "./login.css";
import Input from "../../components/Input/input";
import Logo from "../../components/Logo/logo";

import { useNavigate } from "react-router-dom";

import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const isShowIcon = true;

  const setToken = (event) => {
    localStorage.setItem("token", "12345");
    navigate("/products");
    console.log(setToken);
  };

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  let url = useLocation();
  console.log(url);

  const postToken = () => {
    fetch("http://localhost:8081/api/login", {
      method: "POST",
      body: JSON.stringify({
        name,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error_message) {
          alert(data.error_message);
        } else {
          console.log(data.data);
          localStorage.setItem("token", data.data.token);
        }
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postToken();
    setName("");
    setPassword("");
  };
  console.log({ name, password });
  return (
    <div className="container">
      <div className="main-container">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <Logo />
            <Input
              value={name}
              setValue={setName}
              type="text"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
            />{" "}
            <Input
              value={password}
              setValue={setPassword}
              type="password"
              placeholder="Password"
              minLength={8}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {isShowIcon ? <BsEyeFill /> : <BsEyeSlashFill />}
            <div>
              <button className="input_field login-btn" onClick={setToken}>
                LOGIN
              </button>
            </div>
          </form>
        </div>
        {/* <Link to={"/Products"}>Products Page</Link> */}
      </div>
    </div>
  );
};

export default Login;

// import PropTypes from 'prop-types'

// async function LoginUser(credentials) {
//     return fetch('http://localhost:8080/login',{
//         method: 'POST',
//         header: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     }).then(data => data.json())
// }

// const Login = ({setToken}) => {
//     const [userName, setUserName] = useState()
//     const [password, setPassword] = useState()

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const token = await LoginUser({
//             userName,
//             password
//         })
//         setToken(token)
//     }
//   return (
//     <>
//     <div className='bg-black/50 fixed top-0 left-0 w-full h-screen'></div>
//     <div className='fixed w-full px-4 py-24 z-50'>
//     <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 text-white'>
//     <div className='max-w-[320px] mx-auto py-16'>
//         <h1>Sign Up Here</h1>
//         <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
//                 <p className='text-white font-bold'>UserName</p>
//                 <input type="text" required onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 rounded text-black' placeholder='JohnDoe'/>
//                 <p className='text-white font-bold'>PassWord</p>
//                 <input type="password" required onChange={(e)=>setUserName(e.target.value)}  className='p-3 my-2 rounded text-black' placeholder='Please enter a strong password'/>
//             <button type="submit" className='bg-red-700 py-3 my-6 rounded font-bold px-4'>Submit</button>
//             <div>
//                 <p><input type="checkbox" />Remember Me</p>
//             </div>
//         </form>
//     </div>
//     </div>
//     </div>
//     </>
//   )
// }

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }
