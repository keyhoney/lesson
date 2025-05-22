// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7yqfCKzG9aVho1Y_ATXBfsCtLeiMU_U4",
  authDomain: "lesson-1276d.firebaseapp.com",
  databaseURL: "https://lesson-1276d.firebaseio.com",
  projectId: "lesson-1276d",
  storageBucket: "lesson-1276d.firebasestorage.app",
  messagingSenderId: "616109953467",
  appId: "1:616109953467:web:0bd94203726d5d9d0f749e",
  measurementId: "G-GJGZRHNMNL"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// document.write() 경고 제거를 위해 WebSocket 전송만 사용하도록 설정
// (Firebase 모듈 SDK에서는 실험적 옵션으로 폴링 메커니즘 조정)
if (db.settings) {
  db.settings({ experimentalForceLongPolling: false, experimentalAutoDetectLongPolling: false });
}
export const SCROLL_PATH = '/scrollPosition';
export const SCROLL_PATH = '/scrollPosition';
