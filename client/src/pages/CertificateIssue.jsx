import { Button } from "../components/ui/button";
import React, { useState } from "react"; // Import useState for managing state
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import withMetaMask from "../hoc/withMetaMask";


function CertificateIssue({ web3, account, error }) {
  const [username, setUsername] = useState(""); // State for the username input
  const [password, setPassword] = useState(""); // State for the password input
  const correctPassword = "admin"; // Define the correct password for verification
  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value); // Update username value
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Update password value
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission 

    // Verify password
    // if (password === correctPassword) {
    // alert(`Welcome, ${username}!`); // Handle successful verification (you can replace this with any logic)
    navigate("/certificate/issued");
    // } else {
    //   alert("Incorrect password. Please try again."); // Handle failed verification
    // }
  };

  return (
    <section className="container place-items-center gap-10 py-16 md:py-18 mb-4">
      <div className="text-center">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Institute{" "}
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Login
            </span>
          </h1>
        </main>
        <p className="text-xl text-muted-foreground mx-auto lg:mx-0 py-4">
          View certificates{" "}
          <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            securely
          </span>{" "}
          and{" "}
          <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            efficiently!
          </span>
        </p>

        {/* Wrap the input field and button inside a form */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            id="instituteName" // Updated id for username
            // value={username} // Link state to input value
            // onChange={handleUsernameChange} // Handle changes
            placeholder="Institute Name*"
            className="border rounded mt-12 h-12 w-[500px] p-3" // Add margin bottom for spacing
            required
          />
          <input
            type="text"
            id="instituteID" // Updated id for username
            // value={username} // Link state to input value
            // onChange={handleUsernameChange} // Handle changes
            placeholder="Institute Account Address*"
            className="border rounded mt-4 h-12 w-[500px] p-3" // Add margin bottom for spacing
            required
          />
          <input
            type="text"
            id="institute" // Updated id for username
            // value={username} // Link state to input value
            // onChange={handleUsernameChange} // Handle changes
            placeholder="Institute Abbreviation*"
            className="border rounded mt-4 h-12 w-[500px] p-3" // Add margin bottom for spacing
            required
          />
          <input
            type="text"
            id="instituteLink" // Updated id for username
            // value={username} // Link state to input value
            // onChange={handleUsernameChange} // Handle changes
            placeholder="Institute Website*"
            className="border rounded mt-4 h-12 w-[500px] p-3" // Add margin bottom for spacing
            required
          />
          <div className="py-8 flex text-center items-center justify-center space-x-10">
            <Button className="w-40 p-6 text-lg" type="submit">Login</Button>
          </div>
          {/* Display connected account */}
          {account ? (
            <p></p>
          ) : (
            !error && <p className="text-gray-500"> Connecting to MetaMask...</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default withMetaMask(CertificateIssue);
