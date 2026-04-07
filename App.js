import React, { useState } from "react";
import DocumentForm from "./components/DocumentForm";
import DocumentPreview from "./components/DocumentPreview";
import "./App.css";


function App() {
  const [docType, setDocType] = useState("Test Plan");
  const [previewContent, setPreviewContent] = useState(null);

  return (
    <div className="App">
      <h1>Manual Tester</h1>
      <div className="tabs">
        {["Test Plan", "Test Case", "Bug Report"].map(type => (
          <button
            key={type}
            className={docType === type ? "active" : ""}
            onClick={() => setDocType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <DocumentForm docType={docType} setPreview={setPreviewContent} />
      {previewContent && <DocumentPreview content={previewContent} />}
    </div>
  );
}

export default App;