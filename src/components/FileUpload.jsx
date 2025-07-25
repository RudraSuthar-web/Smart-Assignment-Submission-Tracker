import { useRef, useState } from "react";

function FileUpload({ onUpload, initialStatus }) {
  const [file, setFile] = useState(null);
  const inputRef = useRef();

  return (
    <div>
      {initialStatus ? (
        <div className="text-green-700">Already Submitted ✅</div>
      ) : (
        <form
          onSubmit={e => {
            e.preventDefault();
            if (file) {
              onUpload(file);
            }
          }}
        >
          <input
            type="file"
            ref={inputRef}
            onChange={e => setFile(e.target.files[0])}
            className="mb-2"
            accept=".pdf"
          />
          <button
            type="submit"
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            disabled={!file}
          >Upload PDF</button>
        </form>
      )}
    </div>
  );
}
export default FileUpload;
