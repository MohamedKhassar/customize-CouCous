import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
export default class Footer extends Component {

  render() {
    return (
      <div>
         {/* <!-- Footer Start --> */}
         <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-contact">
                                    <h2>Our Address</h2>
                                    <p><i className="fa fa-map-marker-alt"></i>123 Street, Casablanca, Morocco</p><br />
                                    <p><i className="fa fa-phone-alt"></i>+212 684 750 243</p><br />
                                    <p><i className="fa fa-envelope"></i>aloCouscous@gmail.com</p><br />
                                    
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-link">
                                    <h2>Quick Links</h2>
                                    <a href="##">Terms of use</a>
                                    <a href="##">Privacy policy</a>
                                    <a href="##">Cookies</a>
                                    <a href="##">Help</a>
                                    <a href="##">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. <br /> Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus,  <br /> lorem quam iaculis felis, sed lacus neque id eros.
                            </p><br />
                            <div className="form">
                                <input className="input" placeholder="Email goes here"/>
                                <button className="btn custom-btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <p>Copyright &copy; <a href="##">Alo CousCous</a>, All Right Reserved.</p>
                    <p>Designed By <a href="https://htmlcodex.com">Stagiaire De Ofppt</a></p>
                </div>
            </div>
        </div>
        <a href="#header"  className="back-to-top"><button className='back-top'><i className="fa fa-chevron-up"></i></button></a>

      </div>
    )
  }
}
