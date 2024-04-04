import React, { useState, useEffect } from "react";
import { storage } from "./firebase";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";

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
  

function ALmaths() {
  const [fileUpload, setFileUpload] = useState(null);
  const [fileList, setFileList] = useState([]);

  // Reference to the file list in Firebase Storage
  const fileListRef = ref(storage, "maths/");

  // Upload file
  const uploadFile = () => {
    if (fileUpload == null) return;
    const fileRef = ref(storage, `maths/${fileUpload.name + v4()}`);
    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prev) => [
          ...prev,
          { name: fileUpload.name, url, ref: snapshot.ref },
        ]);
      });
    });
  };

  // Delete file
  const deleteFile = (fileRef) => {
    deleteObject(fileRef)
      .then(() => {
        setFileList((prev) => prev.filter((file) => file.ref !== fileRef));
      })
      .catch((error) => {
        console.error("Error deleting file: ", error);
      });
  };

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
      <h2>A/L MATHEMATICS</h2>
    <div className="upload-page">
      <input
        className="choose"
        type="file"
        onChange={(event) => {
          setFileUpload(event.target.files[0]);
        }}
      />
      <button className="update-btn" onClick={uploadFile}>Upload</button>
      <br/>
      <div className="file-list">
        {fileList.map((file, index) => (
          <div key={index} className="file-item">
            <a href={file.url} target="_blank" rel="noreferrer">
            {fileIconMap[file.name.split(".").pop().toLowerCase()] || "📂"}{" "}
              {file.name}
            </a>
            <button className="delete-btn" onClick={() => deleteFile(file.ref)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default ALmaths