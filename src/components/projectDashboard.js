import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdSettings, IoMdNotificationsOutline } from "react-icons/io";

export const ProjectsDashboard = () => {
 const navigate = useNavigate();
 const location = useLocation();
 const projects = location.state?.projects || [];

 const handleBackToHome = () => {
   navigate("/");
 };

 const getInitials = (name) => {
   const words = name.trim().split(/\s+/);
   if (words.length > 1) {
     return words[0][0] + words[1][0];
   }
   return words[0][0];
 };

 return (
   <div className="min-h-screen bg-gray-100 p-8 w-full">
     <header className="flex justify-between items-center mb-8">
       <button
         onClick={handleBackToHome}
         className="text-purple-600 text-lg font-semibold"
       >
         &larr; Back to Home
       </button>
       <div className="flex items-center space-x-4">
         <button className="bg-gray-200 p-2 rounded-full">
           <IoMdSettings className="h-6 w-6" />
         </button>
         <button className="bg-gray-200 p-2 rounded-full">
           <IoMdNotificationsOutline className="h-6 w-6" />
         </button>
       </div>
     </header>
     <h1 className="text-4xl font-bold text-purple-600 mb-8">Projects</h1>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {projects.map((project, index) => (
         <div
           key={index}
           className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4"
         >
           <div className="w-16 h-16 flex items-center justify-center bg-purple-600 text-white text-2xl font-bold rounded-full">
             {getInitials(project)}
           </div>
           <div className="text-left">
             <h2 className="text-xl font-semibold">{project}</h2>
             <p className="text-gray-500">4 Episodes</p>
             <p className="text-gray-500">Last edited a week ago</p>
           </div>
         </div>
       ))}
     </div>
   </div>
 );
};


