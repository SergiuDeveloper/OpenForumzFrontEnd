import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import Router from 'next/router';
import Cookies from 'universal-cookie';
import FirebaseConfig from './firebase-config.json'

const cookies = new Cookies(null, { path: '/' });

const firebaseConfig = FirebaseConfig;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();

export const getFirebaseAuth = () => {
    return auth;
}

export const setLoginCookie = async () => {
    await auth.currentUser.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {
        cookies.set('loginCookie', idToken);
    }).catch(async function(error) {
        await logoutUser();
    });
}

export const getLoginCookie = () => {
    return cookies.get('loginCookie');
}

export const logoutUser = async () => {
    cookies.remove('loginCookie', { path: '/' });

    await signOut(auth)
    .then(() => {
        // Success
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

    Router.replace('/Login');
}
