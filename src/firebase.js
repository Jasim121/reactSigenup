
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCijjP2IpHxc8ksGu8Gu_7RW1lRT39Uvdo",
  authDomain: "react-auth-e679c.firebaseapp.com",
  projectId: "react-auth-e679c",
  storageBucket: "react-auth-e679c.appspot.com",
  messagingSenderId: "944348864573",
  appId: "1:944348864573:web:98f128bfb67ef9d2b68a54",
  measurementId: "G-YK8F9JEBFC"
};
 
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;
