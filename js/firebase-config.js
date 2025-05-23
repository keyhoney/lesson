// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7yqfCKzG9aVho1Y_ATXBfsCtLeiMU_U4",
  authDomain: "lesson-1276d.firebaseapp.com",
  databaseURL: "https://lesson-1276d-default-rtdb.firebaseio.com",  // 콘솔에서 복사한 정확한 URL 사용
  projectId: "lesson-1276d",
  storageBucket: "lesson-1276d.firebasestorage.app",
  messagingSenderId: "616109953467",
  appId: "1:616109953467:web:0bd94203726d5d9d0f749e",
  measurementId: "G-GJGZRHNMNL"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Realtime Database 인스턴스 가져오기
export const db = getDatabase(app);

// document.write() 폴백 대신 WebSocket만 사용하도록 강제
// (모듈 SDK에서만 동작하므로, settings 메서드가 존재할 때만 호출)
if (typeof db.settings === 'function') {
  db.settings({ experimentalForceLongPolling: false, experimentalAutoDetectLongPolling: false });
}

// 스크롤 위치 공유 경로
export const SCROLL_PATH = '/scrollPosition';
