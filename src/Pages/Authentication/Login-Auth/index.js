import { useState } from "react"
import { LoginUser } from "../../../Store/Slices";
import { useDispatch } from "react-redux";

const Login = () => {
const initialState = {
    email:'',
    password:''
}
    const [state, setState] = useState(initialState);
const dispatch = useDispatch();
    const handleChange = (e) =>{
const {name, value} = e.target;
setState({
    ...state,
    [name]:value
})
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch(LoginUser(state));

    }

    return <>
    <div className="w-full md:max-w-lg max-w-xs b mx-auto md:mt-[100px]">
  <form onSubmit={(e)=>handleSubmit(e)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Email
      </label>
      <input onChange={(e)=>handleChange(e)} name="email" value={state.email} className="shadow appearance-none border rounded w-full py-2 px-3 h-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input onChange={(e)=>handleChange(e)} name="password" value={state.password} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 h-12 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="password" placeholder="****" />
      {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Log In
      </button>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
    </>
}

export default Login