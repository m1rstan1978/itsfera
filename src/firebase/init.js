import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Вставь свою конфигурацию Firebase здесь
const firebaseConfig = {
    apiKey: "AIzaSyAFvmDqQdaJ7GiQoHIXXvdUKQAi8oKNus8",
    authDomain: "itsfera-538a2.firebaseapp.com",
    databaseURL: "https://itsfera-538a2-default-rtdb.firebaseio.com",
    projectId: "itsfera-538a2",
    storageBucket: "itsfera-538a2.appspot.com",
    messagingSenderId: "1033310442555",
    appId: "1:1033310442555:web:c0b53dbbe5726d8ec9f81e"
};

// Инициализируй приложение Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Получи ссылку на базу данных Firebase
const firebaseDatabase = getDatabase(firebaseApp);

export { firebaseApp, firebaseDatabase };