# Installation

## 1. Install the NextJS app
````bash
npm install --force
npm run dev
````

## 2. Firebase authentication
1. Create a Firebase account
2. Create a Firebase project
3. Create a Firebase app (Settings Icon -> Project Settings -> General -> Your Apps)
4. Save the Firebase config in your project files (src/auth/firebase-config.json)
5. Modify the production firebaseConfig.authDomain setting in src/auth/auth.js, with your domain (if you want to run in production) 
