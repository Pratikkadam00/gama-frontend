import React from "react";

const ProjectConfiguration = () => {
  return <div className="bg-red">ProjectConfiguration</div>;
};

export default ProjectConfiguration;

//   const [isYouTubePopupOpen, setYouTubePopupOpen] = useState(false);
//   const [isRSSFeedPopupOpen, setRSSFeedPopupOpen] = useState(false);

//   const handleYouTubeUploadClick = () => setYouTubePopupOpen(true);
//   const handleRSSFeedUploadClick = () => setRSSFeedPopupOpen(true);

//   const handleClosePopup = () => {
//     setYouTubePopupOpen(false);
//     setRSSFeedPopupOpen(false);
//   };

//   {
//     /* Upload Section */
//   }
//   <div className="w-3/4 p-6">
//     <h1 className="text-2xl font-semibold mb-4">Upload</h1>

//     {/* Cards Section */}
//     <div className="grid grid-cols-2 gap-4 mb-6">
//       <div
//         className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100"
//         onClick={handleYouTubeUploadClick}
//       >
//         <p>Upload from YouTube</p>
//       </div>
//       <div
//         className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100"
//         onClick={handleRSSFeedUploadClick}
//       >
//         <p>Upload from RSS Feed</p>
//       </div>
//     </div>

//     {/* File Upload Section */}
//     <div className="border-2 border-dashed rounded-lg p-8 text-center">
//       <p>
//         Select a file or drag and drop here (Podcast Media or Transcription
//         Text)
//       </p>
//       <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded">
//         Select File
//       </button>
//     </div>
//   </div>;

//   {
//     /* YouTube Upload Popup */
//   }
//   {
//     isYouTubePopupOpen && (
//       <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
//         <div className="bg-white p-6 rounded-lg">
//           <h2 className="text-xl mb-4">Upload from YouTube</h2>
//           <input
//             type="text"
//             placeholder="Name"
//             className="border mb-2 p-2 w-full"
//           />
//           <textarea
//             placeholder="Description"
//             className="border mb-4 p-2 w-full"
//           />
//           <button
//             onClick={handleClosePopup}
//             className="px-4 py-2 bg-purple-600 text-white rounded"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     );
//   }

//   {
//     /* RSS Feed Upload Popup */
//   }
//   {
//     isRSSFeedPopupOpen && (
//       <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
//         <div className="bg-white p-6 rounded-lg">
//           <h2 className="text-xl mb-4">Upload from RSS Feed</h2>
//           <input
//             type="text"
//             placeholder="Name"
//             className="border mb-2 p-2 w-full"
//           />
//           <textarea
//             placeholder="Description"
//             className="border mb-4 p-2 w-full"
//           />
//           <button
//             onClick={handleClosePopup}
//             className="px-4 py-2 bg-purple-600 text-white rounded"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     );
//   }