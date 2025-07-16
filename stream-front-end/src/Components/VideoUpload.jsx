import React from 'react';
import videoLogo from "../assets/upload.png";

function VideoUpload() {
  return (
    <div className="text-white mt-6">
      <div className="flex items-center gap-4">
        <img src={videoLogo} alt="Logo" className="w-16 h-16" />
     
      <p className="mt-2"></p>
    </div>
    </div>
  );
}

export default VideoUpload;
