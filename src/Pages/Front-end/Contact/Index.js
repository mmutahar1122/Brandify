import React, { useState } from 'react';
import { contactusUsers } from '../../../Store/Slices';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as yup from "yup"
import {toast } from 'react-toastify';

const Contact = () => {
  const initialState = {
    name:"",
    email:"",
    message:""
  }

  const contactSchema = yup.object({
    name:yup.string().min(3,"name must be 3 letters").required("name is required"),
    email:yup.string().email().min(3,"email must be 3 letters").required("email is required"),
    message:yup.string().min(20,"message must be 20 letters").required("message is required"),
  })
  const [state, setState] = useState(initialState);
  const [errMessage, setErrMessage] =useState({});
  const userData = useSelector((state)=>state.name.Login_users.JsonResponce);
  const [contactData, setContactData] = useState({
    name : userData?.userName,
    email : userData?.userEmail,
    message : ""
  })
  const dispatch = useDispatch();

  const handleChange = (e) => {

    const {name, value} =e.target;
    console.log(name,value)
    setContactData({
      ...contactData,
      [name]:value
    })

  }
  // 
  const handleSubmit =async (e) =>{
    e.preventDefault();
    const URL = "http://localhost:1991/api/auth/user-contactus";

  try {
    const validation = await contactSchema.validate(contactData, {abortEarly: false});
    console.log(validation)
    if(validation){
      setErrMessage({});
      try {
        const responce = await fetch(URL,{
          method : "POST",
          headers :{
            "Content-Type" :"application/json"
          },
          body : JSON.stringify(contactData),
        })
        console.log("responce for  Contactus users", await responce.ok);
        if(responce.ok){
          dispatch(contactusUsers(contactData));
        setContactData(initialState);
        toast.success("Subscribed");


        }
      } catch (error) {
        console.log("data post failed form contact us page");
        toast.error("Failed to Subscribe");
      }
    }
  } catch (err) {
    const err_message = err.inner?.reduce((acc, curr)=>{
      acc[curr.path] = curr.message;
      return acc
    }, {})
    setErrMessage(err_message,'-=-')
    console.log("yup validation error",err_message);

  }
  }
  return (
    <main id="main">
    

{/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>

        <div className="row" data-aos="fade-in">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Millat Chowk Sargodha Road</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>Brandify91@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+92-309-6382191</p>
              </div>

              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0"
            //    style={{"border:0; width: 100%; height: 290px;"}} 
            allowFullScreen></iframe> */}
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form onSubmit={(e)=>handleSubmit(e)} action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="">
                <div className="h-[110px]">
                  <label>Your Name</label>
                  <input onChange={(e)=>handleChange(e)} type="text" name="name" value={contactData.name}  className="form-control" />
                  <p className='text-red-500 text-sm'>{errMessage?.name}</p>
                </div>
                <div className="h-[110px]">
                  <label>Your Email</label>
                  <input onChange={(e)=>handleChange(e)} type="email"  name="email" value={contactData.email} className="form-control"/>
                  <p className='text-red-500 text-sm'>{errMessage?.email}</p>

                </div>
              </div>
              {/* <div className="form-group">
                <label>Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required/>
              </div> */}
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" onChange={(e)=>handleChange(e)} name="message" value={contactData.message} rows="10"></textarea>
                <p className='text-red-500 text-sm'>{errMessage?.message}</p>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Contact Section --> */}
    </main>
  )
}

export default Contact;