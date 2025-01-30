// import React, { useState } from "react";
// import { Button, Alert, Modal } from "react-bootstrap";
// import Confetti from "react-confetti";
// import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";  // Social Media Icons
// import "./ChatbotIntegration.css";

// const ChatbotIntegration = () => {
//   const [integrationStatus, setIntegrationStatus] = useState(null);
//   const [showInstructionsModal, setShowInstructionsModal] = useState(false);
//   const [showDeveloperEmailModal, setShowDeveloperEmailModal] = useState(false);
//   const [showConfetti, setShowConfetti] = useState(false); // State to control Confetti display
//   const [email, setEmail] = useState(""); // For email input
//   const [url, setUrl] = useState(""); // For ERB URL input
//   const [generatedScript, setGeneratedScript] = useState("");

//   const generateScriptCode = () => {
//     if (url) {
//       const scriptCode = `<script src="https://beyondchats.com/chatbot.js?url=${encodeURIComponent(url)}"></script>`;
//       setGeneratedScript(scriptCode);
//     } else {
//       alert("Please enter a valid website URL.");
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(generatedScript);
//     alert("Code copied to clipboard!");
//   };

//   const handleTestIntegration = () => {
//     // Simulate integration test (success/failure)
//     setIntegrationStatus("success");
//     setShowConfetti(true); // Show confetti on success

//     setTimeout(() => {
//       setShowConfetti(false);
//     }, 5000);
//   };

//   const handleTestChatbot = () => {
//     alert("Testing chatbot... (Redirect to client's website with dummy chatbot)");
//   };

//   const handleOpenClientWebsite = () => {
//     window.open(
//       `https://${url}.com`, // Replace with actual client's website URL
//       "_blank"
//     );
//   };

//   const handleInstructionsModalClose = () => setShowInstructionsModal(false);
//   const handleDeveloperEmailModalClose = () => setShowDeveloperEmailModal(false);

//   const handleEmailSubmit = () => {
//     alert(`Instructions have been sent to ${email}`);
//     setShowDeveloperEmailModal(false); // Close modal after submission
//   };

//   return (
//     <div className="containerrr">

//       <div className="navigationbar">

     
//       <div className="top-bar">
//         Chatbot not working as intended?{" "}
//         <Button variant="link" className="feedback-link">
//           Share feedback
//         </Button>
//       </div>

//       {/* Buttons for main actions */}
//       <div className="action-buttons">
//         <Button variant="primary" onClick={handleTestChatbot} className="action-button">
//           Test Chatbot
//         </Button>
//         <Button variant="secondary" className="action-button" onClick={handleOpenClientWebsite}>
//           {/* Open Client Website with Chatbot */}
//           Client web
//         </Button>
//         <Button variant="info" onClick={handleTestIntegration} className="action-button">
//           Test Integration
//         </Button>
//       </div>

//       </div>

//       {/* "Integrate on your website" section */}
//       <div className="border p-4 rounded-lg shadow bg-white Integrate">
//         <h2 className="text-xl font-semibold">Integrate on Your Website</h2>

//         {/* URL input */}
//         <div className="form-group">
//           <label htmlFor="websiteUrl">Enter Website URL:</label>
//           <input
//             id="websiteUrl"
//             type="text"
//             className="form-control"
//             placeholder="Enter your website URL"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//           />
//           <Button
//             variant="primary"
//             className="mt-3"
//             onClick={generateScriptCode}
//           >
//             Generate Chatbot Script
//           </Button>
//         </div>

//         {/* Display generated script */}
//         {generatedScript && (
//           <div className="mt-3">
//             <h4>Generated Script Code:</h4>
//             <textarea
//               className="form-control"
//               rows="4"
//               value={generatedScript}
//               readOnly
//             />
//             <Button
//               variant="secondary"
//               className="mt-2"
//               onClick={copyToClipboard}
//             >
//               Copy to Clipboard
//             </Button>
//           </div>
//         )}

//         <div className="mt-3">
//           <Button
//             variant="secondary"
//             onClick={() => setShowDeveloperEmailModal(true)}
//             className="mt-2"
//           >
//             Mail Instructions to Developer
//           </Button>
//         </div>
//       </div>

//       {/* Integration Test */}
//       <Button
//         variant="success"
//         onClick={handleTestIntegration}
//         className="mt-4 w-100"
//       >
//         Test Integration
//       </Button>

//       {/* Confetti and success UI */}
//       {integrationStatus === "success" && showConfetti && (
//         <div className="mt-4">
//           <Confetti />
//           <Alert variant="success">
//             Chatbot integration was successful!
//           </Alert>
//           <Button className="mt-3" variant="primary">
//             Explore Admin Panel
//           </Button>
//           <Button className="mt-3" variant="secondary">
//             Start Talking to Your Chatbot
//           </Button>
//           <div className="social-media-buttons mt-3">
//             <Button variant="outline-primary" className="mr-2">
//               <FaFacebook /> Share on Facebook
//             </Button>
//             <Button variant="outline-info" className="mr-2">
//               <FaTwitter /> Share on Twitter
//             </Button>
//             <Button variant="outline-success">
//               <FaLinkedin /> Share on LinkedIn
//             </Button>
//           </div>
//         </div>
//       )}

//       {/* Modal for instructions */}
//       <Modal show={showInstructionsModal} onHide={handleInstructionsModalClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Integration Instructions</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Follow these steps to integrate the chatbot:</p>
//           <pre>{`<script src="https://beyondchats.com/chatbot.js?url=${url}"></script>`}</pre>
//           <p>Copy the above code into the <code>&lt;head&gt;</code> section of your website.</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleInstructionsModalClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Modal for sending email instructions to developer */}
//       <Modal
//         show={showDeveloperEmailModal}
//         onHide={handleDeveloperEmailModalClose}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Mail Instructions to Developer</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter Developer's Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleDeveloperEmailModalClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleEmailSubmit}>
//             Send Instructions
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default ChatbotIntegration;


