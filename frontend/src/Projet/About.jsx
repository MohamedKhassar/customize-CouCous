import React, { Component } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom';
import Footer from './Footer';
export default class About extends Component {
  render() { 
    return (
      <div className='haha'>
        <div className='all'>
                    <input type="checkbox" id='check' onClick={this.handelClick} />
                    <label htmlFor="check" className='checkbtn'>
                        <i className='fas fa-bars'></i>
                    </label>
                    <NavBar />
                    <div className="content">
                        <h1>About <span className='span'>U</span><span>S</span> </h1>
                        <p>Know More About Us</p>
                        <button type='button' className='btn1'> Menu </button>
                        <Link to="/menu">
                        <button type='button' className='btn2'> Make Your CousCous </button>
                        </Link>
                    </div>
                </div><br />
                <section className="about">
                    <div className="main">
                        <img src="./image/about2.png" alt="" />

                        <div className="about-text">
                            <h3>About Us</h3><br />
                            <h2>Cooking Since 1990</h2><br /><br />
                            <p>Couscous is a traditional dish that has been enjoyed in Morocco for centuries. Our company prides itself on making authentic, high-quality couscous using only the finest ingredients. Our couscous is made by hand, using a traditional method passed down through generations. We take great care to ensure that our couscous has a light, fluffy texture and is infused with the rich flavors of Morocco. We offer a variety of couscous options, including plain, flavored with herbs and spices, and mixed with vegetables or meat. Our couscous is perfect for a variety of dishes, from traditional Moroccan tagines to modern salads and bowls. <br /><br />
                            Whether you're a seasoned couscous connoisseur or new to this delicious dish, we're confident that you'll love our couscous. Thanks for choosing us as your couscous provider. </p><br />
                            <Link to='/menu'>
                            <button type='button' className='about-btn'>Make Your CousCous</button>
                            </Link>
                        </div>
                    </div>
                </section>
                <Footer />
      </div>
    )
  }
}

