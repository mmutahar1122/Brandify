import { useState } from "react"
import { LoginUser } from "../../../Store/Slices";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import * as yup from 'yup'

const Login = () => {
  const initialState = {
    email: '',
    password: ''
  }
  const loginSchema= yup.object({
    email: yup.string().email("invalid email").min(3, "email be 3 letters").required("email is required"),
    password: yup.string().min(4, "password must be 4 letters").required("password is required"),
  })
  const [state, setState] = useState(initialState);
  const [loginToken,setLoginToken]=useState(localStorage.getItem('token'))

  const [errMessage, setErrMessage] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const vaidation = await loginSchema.validate(state, {abortEarly : false});
      if(vaidation){
        setErrMessage({});
        try {
          const URL = 'http://localhost:1991/api/auth/login';
          
          const responce = await fetch(URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(state),
          });
          // console.log("login responce",await responce.json())
          const resOk = await responce.json();
          console.log("login responce",resOk)
         const saveloginToken = localStorage.setItem('token',resOk.Token);

          if(responce.ok){
            dispatch(LoginUser(state));
            setState(initialState);
            toast("login succefull");
            if(loginToken){
              navigate('/');
            }
          }
          if(!responce.ok){
            toast("Invalid Crediantial");
    
          }
    } catch (error) {
      toast("failed to fetch data");
    
        }
      }

    } catch (error) {
      const err = error.inner?.reduce((acc, currval)=>{
        acc[currval.path] = currval.message
        return acc
      },{})
      setErrMessage(err);
      console.log("err",err)
    }
   

  }

  return <>
    <div className="w-full md:max-w-lg max-w-xs mx-auto md:mt-[100px]">
      <form onSubmit={(e) => handleSubmit(e)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="h-[110px]">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input onChange={(e) => handleChange(e)} name="email" value={state.email} className="shadow appearance-none border rounded w-full py-2 px-3 h-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="First Name" />
                    <p className="text-red-500 mt-2 md:text-sm ">{errMessage?.email}</p>

                </div>
                <div className="h-[110px]">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input onChange={(e) => handleChange(e)} name="password" value={state.password} className="shadow appearance-none border rounded w-full py-2 px-3 h-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="First Name" />
                    <p className="text-red-500 mt-2 md:text-sm ">{errMessage?.password}</p>

                </div>
        <div className="flex items-center justify-between mt-3">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Log In
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-sm ">don't have an account? <span onClick={() => navigate("/signup-user")} className="cursor-pointer text-blue-700">goto signup</span>
      </p>
    </div>
  </>
}

export default Login