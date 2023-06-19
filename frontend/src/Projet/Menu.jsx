import React, { Component } from 'react'
import NavBar from './NavBar'
import main from "./main";
import main2 from "./main2";
import { Link } from 'react-router-dom';
import Footer from './Footer';
export default class Menu extends Component {
    state={
        showMe: true, 
        showMeAgain: false,
    }
      // ----------------------------------------------------------------------
  click() {
    this.setState({
      showMeAgain: false,
      showMe: true
    })
  }
  clickAgain() {
    this.setState({
      showMe: false,
      showMeAgain: true
    })
  }
  componentDidMount=()=>{
    const btnElList=document.querySelectorAll(".menu-btn");
    btnElList.forEach(btnEl=>{
        btnEl.addEventListener('click',()=>{
            document.querySelector(".special")?.classList.remove("special");
            btnEl.classList.add("special");
        })
    })
  }
  render() {
    return (
      <div><div className='all'>
      <input type="checkbox" id='check' onClick={this.handelClick} />
      <label htmlFor="check" className='checkbtn'>
          <i className='fas fa-bars'></i>
      </label>
      <NavBar />
      <div className="content">
          <h1><span className='span'>Our</span>-<span>Menu</span> </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Earum ipsam ab nihil excepturi nostrum amet aliquam tempora.</p>
          <Link to="/">
          <button type='button' className='btn1'> Home </button>
          </Link>
          
          <Link to="/menu">
          <button type='button' className='btn2'> Make Your CousCous </button>
          </Link>
      </div>
  </div><br />
  <section className="menu">
                    <div className="menu-top">
                        <h3>Food Menu</h3>
                        <h2>Delicious Food Menu</h2><br /><br />
                        <div>
                            <button id='smida' className="menu-btn" onClick={() => this.click()}>CousCous Smida</button>
                            <button id='dra' className="menu-btn" onClick={() => this.clickAgain()}>CousCous-Dra</button>
                            <button id='belboula' className="menu-btn">CousCous-Belboula</button>
                        </div>
                    </div>
     {    
      this.state.showMe ?
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
                    
                    : null}
     {    
      this.state.showMeAgain ?
     <div className="menu-all">
                        <div className="content-menu">
                            {
                                main2.map((m, index) =>
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
                            <img src="./image/dra.jfif" alt="" />
                        </div>
                    </div>
                    
                    : null}
                    </section>
                    <Footer/>
      </div>
    )
  }
}
