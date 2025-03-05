// import React, { useState } from 'react';
// import './OTPComponent.css';

// const OTPComponent = ({ length = 6, onSubmit }) => {
//   const [otp, setOtp] = useState(Array(length).fill(''));

//   // Handle input change
//   const handleChange = (e, index) => {
//     const value = e.target.value;

//     // If input is valid (only digits are allowed), update the OTP state
//     if (/^[0-9]$/.test(value) || value === '') {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       // Focus the next input field if value is entered
//       if (value && index < length - 1) {
//         document.getElementById(`otp-input-${index + 1}`).focus();
//       }
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Join the OTP array to a single string
//     const otpString = otp.join('');
//     if (otpString.length === length) {
//       onSubmit(otpString); // Send the OTP to the parent component or API
//     } else {
//       alert('Please enter a valid OTP');
//     }
//   };

//   // Handle backspace to move focus to previous input field
//   const handleBackspace = (e, index) => {
//     if (e.key === 'Backspace' && otp[index] === '') {
//       if (index > 0) {
//         document.getElementById(`otp-input-${index - 1}`).focus();
//       }
//     }
//   };

//   return (
//     <div className="otp-container">
//       <form onSubmit={handleSubmit}>
//         <div className="otp-inputs">
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               id={`otp-input-${index}`}
//               type="text"
//               maxLength="1"
//               value={digit}
//               onChange={(e) => handleChange(e, index)}
//               onKeyDown={(e) => handleBackspace(e, index)}
//               className="otp-input"
//               autoFocus={index === 0} // Auto-focus the first input field
//             />
//           ))}
//         </div>
//         <button type="submit" className="otp-submit-btn">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default OTPComponent;
