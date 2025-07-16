import { useState } from 'react';
import axios from 'axios';
import './App.css';
import VideoUpload from './Components/VideoUpload';
import VideoPlayer from '../VideoPlayer';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const[videoId, setVideoId] = useState('') ;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    console.log("File selected:", selectedFile?.name);
  };

  const uploadFile = async () => {
    console.log("Uploading file:", file);
    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:8080/api/v1/videos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percent);
          console.log(`Upload Progress: ${percent}%`);
        },
      });

      console.log("Upload successful:", response.data);
      setVideoId(response.data.videoId);
      alert("Upload complete!");
      setUploadProgress(0); // Reset after upload
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed.");
    }
  };

  return (
     <div className="min-h-screen bg-black flex flex-col items-center justify-start pt-10 px-6">
  <h1 className="text-6xl font-handjet text-purple-600 drop-shadow-lg mb-8">
    Streaming App
  </h1>

    <div className="flex flex-row gap-10 items-start">
  {/* LEFT: Video Player */}
  <video
    style={{
      width: 500,
      borderRadius: "0.5rem",
    }}
    src={`http://localhost:8080/api/v1/videos/stream/range/${videoId}`}
    controls
  />

  {/* RIGHT: Form */}
  <div className="w-50 h-auto border-2 border-purple-500 rounded-xl p-6 flex flex-col justify-center items-center space-y-4">
    <div className="flex flex-col items-start gap-2">
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-400 rounded-md px-3 py-1 w-64 text-sm"
      />
      <textarea
        placeholder="Video Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-400 rounded-md px-3 py-2 w-64 text-sm resize-none"
        rows={4}
      />
      <input
        type="file"
        onChange={handleFileChange}
        className="text-sm"
      />
    </div>

    <VideoUpload />

    {file && (
      <div className="text-white text-sm">
        <p className="mb-1">
          Selected File: <span className="font-semibold text-purple-400">{file.name}</span>
        </p>

        {uploadProgress > 0 && (
          <div className="w-64 bg-gray-700 rounded-full h-3">
            <div
              className="bg-purple-500 h-3 rounded-full"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        )}
      </div>
    )}

    <button
      className="bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
      onClick={uploadFile}
    >
      Upload Now
    </button>
  </div>
</div>
</div>
  );
}

export default App;