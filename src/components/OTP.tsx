// import React, { useState } from 'react';

// // OTP component UI only (No backend logic)

// const OTP = ({ length = 6 }) => {
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

//   // Handle form submission (just logs the OTP for now)
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const otpString = otp.join('');
//     if (otpString.length === length) {
//       // Instead of calling a backend, we'll just log the OTP
//       console.log('OTP Submitted:', otpString);
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

//   const otpContainerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f0f0f0',
//   };

//   const formStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   };

//   const otpInputsStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginBottom: '20px',
//   };

//   const otpInputStyle = {
//     width: '40px',
//     height: '40px',
//     textAlign: 'center',
//     fontSize: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     margin: '0 5px',
//     outline: 'none',
//   };

//   const otpSubmitBtnStyle = {
//     padding: '10px 20px',
//     backgroundColor: '#4CAF50',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     transition: 'background-color 0.3s',
//   };

//   const otpSubmitBtnHoverStyle = {
//     backgroundColor: '#45a049',
//   };

//   return (
//     <div style={otpContainerStyle}>
//       <form onSubmit={handleSubmit} style={formStyle}>
//         <div style={otpInputsStyle}>
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               id={`otp-input-${index}`}
//               type="text"
//               maxLength="1"
//               value={digit}
//               onChange={(e) => handleChange(e, index)}
//               onKeyDown={(e) => handleBackspace(e, index)}
//               style={otpInputStyle}
//               autoFocus={index === 0} // Auto-focus the first input field
//             />
//           ))}
//         </div>
//         <button
//           type="submit"
//           style={otpSubmitBtnStyle}
//           onMouseOver={(e) => (e.target.style.backgroundColor = otpSubmitBtnHoverStyle.backgroundColor)}
//           onMouseOut={(e) => (e.target.style.backgroundColor = otpSubmitBtnStyle.backgroundColor)}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default OTP;
