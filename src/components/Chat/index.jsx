// // src/components/Chat.js

// import React, { useState, useEffect } from 'react';
// import { db } from '../firebaseConfig';
// import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
// // import './Chat.scss';

// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     const q = query(collection(db, 'messages'), orderBy('createdAt', 'asc'));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messages = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setMessages(messages);
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (newMessage.trim() !== '') {
//       await addDoc(collection(db, 'messages'), {
//         text: newMessage,
//         createdAt: new Date()
//       });
//       setNewMessage('');
//     }
//   };

//   return (
//     <div className="chat-container">
//       <div className="messages">
//         {messages.map((message) => (
//           <div key={message.id} className="message">
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSendMessage} className="message-form">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type a message"
//           className="message-input"
//         />
//         <button type="submit" className="send-button">Send</button>
//       </form>
//     </div>
//   );
// };

// export default Chat;
