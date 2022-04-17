import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Container from './components/container/Container';
import Create from './components/create/Create';
import Axios from "axios";


function App() {
  return (
    <Create/>
  );
}
export default App;
// class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       code: "",
//       url: "",
//       host: "",
//       username: "",
//       color: "",
//       can_draw: true,
//       is_banned: false,
//     };
//   }

//   createWhiteboard(){
//     Axios.post("http://localhost:3001/createWhiteboard", {
//       code: this.state.code,
//       url: this.state.url,
//       host: this.state.host,
//       username: this.state.username,
//       color: this.state.color,
//       can_draw: this.state.can_draw,
//       is_banned: this.state.is_banned,
//     }).then((response) => {
//     });
//   };

//   addUser(){
//     Axios.post("http://localhost:3001/addUser", {
//       code: this.state.code,
//       url: this.state.url,
//       host: this.state.host,
//       username: this.state.username,
//       color: this.state.color,
//       can_draw: this.state.can_draw,
//       is_banned: this.state.is_banned,
//     }).then((response) => {
//     })
//   };

//   render(){
//     return (
//       <div className="App">
  
//         <div>
//           <input
//             type="text"
//             placeholder="Username..."
//             onChange={(event) => {
//               this.setState({
//                 code: "t",
//                 url: window.location.href,
//                 host: "t",
//                 username: event.target.value,
//                 color: "red",
//                 can_draw: true,
//                 is_banned: false,

//               })
//             }}
//           />
//           <button
//             onClick={() => {
//               this.createWhiteboard();
//               <Container />
//             }}>
//             Create Whiteboard
//           </button>

//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Username..."
//             onChange={(event) => {
//               this.setState({
//                 code: "t",
//                 url: window.location.href,
//                 host: "t",
//                 username: event.target.value,
//                 color: "red",
//                 can_draw: true,
//                 is_banned: true
//               })
//             }}
//           />
//           <input
//             type="text"
//             placeholder="Code..."
//             onChange={(event) => {
//               this.setState({
//                 code: event.target.value
//               })
//             }}
//           />
//           <button
//             onClick={() => {
//               this.addUser();
//               <Container />
//             }}>
//               Add User
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;

// class App extends React.Component{
//   state = {
//     renderView: 0
//   };

//   clickBtn = event => {
//     this.setState({
//       renderView: +event.target.value
//     });
//   };

//   render(){ 
//     switch(this.state.renderView) {
//       case 1:
//         return <Container />;
//       default:
//         return <Create clickBtn={this.clickBtn} />;
//     }
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
//export default App;