import React, { Component } from 'react'
import NavBar from './NavBar'
import main from "./main";
import { Link } from 'react-router-dom';
import Footer from './Footer';
export default class Home extends Component {
    handelClick = (e) => {
        if (e.target.checked) {
            document.querySelector(".content").style.display = "none"
        } else {
            document.querySelector(".content").style.display = "block"
        } 
    }
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
                        <h1>Welcome To <span className='span'>Cous</span><span>Cous</span> </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Earum ipsam ab nihil excepturi nostrum amet aliquam tempora.</p>
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
                        <Link to="/menu">
                        <button type='button' className='about-btn'>Make Your CousCous</button>
                        </Link>
                        </div>
                    </div>
                </section>
                <section className="menu">
                    <div className="menu-top">
                        <h3>Food Menu</h3>
                        <h2>Delicious Food Menu</h2><br /><br />
                        <div>
                            <button id='smida' className="menu-btn">CousCous Smida</button>
                            <button id='dra' className="menu-btn">CousCous-Dra</button>
                            <button id='belboula' className="menu-btn">CousCous-Belboula</button>
                        </div>
                    </div>
                    <div className="menu-all">
                        <div className="content-menu">
                            {
                                main.map((m, index) =>
                                    <main key={index}>
                                        <div className="menu-img">
                                            <img src={m.img} alt="" />
                                        </div>
                                        <div className='menu-text'>
                                            <h3>{m.name} <span className="point">..........................................</span> <span className='prix'>{m.prix}DHS</span></h3>
                                            <p>{m.text}</p>
                                        </div>
                                    </main>
                                )
                            }
                        </div>
                        <div className="grand-img">
                            <img src="./image/couscous-marocain.jpeg" alt="" />
                        </div>
                    </div>
                </section><br /><br /><br /><br /><br />
                <section className='all-teams-div'>
                    <div className="teams-top">
                        <h3>Our Team</h3>
                        <h2>Our Master Chef</h2><br /><br />
                    </div>
                    <div className="chefs">
                        <div className="single-team">
                            <img src="./image/team-1.jpg" alt="" />
                            <div className="team-text">
                                <h2>Med Wakani</h2>
                                <p>Master Chef</p>
                                <p>
                                    <Link className='icon' to=""><i className='fab fa-facebook'></i></Link>
                                    <Link className='icon' to=""><i className='fab fa-twitter'></i></Link>
                                    <Link className='icon' to=""><i className='fab fa-instagram'></i></Link>
                                </p>
                            </div>
                        </div>
                        <div className="single-team">
                            <img src="./image/team-2.jpg" alt="" />
                            <div className="team-text">
                                <h2>Med Khassar</h2>
                                <p>Master Chef</p>
                                <p>
                                    <Link className='icon' to=""><i className='fab fa-facebook '></i></Link>
                                    <Link className='icon' to=""><i className='fab fa-twitter '></i></Link>
                                    <Link className='icon' to=""><i className='fab fa-instagram '></i></Link>

                                </p>
                            </div>
                        </div>
                        <div className="single-team">
                            <img src="./image/team-3.jpg" alt="" />
                            <div className="team-text">
                                <h2>Mehdi Aamran</h2>
                                <p>Master Chef</p>
                                <p>
                                    <Link className='icon' to=""><i className='fab fa-facebook '></i></Link>
                                    <Link className='icon' to=""><i className='fab fa-twitter '></i></Link>
                                    <Link className='icon' to=""><i className='fab fa-instagram '></i></Link>
                                </p>
                            </div>
                        </div>
                        <div className="single-team">
                            <img src="./image/team-5.jpg" alt="" />
                            <div className="team-text">
                                <h2>Fadwa Fakar</h2>
                                <p>Master Chef</p>
                                <p>
                                    <Link className='icon' to=""><i className='fab fa-facebook '></i></Link>
                                    <Link className='icon' to=""><i className='fab fa-twitter '></i></Link>
                                    <Link className='icon' to=""><i className='fab fa-instagram '></i></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section><br /><br /><br /><br /><br />
                {/* <main className="contact">
                    
                </main> */}
                <Footer />
            </div>
        )
    }
}
