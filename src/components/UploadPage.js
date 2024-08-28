import React, { useState } from "react";
import YOUTUBE_ICON from "../assets/you-tube-icon.png";
import RSS_ICON from "../assets/rss_icon.png";
import SPOTIFY_ICON from "../assets/soptify_icon.png";
import MediaCard from "./MediaCard";
import ConfigNavbar from "./ConfigNavbar"
export const UploadPage = () => {
  const [youtubeLinks, setYoutubeLinks] = useState([]);
  const [rssFeeds, setRssFeeds] = useState([]);

  const handleYoutubeUpload = () => {
    // Dummy API call for YouTube upload
    // fetch('/api/upload/youtube', { method: 'POST', body: youtubeData });
    setYoutubeLinks([...youtubeLinks, "New YouTube Video"]);
  };

  const handleRssUpload = () => {
    // Dummy API call for RSS upload
    // fetch('/api/upload/rss', { method: 'POST', body: rssData });
    setRssFeeds([...rssFeeds, "New RSS Feed"]);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Handle file upload here with your API
    console.log("File uploaded:", file);
  };

  return (
    <div className="h-full w-full p-10 flex flex-col gap-20">
      <ConfigNavbar />
      <h1 className="text-4xl  text-purple-600 font-bold">Upload</h1>

      <div className="w-full flex flex-wrap justify-around gap-10  items-center">
        <MediaCard
          handleOnclick={handleYoutubeUpload}
          icon={YOUTUBE_ICON}
          label="Upload Youtube Video"
        />
        <MediaCard
          handleOnclick={() => {}}
          icon={SPOTIFY_ICON}
          label="Upload Spotify Podcast"
        />
        <MediaCard
          handleOnclick={handleRssUpload}
          icon={RSS_ICON}
          label="Upload from RSS Feed"
        />
        <MediaCard
          handleOnclick={handleYoutubeUpload}
          icon={YOUTUBE_ICON}
          label="Upload Youtube Video"
        />
        <MediaCard
          handleOnclick={() => {}}
          icon={SPOTIFY_ICON}
          label="Upload Spotify Podcast"
        />
        <MediaCard
          handleOnclick={handleRssUpload}
          icon={RSS_ICON}
          label="Upload from RSS Feed"
        />
      </div>

      <div className="">
        <div className="relative border-2 border-dashed border-gray-300 p-6 rounded-lg text-center hover:border-purple-500 transition-colors duration-300">
          <input
            type="file"
            onChange={handleFileUpload}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center justify-center">
            <svg
              className="w-12 h-12 text-purple-500 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 15a4 4 0 014-4h10a4 4 0 014 4v5H3v-5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l4-4 4 4M12 5v10"
              />
            </svg>
            <p className="text-gray-500">
              Select a file or drag and drop here (Podcast Media or
              Transcription Text)
            </p>
            <p className="text-gray-400 text-sm">
              MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
            </p>
            <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300">
              Select File
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