import React, { useState } from "react";
import { Button, Alert, Modal } from "react-bootstrap";
import Confetti from "react-confetti";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";  // Social Media Icons
import "./ChatbotIntegration.css";

const ChatbotIntegration = () => {
  const [integrationStatus, setIntegrationStatus] = useState(null);
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  const [showDeveloperEmailModal, setShowDeveloperEmailModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false); // State to control Confetti display
  const [email, setEmail] = useState(""); // For email input
  const [url, setUrl] = useState(""); // For ERB URL input
  const [generatedScript, setGeneratedScript] = useState("");

  const generateScriptCode = () => {
    if (url) {
      const scriptCode = `<script src="https://beyondchats.com/chatbot.js?url=${encodeURIComponent(url)}"></script>`;
      setGeneratedScript(scriptCode);
    } else {
      alert("Please enter a valid website URL.");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedScript);
    alert("Code copied to clipboard!");
  };

  const handleTestIntegration = () => {
    // Simulate integration test (success/failure)


    setIntegrationStatus("success");
    setShowConfetti(true); // Show confetti on success

    setTimeout(() => {
      setShowConfetti(false); // Hide confetti after 5 seconds
    }, 5000);
  };

  const handleTestChatbot = () => {
    alert("Testing chatbot... (Redirect to client's website with dummy chatbot)");
  };

  const handleOpenClientWebsite = () => {
    window.open(
      `https://${url}.com`, // Replace with actual client's website URL
      "_blank"
    );
  };

  const handleInstructionsModalClose = () => setShowInstructionsModal(false);
  const handleDeveloperEmailModalClose = () => setShowDeveloperEmailModal(false);

  const handleEmailSubmit = () => {
    alert(`Instructions have been sent to ${email}`);
    setShowDeveloperEmailModal(false); // Close modal after submission
  };

  return (
    <div className="containerrr">
      <div className="navigationbar">
        <div className="top-bar">
          Chatbot not working as intended?{" "}
          <Button variant="link" className="feedback-link">
            Share feedback
          </Button>
        </div>

        {/* Buttons for main actions */}
        <div className="action-buttons">
          <Button variant="primary" onClick={handleTestChatbot} className="action-button">
            Test Chatbot
          </Button>
          <Button variant="secondary" className="action-button" onClick={handleOpenClientWebsite}>
            Client Web
          </Button>
          <Button variant="info" onClick={handleTestIntegration} className="action-button">
            Test Integration
          </Button>
        </div>
      </div>

      {/* "Integrate on your website" section */}
      <div className="border p-4 rounded-lg shadow bg-white Integrate ">
        <h2 className="text-xl font-semibold">Integrate on Your Website</h2>

        {/* URL input */}
        <div className="form-group">
          <label htmlFor="websiteUrl">Enter Website URL:</label>
          <input
            id="websiteUrl"
            type="text"
            className="form-control"
            placeholder="Enter your website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button
            variant="primary"
            className="mt-3"
            onClick={generateScriptCode}
          >
            Generate Chatbot Script
          </Button>
        </div>

        {/* Display generated script */}
        {generatedScript && (
          <div className="mt-3">
            <h4>Generated Script Code:</h4>
            <textarea
              className="form-control"
              rows="4"
              value={generatedScript}
              readOnly
            />
            <Button
              variant="secondary"
              className="mt-2"
              onClick={copyToClipboard}
            >
              Copy to Clipboard
            </Button>
          </div>
        )}

        <div className="mt-3">
          <Button
            variant="secondary"
            onClick={() => setShowDeveloperEmailModal(true)}
            className="mt-2"
          >
            Mail Instructions to Developer
          </Button>
        </div>
      </div>

      {/* Integration Test */}
      <Button
        variant="success"
        onClick={handleTestIntegration}
        className="mt-4 w-100"
      >
        Test Integration
      </Button>

      {/* Confetti and success UI */}
      {integrationStatus === "success" && (
        <div className="mt-4 succesfail">
          {showConfetti && <Confetti />}
          <Alert variant="success">
            Chatbot integration was successful!
          </Alert>
          <Button style={{backgroundColor:"black"}} className="mt-3" variant="primary">
            Explore Admin Panel
          </Button>
          <Button  style={{backgroundColor:"black"}}  className="mt-3" variant="secondary">
            Start Talking to Your Chatbot
          </Button>
          <div className="social-media-buttons mt-3">
            <Button variant="outline-primary" className="mr-2">
              <FaFacebook /> Share on Facebook
            </Button>
            <Button variant="outline-info" className="mr-2">
              <FaTwitter /> Share on Twitter
            </Button>
            <Button variant="outline-success">
              <FaLinkedin /> Share on LinkedIn
            </Button>
          </div>
        </div>
      )}

      {/* Modal for instructions */}
      <Modal show={showInstructionsModal} onHide={handleInstructionsModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Integration Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Follow these steps to integrate the chatbot:</p>
          <pre>{`<script src="https://beyondchats.com/chatbot.js?url=${url}"></script>`}</pre>
          <p>Copy the above code into the <code>&lt;head&gt;</code> section of your website.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleInstructionsModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for sending email instructions to developer */}
      <Modal
        show={showDeveloperEmailModal}
        onHide={handleDeveloperEmailModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Mail Instructions to Developer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Developer's Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeveloperEmailModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEmailSubmit}>
            Send Instructions
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChatbotIntegration;
