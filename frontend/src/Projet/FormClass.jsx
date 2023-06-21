import React, { useState } from 'react';
import items from './form';
import NavBar from './NavBar'
import Modal from 'react-modal';
import formM from './formMeat'
import options from './option';
import Swal from "sweetalert2";
import Footer from './Footer';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import emailjs from "@emailjs/browser"
import Reicipt from './reicipt';

function FormClass() {
  const { user } = useAuthContext()
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemsMeat, setSelectedItemsMeat] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showMe, setShowMe] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [modalLogin, setModalLogin] = useState(false);
  const nav = useNavigate()
  const [recipient, setRecipient] = useState(user.email);
  var [price,setP]=useState(0)

  
 
  const sendEmail = async (e) => {
    e.preventDefault();
    const itemsToSend = selectedItems
    const mt=selectedItemsMeat.map((item) => item.name)
    console.log(mt);
    const opt=selectedOption
    const vt = itemsToSend.map((item) => item.name).join(', ');
    const text=`
    <h1>Thank you for your order!</h1>
        <ul>
            <li>
            CousCous Type : ${opt}
            </li>
            <li>
            The Type Of Meat: ${mt[0]}
            </li>
            <li>
            Vegetables : ${vt}
            </li>
            <li>
            total : ${price}
            </li>
        </ul>
        <b>Please let us know if you have any questions or concerns regarding your order.</b>
    
    Best regards,
    AloCouscous`
    await fetch('/api/user/send-email/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipient,text }),
    }).then(nav("/#header"))
    
    // const templateParams = {
    //   to_email: 'mohamedkhassar775@gmail.com',
    //   from_name: `form ${user.name}`,
    //   from_email: `form ${user.email}`,
    //   subject: 'Selected Items',
    //   body: text,
    // };

    
    //   emailjs.send(
    //     'service_sl1mw8n',
    //     'template_vto69pe',
    //     templateParams,
    //     'mp1l4toRIKUpdiOGd' // Replace with your user ID from EmailJS
    //   )
    //     .then((response) => {
    //       console.log('Email sent successfully!', response);
    //     })
    //     .catch((error) => {
    //       console.error('Error sending email:', error);
    //     });
    //   Swal.fire({
    //     title: "Thanks For Your Commande",
    //     icon: "success",
    //     timer: 2000,
    //     timerProgressBar: true,
    //     showConfirmButton: false
    //   })
    
  };

  const handleCheckboxChange = (event) => {
    const itemId = parseInt(event.target.value);
    const item = items.find((item) => item.id === itemId);
    const isSelected = event.target.checked;
    if (isSelected) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((i) => i.id !== itemId)
      );
    }
    if (isSelected) {
      setP(price+=item.price)
    }else{
      setP(price-=item.price);
    }
  };


  const handleCheckboxChangeMeat = (event) => {
    const itemId = parseInt(event.target.value);
    const item = formM.find((item) => item.id === itemId);
    const isSelected = event.target.checked;
    console.log(isSelected);

    if (isSelected) {
      setSelectedItemsMeat((prevSelectedItems) => [...prevSelectedItems, item]);
    } else {
      setSelectedItemsMeat((prevSelectedItems) =>
        prevSelectedItems.filter((i) => i.id !== itemId)
      );
    }
    if (isSelected) {
      setP(price+=item.price)
    }else{
      setP(price-=item.price);
    }
  }
  ;

  function handleSelectChange(event) {
    const selectedOption = event.target.value;
    console.log(selectedOption);
    const selected = options.find((option) => option.value === selectedOption);
    setSelectedOption(selectedOption);
    if (selectedOption !== "0") {
      setP(selected.price)
      setSelectedImage(selected.image);
    }else{
      setP(0);
    }
  } 

  function handleButtonClick(e) {
    e.preventDefault()
    if (selectedOption === "" && selectedItems.length === 0) {
      Swal.fire({
        title: "Please Select Something",
        icon: "warning",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    } else {
      setModalIsOpen(true);
    }
  }
  const open = () => {
    setShowMe(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };
  const handleModalCloseLogin = () => {
    setModalLogin(false);
  };

  function handleDeleteAll() {
    setSelectedOption(0);
  }
  function isLogin(e) {
    e.preventDefault()
    setModalLogin(true);
  }

  return (
    <div>
      <div className='formClass'>
        <NavBar />
        <div className="type">
          <h1>Please choose a type of <span className='spn1'>Cous</span><span>Cous</span>  </h1>
          <a href="#cous"> <button className='btn1' onClick={open} >Vegetables CousCous</button></a>
          <a href="#tfaya"><button className='btn2'>CousCous T-faya</button></a>
          <a href="#tfaya"><button className='btn3'>Customize Your Own CousCous</button></a>
        </div><br /><br /><br />
        {showMe ? (
          <div className='choose-form'>
            <div className='title-cous'>
              <h1> Vegetables <span className='spn1'>Cous</span><span>Cous</span></h1>
              <br />
              <center>
                <div className='hr'>
                  <hr />
                </div>
              </center>
              <div className='vegetables-form'>
                <div className="vegetables">
                  <form>
                    <h4>Choose CousCous Type</h4>
                    <select value={selectedOption} onChange={handleSelectChange}>
                      <option value="0">Select an option</option>
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.name} ({option.price} DH)
                        </option>
                      ))}
                    </select>
                    <br /><br />
                    <hr />
                    <hr />                    <br />
                    <h4>Choose The Type Of Meat </h4>
                    {
                      formM.map((frm) =>
                        <div key={frm.id}>
                          <input disabled={!selectedOption}  onChange={handleCheckboxChangeMeat} value={frm.id} type="checkbox" id={frm.label} /><label htmlFor={frm.label}>{frm.label} <strong>{frm.arabName}</strong><strong> ({frm.price} DH)</strong></label><br />
                        </div>
                      )
                    }
                    <br />
                    <hr /><br />
                    <h4>Choose Vegetables</h4>
                    {items.map((item) => (
                      <div key={item.id}>
                        <input
                          type="checkbox"
                          value={item.id}
                          onChange={handleCheckboxChange}
                          disabled={!selectedOption}
                        />
                        <label htmlFor={item.label}>{item.label} <strong>({item.price} DH)</strong></label>
                      </div>
                    ))}
                    <br />
                    {/* ------------------------Save-All--------------------------- */}
                    <button className='btn1' onClick={handleButtonClick}>Send</button>
                    {/* ------------------------Delete-All--------------------------- */}
                    <button className='btn2' onClick={handleDeleteAll}>Delete All</button>
                  {price}
                  </form>
                </div>
                <img className='vegeta-img' src="../image/kasriya.png" alt="" />

                {selectedImage && <img className='vegeta-img' src={selectedImage} alt={selectedOption} />}

                {formM.map((item, i) =>
                  selectedItemsMeat.some((selectedItem) => selectedItem.id === item.id) && (
                    <img key={i} className='vegeta-img' width={"105px"} src={item.image} alt={item.name} />
                  )
                )}
                {items.map((item, i) =>
                  selectedItems.some((selectedItem) => selectedItem.id === item.id) && (
                    <img key={i} className='vegeta-img' width={"105px"} src={item.image} alt={item.name} />
                  )
                )}
              </div>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
      

      {/* //////////////////////////////Modal/////////////////////////// */}

      <Modal isOpen={modalIsOpen} >
        <div className='modal' id="myModal">
          <div className="modal-dialog modal-dialog-centered modal-lg" >
            {/* -----------------------------IMAGE-MODAL---------------------- */}
            <div className="img-modal">
              <img className='img-img-modal' src="../image/kasriya.png" alt="" />
              <img className='img-img-modal' src={selectedImage} alt={selectedOption} />
              {formM.map((item, i) =>
                selectedItemsMeat.some((selectedItem) => selectedItem.id === item.id) && (
                  <img key={i} className='img-img-modal' width={"105px"} src={item.image} alt={item.name} />
                )
              )}
              {items.map((item, i) =>
                selectedItems.some((selectedItem) => selectedItem.id === item.id) && (
                  <img key={i} className='img-img-modal' width={"105px"} src={item.image} alt={item.name} />
                  )
                  )}
            </div>
            <div className="modal-content">
              <div className='modal-header'>
                <h2 className="modal-title" >Selected <span>Items</span></h2>
              </div>
              <div className="modal-body">
                {/* -----------------------------ITEMS-MODAL---------------------- */}
                <div className="items-modal">
                  <ul>
                    {selectedItems.map((item) => (
                      <li key={item.id}>{item.name}</li>
                    ))}
                    {selectedItemsMeat.map((item) => (
                      <li key={item.id}>{item.name}</li>
                    ))}
                    <li>{selectedOption}</li>
                <li>total : {price} DH</li>
                  </ul>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn2 btn-secondary" data-dismiss="modal" onClick={handleModalClose}>Close</button>
                <button className="btn1 btn-primary" onClick={isLogin}> Send </button>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={modalLogin}>
          <div className='modal-content'>
            <div className="modal-header">
              <center>
                <h2 className='modal-title'>Please Confirm Your Order</h2>
              </center>
            </div>
            <div className="modal-body">
              <form className='formk'>    
                <div className="modal-footer">
                  <center>
                    <button onClick={sendEmail} className="btn1 btn-primary"> Confirm </button>
                    <button className="btn2 btn-secondary" data-dismiss="modal" onClick={handleModalCloseLogin}>Close</button>
                  </center>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </Modal>
      <Footer />
    </div>
  );
}

export default FormClass;
