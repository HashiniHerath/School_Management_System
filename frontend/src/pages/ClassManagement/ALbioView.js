
import React, { useState, useEffect } from "react";
import { storage } from "./firebase";
import {
  ref,
  listAll,
  getDownloadURL,
} from "firebase/storage";



// Icon mapping for different file types
const fileIconMap = {
    pdf: "📄",
    doc: "📝",
    docx: "📝",
    xls: "📊",
    xlsx: "📊",
    ppt: "📋",
    pptx: "📋",
    jpg: "📷",
    jpeg: "📷",
    png: "🖼️",
    gif: "🖼️",
    txt: "📑",
  };
  

function ALbioView() {
  
  const [fileList, setFileList] = useState([]);

  // Reference to the file list in Firebase Storage
  const fileListRef = ref(storage, "biology/");

  

  useEffect(() => {
    listAll(fileListRef)
      .then((response) => {
        const files = [];
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            files.push({ name: item.name, url, ref: item });
            // Only set the state after all files are fetched
            if (files.length === response.items.length) {
              setFileList(files);
            }
          });
        });
      })
      .catch((error) => {
        console.error("Error fetching files: ", error);
      });
  }, []);

  return (
    <div className="title vh-100" style={{backgroundColor: "white"}}>
      <h2>A/L BIOLOGY</h2>
    <div className="upload-page">
      
      
      <br/>
      <div className="file-list">
        {fileList.map((file, index) => (
          <div key={index} className="file-item">
            <a href={file.url} target="_blank" rel="noreferrer">
            {fileIconMap[file.name.split(".").pop().toLowerCase()] || "📂"}{" "}
              {file.name}
            </a>
           
          </div>
        ))}
      </div>
    </div>
    
    </div>
  );
}

export default ALbioView;

