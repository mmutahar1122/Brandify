import { useState } from "react"
import { SignupUser } from "../../../Store/Slices";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup"


const Signup = () => {
    const initialState = {
        fname: '',
        lname: '',
        email: '',
        password: '',
    };

    const SignUpSchema = yup.object({
        fname: yup.string().required("first name is required").min(3, "first name must be 3 letters"),
        lname: yup.string().required("last name is required").min(3, "last name must be 3 letters"),
        email: yup.string().email("invalid email").required("email is required").min(3, "name must be 3 letters"),
        password: yup.string().required("password is required").min(3, "password must be 4 letters"),

    })
    const [state, setState] = useState(initialState);
    const [errMessage, setErrMessage] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setState({
            ...state,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const validation = await SignUpSchema.validate(state, { abortEarly: false });
            console.log("validation", validation)
            if (validation) {
                try {

                    const URL = "http://localhost:1991/api/auth/signup";
                    const responce = await fetch(URL, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(state),
                    })
                    console.log("responce", responce);
                    dispatch(SignupUser(state));
                    setState(initialState);
                    setErrMessage({});
                    navigate("/login-user");

                } catch (error) {
                    console.log("error", error);
                }

            }
        } catch (err) {
            const err_msg = err.inner?.reduce((acc, curr) => {
                acc[curr.path] = curr.message;
                return acc
            }, {});
            setErrMessage(err_msg)
            console.log("signup validation", err_msg);
        }
    }
    return <>
        <div className="w-full md:max-w-lg max-w-xs mx-auto md:mt-[100px]">
            <form onSubmit={(e) => handleSubmit(e)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="h-[110px]">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        First Name
                    </label>
                    <input onChange={(e) => handleChange(e)} name="fname" value={state.fname} className="shadow appearance-none border rounded w-full py-2 px-3 h-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="First Name" />
                    <p className="text-red-500 mt-2 md:text-sm ">{errMessage?.fname}</p>

                </div>
                <div className="h-[110px]">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Last Name
                    </label>
                    <input onChange={(e) => handleChange(e)} name="lname" value={state.lname} className="shadow appearance-none border rounded w-full py-2 px-3 h-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Last Name" />
                    <p className="text-red-500 mt-2 md:text-sm ">{errMessage?.lname}</p>


                </div>
                <div className="h-[110px]">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input onChange={(e) => handleChange(e)} name="email" value={state.email} className="shadow appearance-none border rounded w-full py-2 px-3 h-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email" />
                    <p className="text-red-500 mt-2 md:text-sm ">{errMessage?.email}</p>


                </div>
                <div className="h-[110px]">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input onChange={(e) => handleChange(e)} name="password" value={state.password} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 h-12 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="****" />
                    <p className="text-red-500 mt-2 md:text-sm ">{errMessage?.password}</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2024 Brandify.com
            </p>
        </div>
    </>
}

export default Signup