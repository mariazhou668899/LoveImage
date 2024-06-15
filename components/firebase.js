// import { initializeApp } from "firebase/app";
// import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// import Constants from "expo-constants";
// import AsyncStorage from "@react-native-async-storage/async-storage";



// // add firebase config
// const firebaseConfig = {
//   apiKey: Constants.expoConfig?.extra?.apiKey,
//   authDomain: Constants.expoConfig?.extra?.authDomain,
//   projectId: Constants.expoConfig?.extra?.projectId,
//   storageBucket: Constants.expoConfig?.extra?.storageBucket,
//   messagingSenderId: Constants.expoConfig?.extra?.messagingSenderId,
//   appId: Constants.expoConfig?.extra?.appId,
// };

// // initialize firebase
// const app = initializeApp(firebaseConfig);

// // initialize auth; only for native platforms (Android and iOS)
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

// export { auth };


// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyCmmEdZo3_YduE0VxPj-UdSoW5huNhb4hY",
    authDomain: "loveimage-37a10.firebaseapp.com",
    projectId: "loveimage-37a10",
    storageBucket: "loveimage-37a10.appspot.com",
    messagingSenderId: "130988584052",
    appId: "1:130988584052:web:98e7835bb6d71ea914b521"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

  export { auth };
