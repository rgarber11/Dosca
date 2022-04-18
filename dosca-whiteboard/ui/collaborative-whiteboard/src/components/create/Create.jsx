// import React from 'react';
// import { useState, useEffect } from "react";
// import Axios from "axios";
// import { render } from 'react-dom';
// import Container from '../container/Container';
// import {useNavigate} from "react-router-dom";

// // class Create extends React.Component {

// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       code: "",
// //       url: "",
// //       host: "",
// //       username: "",
// //       color: "",
// //       can_draw: true,
// //       is_banned: false,
// //     };
// //   }


// //   createWhiteboard(){
// //     Axios.post("http://localhost:3001/createWhiteboard", {
// //       code: this.state.code,
// //       url: this.state.url,
// //       host: this.state.host,
// //       username: this.state.username,
// //       color: this.state.color,
// //       can_draw: this.state.can_draw,
// //       is_banned: this.state.is_banned,
// //     }).then((response) => {
// //     });
// //   };

// //   addUser(){
// //     Axios.post("http://localhost:3001/addUser", {
// //       code: this.state.code,
// //       url: this.state.url,
// //       host: this.state.host,
// //       username: this.state.username,
// //       color: this.state.color,
// //       can_draw: this.state.can_draw,
// //       is_banned: this.state.is_banned,
// //     }).then((response) => {
// //     })
// //   };

// //   render(){
// //     return (
// //       <div className="App">
  
// //         <div>
// //           <input
// //             type="text"
// //             placeholder="Username..."
// //             onChange={(event) => {
// //               this.setState({
// //                 code: "t",
// //                 url: window.location.href,
// //                 host: "t",
// //                 username: event.target.value,
// //                 color: "red",
// //                 can_draw: true,
// //                 is_banned: false,

// //               })
// //             }}
// //           />
// //           <button
// //             onClick={() => {
// //               this.createWhiteboard();
// //             }}>
// //             Create Whiteboard
// //           </button>

// //         </div>
// //         <div>
// //           <input
// //             type="text"
// //             placeholder="Username..."
// //             onChange={(event) => {
// //               this.setState({
// //                 code: "t",
// //                 url: window.location.href,
// //                 host: "t",
// //                 username: event.target.value,
// //                 color: "red",
// //                 can_draw: true,
// //                 is_banned: true
// //               })
// //             }}
// //           />
// //           <input
// //             type="text"
// //             placeholder="Code..."
// //             onChange={(event) => {
// //               this.setState({
// //                 code: event.target.value
// //               })
// //             }}
// //           />
// //           <button onClick={this.addUser()}>
// //               Add User
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// function Create(){
//   var[code, setCode] = useState("");
//   var[url, setUrl] = useState("");
//   var[host, setHost] = useState("");
//   var[username, setUsername] = useState("");
//   var[color, setColor] = useState("");
//   var[can_draw, setCan_draw] = useState(true);
//   var[is_banned, setIs_banned] = useState(false);

//   const createWhiteboard = () => {
//     Axios.post("http://localhost:3001/createWhiteboard", {
//       code,
//       url,
//       host,
//       username,
//       color,
//       can_draw,
//       is_banned,
//     }).then((response) => {
//     });
//   };

//   const addUser = () => {
//     Axios.post("http://localhost:3001/addUser", {
//       code,
//       url,
//       username,
//       color,
//       can_draw,
//       is_banned,
//     }).then((response) => {
//     })
//   }

//   let navigate = useNavigate();
//   return (
//     <div className="App">

//       <div>
//         <input
//           type="text"
//           placeholder="Username..."
//           onChange={(event) => {
//             setCode("t");
//             setUrl(window.location.href);
//             setHost("t");
//             setUsername(event.target.value);
//             setColor("t");
//             setCan_draw(true);
//             setIs_banned(false);

//           }}
//         />
//         <button
//           onClick={() => {
//             createWhiteboard();
//             navigate("/canvas");
//           }}>
//           Create Whiteboard
//         </button>

//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Username..."
//           onChange={(event) => {
//             setCode("t");
//             setUrl(window.location.href);
//             setHost("t");
//             setUsername(event.target.value);
//             setColor("red");
//             setCan_draw(true);
//             setIs_banned(false);
//           }}
//         />
//         <input
//           type="text"
//           placeholder="Code..."
//           onChange={(event) => {
//             setCode(event.target.value);
//           }}
//         />
//         <button onClick={() =>{
//           addUser();
//           navigate("/canvas");
//         }}>
//             Add User
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Create;
