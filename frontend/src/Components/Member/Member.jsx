import React, { useState } from 'react';
import axios from 'axios';
import './Member.scss';
import receiptImage from "../../assets/receipt.png";

const Member = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [receipt, setReceipt] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [rodoAccepted, setRodoAccepted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{9}$/;
    return phoneRegex.test(number);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validatePhoneNumber(phone)) {
      alert('Numer telefonu powinien się składać z dokładnie 9 cyfr.');
      return;
    }

    const data = { phone, email, receipt };

    try {
      await axios.post('http://localhost:8000/api/members/create/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Dołączenie do loterii zakończonie sukcesem. Powodzenia!');
      setPhone('');
      setEmail('');
      setReceipt('');
      setTermsAccepted(false);
      setRodoAccepted(false);
    } catch (error) {
      alert('Wystąpił błąd podczas zgłaszania Twojego uczestnictwa w loterii. Spróbuj ponownie.');
    }
  };

  return (
    <section className="section member">
      <div className="container">
        <h2 className="title">Weź udział</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              id="phone"
              className="form-control"
              placeholder="Numer telefonu"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Adres e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="text"
              id="receipt"
              className="form-control"
              placeholder="Numer paragonu"
              value={receipt}
              onChange={(e) => setReceipt(e.target.value)}
              required
            />
            <button id="receipt-btn" type="button" className='btn btn-link' onClick={() => setShowPopup(true)}>Gdzie znajdę numer paragonu?</button>
          </div>
          <div className="checkbox-row">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              required
            />
            <label htmlFor="terms">
              Zapoznałem/am się z <b>Regulaminem</b> i akceptuję wszystkie zawarte w nim warunki.
            </label>
          </div>
          <div className="checkbox-row">
            <input
              type="checkbox"
              id="rodo"
              checked={rodoAccepted}
              onChange={() => setRodoAccepted(!rodoAccepted)}
              required
            />
            <label htmlFor="rodo">
              Wyrażam zgodę na <b>przetwarzanie swoich danych osobowych</b>.
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Wyślij</button>
        </form>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={receiptImage} alt="Receipt Example" />
            <button className="close-popup" onClick={() => setShowPopup(false)}>X</button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Member;
