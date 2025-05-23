// js/scroll-sync.js
import { ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { db, SCROLL_PATH } from './firebase-config.js';

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  const totalScrollable = () => container.scrollHeight - container.clientHeight;
  const params = new URLSearchParams(window.location.search);
  const role = params.get('role') || (location.pathname.includes('teacher') ? 'teacher' : 'student');

  if (role === 'teacher') {
    // 교사용: 스크롤 시 비율 저장
    container.addEventListener('scroll', () => {
      const ratio = container.scrollTop / totalScrollable();
      set(ref(db, SCROLL_PATH), { ratio });
    });
  } else {
    // 학생용: DB로부터 비율 읽어서 적용
    onValue(ref(db, SCROLL_PATH), snapshot => {
      const data = snapshot.val();
      if (data?.ratio != null) {
        container.scrollTop = totalScrollable() * data.ratio;
      }
    });
  }
});
