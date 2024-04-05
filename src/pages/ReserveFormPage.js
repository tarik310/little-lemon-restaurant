import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ReserveFormPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    date: "",
    time: "",
    tableType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for required fields here or in your input validations
    if (!formData.fullName) {
      toast.error("Full Name is required.");
      return;
    }
    if (!formData.email) {
      toast.error("Email is required.");
      return;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      // Simple email regex validation
      toast.error("A valid Email is required.");
      return;
    }
    if (!formData.date) {
      toast.error("Date is required.");
      return;
    }
    if (!formData.time) {
      toast.error("Time is required.");
      return;
    }
    if (!formData.tableType) {
      toast.error("Selecting a type of table is required.");
      return;
    }
    toast.success("Reservation Submitted Successfully!");
    setFormData({
      fullName: "",
      email: "",
      date: "",
      time: "",
      tableType: "",
    });
    // Simulate a form submission
    console.log(formData);
  };

  return (
    <div className="reserve-page-container">
      <ToastContainer position="top-center" />
      <h2>Reserve a Table</h2>
      <form className="reserve-form-container" onSubmit={handleSubmit}>
        <div className="reserve-input-field">
          <label className="reserve-label-input">Full Name:</label>
          <br />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="reserve-input-field">
          <label className="reserve-label-input">Email:</label>
          <br />
          <input
            // type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="reserve-input-field">
          <label className="reserve-label-input">Date:</label>
          <br />
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="reserve-input-field">
          <label className="reserve-label-input">Time:</label>
          <br />
          <input type="time" name="time" value={formData.time} onChange={handleChange} />
        </div>
        <div className="reserve-input-field">
          <label className="reserve-label-input">Number of People:</label>
          <br />
          <select name="tableType" value={formData.tableType} onChange={handleChange}>
            <option value="">Select table capacity</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
            <option value="3">6 People</option>
            <option value="4">8 People</option>
          </select>
        </div>
        <button className="reserve-btn" type="submit" style={{ marginTop: "10px" }}>
          Confirm Reserve
        </button>
      </form>
    </div>
  );
}
