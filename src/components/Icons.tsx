import React from "react";
import type { IconName } from "../types";

const Icons: React.FC<{ iconName: IconName }> = ({ iconName }) => {
  switch (iconName) {
    case "instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000"
          className="social-icon"
          width="24"
          height="24"
          viewBox="0 0 50 50"
          style={{ transition: "transform 0.3s ease" }}
        >
          <path fill="#f48fb1" d="M21,46h15c5.5,0,10-4.5,10-10V21c0-5.5-4.5-10-10-10H21c-5.5,0-10,4.5-10,10v15C11,41.5,15.5,46,21,46z"></path><path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M41.5,21.1v-4.6c0-5.5-4.5-10-10-10h-15c-5.5,0-10,4.5-10,10v3"></path><path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M6.5,25.6v5.9c0,5.5,4.5,10,10,10h15c5.5,0,10-4.5,10-10v-4.6"></path><path fill="none" stroke="#18193f" strokeMiterlimit="10" strokeWidth="3" d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S28.7,15.5,24,15.5z"></path><path fill="#18193f" d="M34,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S35.1,12,34,12z"></path>
        </svg>
      );
    case "github":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000"
          className="social-icon"
          width="24"
          height="24"
          viewBox="0 0 50 50"
          style={{ transition: "transform 0.3s ease" }}
        >
          <circle cx="28" cy="28" r="18" fill="#9fa8da"></circle><path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M35.054,38.836	C31.97,41.137,28.144,42.5,24,42.5C13.783,42.5,5.5,34.217,5.5,24c0-2.917,0.675-5.676,1.878-8.13"></path><path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13.869,8.518	C16.779,6.61,20.26,5.5,24,5.5c10.217,0,18.5,8.283,18.5,18.5c0,2.941-0.686,5.721-1.907,8.19"></path><path fill="#18193f" d="M34,23c0-1.574-0.576-3.038-1.558-4.275c0.442-1.368,0.93-3.771-0.242-5.648	c-2.251,0-3.73,1.545-4.436,2.514C26.602,15.213,25.333,15,24,15s-2.602,0.213-3.764,0.591c-0.706-0.969-2.184-2.514-4.436-2.514	c-1.328,2.126-0.526,4.45-0.073,5.43C14.638,19.788,14,21.334,14,23c0,3.78,3.281,6.94,7.686,7.776	c-1.309,0.673-2.287,1.896-2.587,3.38h-1.315c-1.297,0-1.801-0.526-2.502-1.415c-0.692-0.889-1.437-1.488-2.331-1.736	c-0.482-0.051-0.806,0.316-0.386,0.641c1.419,0.966,1.516,2.548,2.085,3.583C15.168,36.161,16.229,37,17.429,37H19v5.942h10v-7.806	c0-1.908-1.098-3.544-2.686-4.36C30.719,29.94,34,26.78,34,23z"></path>
        </svg>
      );
    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#0077B5"
          className="social-icon"
          width="24"
          height="24"
          viewBox="0 0 50 50"
          style={{ transition: "transform 0.3s ease" }}
        >
         <path fill="#8ce7f2" d="M40,44H15c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v25C44,42.2,42.2,44,40,44z"></path><path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M40.5,31.7v4.8c0,2.2-1.8,4-4,4h-25c-2.2,0-4-1.8-4-4V24.9"></path><path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M7.5,19.2v-7.7c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v14"></path><circle cx="15.5" cy="15.5" r="2.5" fill="#18193f"></circle><path fill="#18193f" d="M17,35h-3c-0.6,0-1-0.4-1-1V21c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v13C18,34.6,17.6,35,17,35z"></path><path fill="#18193f" d="M29,20c-1.5,0-2.9,0.6-4,1.5V21c0-0.6-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1	v-7.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5V34c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-8C35,22.7,32.3,20,29,20z"></path>
        </svg>
      );
    case "completed":
      return(
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" 
          width="24" 
          height="24" 
          viewBox="0 0 48 48"
          transform= "0.2s ease-in-out">
          <path fill="#c9c7c9" d="M42,45H15c-1.7,0-3-1.3-3-3V15c0-1.7,1.3-3,3-3h27c1.7,0,3,1.3,3,3v27C45,43.7,43.7,45,42,45z"></path><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" points="17.5,23.5 22.5,28.5 33,18"></polyline><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M40.5,30.9v6.6c0,1.7-1.3,3-3,3h-27c-1.7,0-3-1.3-3-3V24"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M7.5,17.1v-6.6c0-1.7,1.3-3,3-3h27c1.7,0,3,1.3,3,3v12.8"></path>
        </svg>
      )
    case "active":
      return(
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" 
        width="24" 
        height="24" 
        viewBox="0 0 48 48"
        transform= "0.2s ease-in-out">
        <path fill="#34c759" d="M42,45H15c-1.7,0-3-1.3-3-3V15c0-1.7,1.3-3,3-3h27c1.7,0,3,1.3,3,3v27C45,43.7,43.7,45,42,45z"></path>
        {/* <polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" points="17.5,23.5 22.5,28.5 33,18"></polyline> */}
        <path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M40.5,30.9v6.6c0,1.7-1.3,3-3,3h-27c-1.7,0-3-1.3-3-3V24"></path>
        <path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M7.5,17.1v-6.6c0-1.7,1.3-3,3-3h27c1.7,0,3,1.3,3,3v12.8"></path>
      </svg>
      )
    default:
      console.warn(`Icon ${iconName} not found`);
      return null;
  }
};

export default Icons;
