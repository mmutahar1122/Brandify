import React from 'react'

const Home = () => {
  return (
    <main id="main">
    
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>Welcome To Bradify</h1>
      {/* <h2>I'm Designer</h2> */}
      <p><span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
    </div>
  </section>
    </main>
  )
}

export default Home;