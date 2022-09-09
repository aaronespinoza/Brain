// import { useState, useEffect } from "react";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,
//   list,
// } from "firebase/storage";
// import { app } from "../firebase";
// import { v4 } from "uuid";

// function FileTest() {
//   const [imageUpload, setImageUpload] = useState(null);
//   const [imageUrls, setImageUrls] = useState([]);

//   const imagesListRef = ref(app, "images/");
//   const uploadFile = () => {
//     console.log("fired file")
//     if (imageUpload == null) return;
//     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
//     uploadBytes(imageRef, imageUpload).then((snapshot) => {
//       getDownloadURL(snapshot.ref).then((url) => {
//         setImageUrls((prev) => [...prev, url]);
//       });
//     });
//   };

//   const handleUpload = (e) => {
//     // console.log(e.dataTransfer.files[0])
//     // setImageUpload(e.dataTransfer.files[0])
//     console.log("ooooo")
//     if (e.dataTransfer.files[0] == null) return;
//     const imageRef = ref(app, `images/${e.dataTransfer.files[0].name + v4()}`);
//     uploadBytes(imageRef, e.dataTransfer.files[0]).then((snapshot) => {
//       getDownloadURL(snapshot.ref).then((url) => {
//         setImageUrls((prev) => [...prev, url]);
//       });
//     });
//   }

//   // useEffect(() => {
//   //   listAll(imagesListRef).then((response) => {
//   //     response.items.forEach((item) => {
//   //       getDownloadURL(item).then((url) => {
//   //         setImageUrls((prev) => [...prev, url]);
//   //       });
//   //     });
//   //   });
//   // }, []);

//   // const addTodo = (event) => {
//   //   event.preventDefault();
//   //   db.collection("images/").add({
//   //   img: input,
//   //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
//   // })
//   // } 



//   return (
//     <div  
//     onDragOver={(e)=> {
//         e.preventDefault();
//     }}
//     onDrop={(e) => {
//         //uploadFile();
//         //console.log(e.dataTransfer.files);
//         console.log(e);
//     }}
//     onDrop={handleUpload}
//     >
//       <input
//         type="file"
//       //   onDrop={
//       //     handleUpload
//       //     // uploadFile();
//       //     // console.log(e.dataTransfer.files);
//       //     //console.log(e);
//       // }
//         onChange={(event) => {
//           //setImageUpload(event.target.files[0]);
//         }}
//       />

//     </div>
//   );
// }

// export default FileTest;