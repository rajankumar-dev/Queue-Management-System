import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm.jsx";

function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, { id: Date.now(), ...customer, status: "waiting" }]);
  };

  const removeFromQueue = (id) => {
    setQueue(queue.filter((customer) => customer.id !== id));
  };

  const updateStatus = (Id, newStatus) => {
    setQueue(
      queue.map((customer) =>
        customer.id === Id ? { ...customer, status: newStatus } : customer
      )
    );
  };

  return (
    <div className="app">
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage your customers efficeintly</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <h1>QueueDisplay</h1>
      </main>
    </div>
  );
}

export default App;
