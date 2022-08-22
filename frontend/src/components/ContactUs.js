import React from 'react'
import Navbar from "./Navbar"
import "./css/aboutus.css"

const ContactUs = () => {
  return (
    <div> 
    <Navbar/>

    <section id="page-header" className='margin-below-navbar '>
       
    <h2>#let's talk</h2>

    <p>LEAVE A MESSAGE, We love to hear from you!</p>
    
</section>

<section id="contact-details" className="section-p1">
  <div className="details">
    <span>GET IN TOUCH</span>
    <h2>Contact Us Today</h2>
    <div>
      <li>
        <i className="fa-solid fa-map" />
        <p>A.R. Centre Aminabad , Lucknow</p>
      </li>
      <li>
        <i className="fa fa-envelope" aria-hidden="true" />
        <p>furqan3122@gmail.com</p>
      </li>
      <li>
        <i className="fa fa-phone" aria-hidden="true" />
        <p>6388137254</p>
      </li>
      
    </div>
  </div>
  <div className="map">
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.71090799237!2d80.92277571451926!3d26.849145769288434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdb975f08d91%3A0xb41730c8ff1d6d87!2sA.R.Centre%2C%20Dr%20BN%20Varma%20Rd%2C%20Opposite%20gulmarg%20Hotel%2C%20Khayali%20Ganj%2C%20Aminabad%2C%20Lucknow%2C%20Uttar%20Pradesh%20226018!5e0!3m2!1sen!2sin!4v1661165404971!5m2!1sen!2sin"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

  </div>
</section>

<section id="form-details">
  <form action="">
    <span>LEAVE A MESSAGE</span>
    <h2>We love to hear from you</h2>
    <input type="text" placeholder="Your Name" />
    <input type="text" placeholder="Email" />
    <input type="text" placeholder="Subject" />
    <textarea
      name=""
      id=""
      cols={30}
      rows={10}
      placeholder="Your Message"
      defaultValue={""}
    />
    <button className="normal">Submit</button>
  </form>
</section>


</div>
  )
}

export default ContactUs