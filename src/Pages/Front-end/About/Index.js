import React from 'react'

const About = () => {
  return (
    <main id="main">
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>We are Passionate about that leave a lasting impression. With years of experience in the industry, we have honed our skills to deliver exceptional design solution that ate both functional and aestheticaly pleasing. <br/> We work closely with clients to understand their unique needs and goals. We specialize in creating custom design solution that help brands stand out in a crowded maketplace. From logo design and branding to marketing collateral our services are tailored to meet the specific needs of each client.
            </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="assets/img/Profile-img.jpeg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>UI/UX  &amp; GRAPHIC DESIGNER </h3>
            <p className="fst-italic">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. */}
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Hamza Javaid</span></li>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>12 JULY 2004</span></li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.brandify.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+92-309-6382191</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Pakistan, Faisalabad</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor Of Computer Science</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>brandify91@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available (Open To Work)</span></li>
                </ul>
              </div>
            </div>
            <p>
              {/* Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores. */}
            </p>
          </div>
        </div>

      </div>
    </section>  
    </main>)
}

export default About;