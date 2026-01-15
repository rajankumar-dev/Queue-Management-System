import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm.jsx";

function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {};

  const removeFromQueue = (id) => {};

  const updateStatus = (Id, newStatus) => {};

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
