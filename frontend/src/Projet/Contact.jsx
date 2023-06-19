import React, { Component } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'



export default class Contact extends Component {
    render() { 
        return (
            <div className='formClass '>
                <NavBar />
                <div>


                    {/* <!-- Contact Start --> */}
                    <div className="contact">
                        <div className="container">
                            <div className="section-header text-center">
                                <p>Contact Us</p>
                                <h2>Contact For Any Query</h2>
                            </div>
                            <div className="row align-items-center contact-information">
                                <div className='info'>
                                <div className="col-md-6 col-lg-3">
                                    <div className="contact-info">
                                        <div className="contact-icon">
                                            <i className="fa fa-map-marker-alt"></i>
                                        </div>
                                        <div className="contact-text">
                                            <h3>Address</h3>
                                            <p>OFPPT ISAG, Casablanca, Morocco</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="contact-info">
                                        <div className="contact-icon">
                                            <i className="fa fa-phone-alt"></i>
                                        </div>
                                        <div className="contact-text">
                                            <h3>Call Us</h3>
                                            <p>+212 684 750 243</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="contact-info">
                                        <div className="contact-icon">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div className="contact-text">
                                            <h3>Email Us</h3>
                                            <p>aloCouscous@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="contact-info">
                                        <div className="contact-icon">
                                            <i className="fa fa-share"></i>
                                        </div>
                                        <div className="contact-text">
                                            <h3>Follow Us</h3>
                                            <div className="contact-social">
                                                <a href="##"><i className="fab fa-twitter"></i></a>
                                                <a href="##"><i className="fab fa-facebook-f"></i></a>
                                                <a href="##"><i className="fab fa-youtube"></i></a>
                                                <a href="##"><i className="fab fa-instagram"></i></a>
                                                <a href="##"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="row contact-form">
                                <div className="col-md-6 iframe">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.7841282769928!2d-7.605308485708466!3d33.55898465101112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda632adb55baec7%3A0xd371d5cf9d1ac005!2sOFPPT%20ISTA%20AG!5e0!3m2!1sfr!2sma!4v1677345417570!5m2!1sfr!2sma" />
                                </div>
                                <div className="col-md-6 cont-form">
                                    <div id="success"></div>
                                    <form name="sentMessage" id="contactForm" noValidate="noValidate">
                                        <div className="control-group">
                                            <input type="text" className="form-control" id="Name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your Name" />
                                            <p className="help-block text-danger"></p>
                                        </div><br />
                                        <div className="control-group">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                            <p className="help-block text-danger"></p>
                                        </div><br />
                                        <div className="control-group">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                            <p className="help-block text-danger"></p>
                                        </div><br />
                                        <div className="control-group">
                                            <textarea className="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                            <p className="help-block text-danger"></p>
                                        </div><br />
                                        <div>
                                            <button className="btn custom-btn" type="submit" id="sendMessageButton">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- JavaScript Libraries --> */}
                    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                    <script src="lib/easing/easing.min.js"></script>
                    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
                    <script src="lib/tempusdominus/js/moment.min.js"></script>
                    <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
                    <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

                    {/* <!-- Contact Javascript File --> */}
                    <script src="mail/jqBootstrapValidation.min.js"></script>
                    <script src="mail/contact.js"></script>

                    {/* <!-- Template Javascript --> */}
                    <script src="js/main.js"></script>
                </div>
                <Footer />
            </div>

        )
    }
}
