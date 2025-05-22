import { ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { db, SCROLL_PATH } from './firebase-config.js';

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  const params = new URLSearchParams(window.location.search);
  const role = params.get('role') || (location.pathname.includes('teacher') ? 'teacher' : 'student');

  if (role === 'teacher') {
    container.addEventListener('scroll', () => {
      set(ref(db, SCROLL_PATH), { top: container.scrollTop });
    });
  } else {
    onValue(ref(db, SCROLL_PATH), snapshot => {
      const data = snapshot.val();
      if (data?.top != null) {
        container.scrollTop = data.top;
      }
    });
  }
});
