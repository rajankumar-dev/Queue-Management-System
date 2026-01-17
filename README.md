# 🧾 Queue Management System (React)

A simple **Queue Management System** built using **React** and **useState** only.
This project demonstrates core React concepts like state management, component-based architecture, and user interactions without using Redux, Context API, or any backend.

---

## 🚀 Features

- ➕ Add people/items to the queue
- ➖ Remove people/items from the queue (FIFO logic)
- 🔄 Update queue status (Pending / Completed)
- 📋 Display live queue list
- ⚡ Instant UI updates using React `useState`
- 🧠 Beginner-friendly logic (No external state libraries)


---

## 📸 Screenshots (Optional)

![Queue Management System UI](https://github.com/rajankumar-dev/Queue-Management-System/blob/main/public/image.png?raw=true)

---
## 🌐 Live Demo

🔗 ![Go Live](https://queue-mngment-system.netlify.app/)

## 🛠️ Tech Stack
---
- **React**
- **JavaScript (ES6+)**
- **useState Hook**
- **HTML5**
- **CSS3**

---

## 📂 Project Structure

```
queue-management-system/
│
├── src/
│   ├── components/
│   │   ├── QueueDisplay.jsx
│   │   ├── QueueForm.jsx
│   │
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
│
├── package.json
└── README.md
```

---

## 🧩 Core Concept Used

### React `useState`

- Queue data is stored in a state array
- Each operation (add, remove, update) updates state
- React automatically re-renders UI

Example:

```js
const [queue, setQueue] = useState([]);
```

---

## ⚙️ How It Works

1. User enters name/details
2. Click **Add to Queue**
3. Item is added to the queue list
4. Queue follows **FIFO (First In First Out)**
5. Status can be updated using buttons
6. UI updates instantly

---

## ▶️ How to Run Locally

```bash
# Clone the repository
git clone https://github.com/rajankumar-dev/Queue-Management-System.git

# Go to project folder
cd queue-management-system

# Install dependencies
npm install

# Start development server
npm run dev
```

Open browser at:

```
http://localhost:5173
```


## 🎯 Learning Outcomes

- Understanding React components
- State management using `useState`
- Props and event handling
- Error handling (undefined props issue solved)
- Clean project structure

---

## 📌 Future Enhancements

- ⏱ Queue timer
- 🔔 Notification sound
- 💾 LocalStorage support
- 🎨 Better UI styling
- 🔐 Authentication (future)

---

## 👨‍💻 Author

**Rajan Kumar**
Full Stack Developer | React Learner

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---

## 📄 License

This project is open-source and available under the **MIT License**.
