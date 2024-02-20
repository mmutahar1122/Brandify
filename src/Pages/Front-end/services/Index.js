import React from 'react'
import { useState } from 'react'
import ServicesList from "../../../Components/Services/services"
const Services = () => {

  const [modal,setModal]=useState(false)
  const [state,setState]=useState()

  const logoModal=(val)=>{
    setModal(!modal)
    setState(val)
  }
  const closeModal = () => {
    setModal(false);
  }

  
  return (
    <main id="main">
    
    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <p>All services are Availabe in Cheap Price and Client saticfation.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon"><i className="bi bi-briefcase"></i></div>
            
            <h4 className="title"><span onClick={()=>logoModal('logo_Design')}>LOGO DESIGN</span></h4>
          </div>
          <div className="col-lg-4 col-md-6 icon-box " data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><i className="bi bi-boxes"></i></div>
            <h4 className="title"><span onClick={()=>logoModal('PACKAGING_DESIGN')}>PACKAGING DESIGN</span></h4>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon"><i className="bi bi-bar-chart"></i></div>
            <p className="description">
              {/* write your services detail here if you want to add description about services than go <p> below the <h4> tag*/}

            </p>
            <h4 className="title"><span  onClick={()=>logoModal('SOCIAL_MEDIA_POST_DESIGN')}>SOCIAL MEDIA POST DESIGN</span></h4>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon"><i className="bi bi-menu-up"></i></div>
            <p className="description">
               {/* write your services detail here if you want to add description about services than go <p> below the <h4> tag*/}

            </p>
            <h4 className="title"><span  onClick={()=>logoModal('MENU_DESIGN')}>MENU DESIGN</span></h4>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i className="bi bi-brightness-high"></i></div>
            <p className="description">
               {/* write your services detail here if you want to add description about services than go <p> below the <h4> tag*/}

            </p>
            <h4 className="title"><span  onClick={()=>logoModal('FLYER_BROUCHER')}>FLYER / BROUCHER</span></h4>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
            <div className="icon"><i className="bi bi-instagram "></i></div>
            <p className="description">
              {/* write your services detail here if you want to add description about services than go <p> below the <h4> tag*/}

            </p>
            <h4 className="title"><span  onClick={()=>logoModal('INSTA_FB_ACCOUNT')}>INSTA / FB ACCOUNT HANDLING</span></h4>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
            <div className="icon"><i className="bi bi-meta"></i></div>
            <p className="description">
              {/* write your services detail here if you want to add description about services than go <p> below the <h4> tag*/}

            </p>
            <h4 className="title"><span  onClick={()=>logoModal('BRANDING')}>BRANDING</span></h4>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
            <div className="icon"><i className="bi bi-calendar4-week"></i></div>
            <h4 className="title"><span  onClick={()=>logoModal('AND_MUCH_MORE')}>AND MUCH MORE</span></h4>
            <p className="description">
               {/* write your services detail here if you want to add description about services than go <p> below the <h4> tag*/}

            </p>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Services Section --> */}
    {
  modal && (
    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeModal}>
      <ServicesList state={state} closeModal={closeModal} setModal={setModal}/>
    </div>
  )
}

    
    </main>
  )
}

export default Services;