import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDeGbW-rIkxSSIJquSfz6myerAh7grcR1E",
	authDomain: "demofileupload-ca291.firebaseapp.com",
	projectId: "demofileupload-ca291",
	storageBucket: "demofileupload-ca291.appspot.com",
	messagingSenderId: "16543175691",
	appId: "1:16543175691:web:c77668d16ad4a0c644e30e",
	measurementId: "G-21LWDH5W8X"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, 'gs://demofileupload-ca291.appspot.com');
export default storage;
