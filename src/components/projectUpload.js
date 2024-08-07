import React from "react";
import { IoMdSettings, IoMdNotificationsOutline } from "react-icons/io";

export const ProjectUpload = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white py-4 shadow-md flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold text-purple-600">LAMA.</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-200 p-2 rounded-full">
            <IoMdSettings className="h-6 w-6" />
          </button>
          <button className="bg-gray-200 p-2 rounded-full">
            <IoMdNotificationsOutline className="h-6 w-6" />
          </button>
        </div>
      </header>
      <div className="flex-grow flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Upload</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <button className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center space-x-2">
            <img
              src="https://img.icons8.com/color/48/000000/youtube-play.png"
              alt="YouTube"
            />
            <span>Upload YouTube Video</span>
          </button>
          <button className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center space-x-2">
            <img
              src="https://img.icons8.com/color/48/000000/spotify.png"
              alt="Spotify"
            />
            <span>Upload Spotify Podcast</span>
          </button>
          <button className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center space-x-2">
            <img
              src="https://img.icons8.com/color/48/000000/rss.png"
              alt="RSS"
            />
            <span>Upload from RSS Feed</span>
          </button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <p className="mb-4">
            Select a file or drag and drop here (Podcast Media or Transcription
            Text)
          </p>
          <input
            type="file"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <footer className="bg-white text-center py-4">
        <p className="text-gray-500">&copy; 2024 LAMA. All rights reserved.</p>
      </footer>
    </div>
  );
};


