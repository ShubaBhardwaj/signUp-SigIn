# 🏥 Authentication Module

A beautiful, sleek, and fully functional Authentication flow built with React Native (Expo). This project handles user registration, login, and secure session management with a FreeAPI.app.

## ✨ Features
- **Scrollable & Responsive UI:** Fully accessible form fields using `KeyboardAvoidingView` and `ScrollView` to ensure it works beautifully on all screen sizes.
- **JWT Session Management:** Utilizes `expo-secure-store` to keep `access_token` and `refresh_token` secure on the device.
- **Robust Error Handling:** Real-time user feedback on validation errors (e.g., catching 422 HTTP responses).
- **Backend Integration:** Connects smoothly with the backend service for realistic User flows (Sign up, Sign In, Logout).
- **Clean State Management:** Conditional rendering of Home / Auth pages based on live session state without needing page reloads.

## 📸 App Preview

### 🎥 Screen Recording
Check out the full authentication flow in action:
<br/>
<video src="./assets/screenshots/SignUp%26SigIn.mov" width="320" controls autoplay loop></video>
<br/>
*(If the video doesn't load automatically, [click here to view it](./assets/screenshots/SignUp%26SigIn.mov))*

### 📱 Screenshots
<div style="display: flex; justify-content: space-between; gap: 10px;">
  <img src="./assets/screenshots/SignUp%26SigIn2.png" width="30%" alt="Sign In Screen" />
  <img src="./assets/screenshots/SignUp%26SigIn3.png" width="30%" alt="Sign Up Screen" />
  <img src="./assets/screenshots/SignUp%26SigIn1.png" width="30%" alt="Home Screen" />
</div>

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher)
- Expo CLI
- Expo Go app on your physical device

### 2. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 3. Run the App
Start the Expo development server:
```bash
npx expo start
```
Scann the qr code with [expo go app](https://expo.dev/client).

## 📁 Project Structure
```text
src/
├── app/
│   └── index.tsx          # Root entry and State manager (Conditional Routing)
├── components/
│   ├── authPage.tsx       # UI for Sign In & Sign Up
│   └── home.tsx           # Home screen with Logout functionality
├── services/
│   ├── api.ts             # Axios instance setup
│   ├── auth.service.ts    # API methods (login, register, logout)
│   └── token.storage.ts   # SecureStore wrapper for JWT tokens
└── styles/
    └── signIn.ts          # Stylesheet for the Authentication views
```

## 🛠️ Built With
- **React Native** & **Expo**
- **Axios** (API Requests)
- **Expo Secure Store** (Token encryption)
