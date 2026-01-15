import React from "react";
import { FaUserPlus } from "react-icons/fa";

const QueueForm = ({ onAdd }) => {
  const [name, setName] = React.useState("");
  const [service, setService] = React.useState("General Inquiry");

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation
    if (!name.trim() || !service.trim()) return;
    onAdd({ name, service });
    setName("");
    setService("");
  };
  return (
    <>
      <form className="queue-form" onSubmit={handleSubmit}>
        <h2>Add to Queue</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Customer name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="consultation">Consultation</option>
            <option value=" payment">Payment</option>
            <option value="support">Support</option>
          </select>
        </div>
        <button type="submit">
          <FaUserPlus /> Add Customer
        </button>
      </form>
    </>
  );
};

export default QueueForm;
