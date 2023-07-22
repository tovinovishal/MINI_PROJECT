import React, { useState } from "react";
import './order.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Orders() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    quantity: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.address || !formData.city || !formData.state || !formData.zip || !formData.quantity) {
      alert("Please fill in all the required fields.");
      return;
    }

    axios.post("http://127.0.0.1:8080/order/orders", formData)
      .then(response => {
        console.log("Form submitted successfully:", response.data);
        setFormData({
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          quantity: ""
        });
      })
      .catch(error => {
        console.error("Error submitting form:", error);
      });
      navigate('/thanku');
  };

  return (
    <div className="Main">
      <div className="w">
        <div className="contain">
          <form onSubmit={handleSubmit}>
            <h1 className="s">
              <i className="fas fa-shipping-fast"></i> Shipping Details
            </h1>
            <div className="name">
              <div>
                <label htmlFor="f-name">First</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="l-name">Last</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="street">
              <label htmlFor="address">Street</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="address-info1">
              <div>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="address-info2">
              <div>
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="address-info3">
              <div>
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <h1>
              <i className="far fa-credit-card"></i> Order Details
            </h1>
            <div className="cc-num">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>
            <div className="btns">
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );    
}

export default Orders;
