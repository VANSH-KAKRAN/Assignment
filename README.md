# BeyondChats Chatbot Integration

## Project Structure

```
.github/
  └── workflows/
      └── main.yml
node_modules/
public/
src/
  ├── pages/
  │   ├── ChatbotIntegrationTesting/
  │   │   ├── ChatbotIntegration.css
  │   │   ├── ChatbotIntegrationTesting.jsx
  │   ├── Home/
  │   │   ├── Home.jsx
  │   ├── SetupOrganisation/
  │   │   ├── SetupOrganisation.css
  │   │   ├── SetupOrganisation.jsx
  │   ├── UserRegistration/
  │   │   ├── UserRegistration.css
  │   │   ├── UserRegistration.jsx
  ├── Images/
  │   ├── back.png
  │   ├── space.jpg
  ├── App.css
  ├── App.jsx
  ├── index.css
  ├── index.html
  ├── main.jsx
.gitignore
eslint.config.js
package.json
package-lock.json
README.md
```

## Description
This project is a chatbot integration UI for BeyondChats, built using React.js. It allows users to test chatbot functionality, generate integration scripts, and verify successful integration.

## Features
- **Chatbot Testing**: Allows users to test the chatbot on a dummy website.
- **Website Integration**: Users can generate and copy a chatbot script for their website.
- **Integration Verification**: A success UI with confetti upon successful integration.
- **Email Instructions**: Send integration instructions to a developer.
- **Social Media Sharing**: Share chatbot integration success on social platforms.

## Installation
```sh
git clone https://github.com/VANSH-KAKRAN/BeyondChats.git
cd BeyondChats
npm install
npm run dev
```

## Deployment
This project is deployed using GitHub Actions and GitHub Pages. Any push to the `main` branch triggers an automated deployment.

 Link to the live website - https://vansh-kakran.github.io/Assignment/

