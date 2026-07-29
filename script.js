// ===== script.js — shared functionality, all pages connected =====

document.addEventListener('DOMContentLoaded', function () {
  // --- 1. highlight active nav link (already handled by 'active' class in HTML) 
  //    but we keep it dynamic if needed.
  const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // --- 2. Login form handler (connected to dashboard) ---
  const loginForm = document.getElementById('loginForm');
  const loginMsg = document.getElementById('loginMessage');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value.trim();

      if (!email || !password) {
        loginMsg.innerHTML = '<span style="color:#b13e3e;"><i class="fas fa-exclamation-circle"></i> Please fill in all fields.</span>';
        return;
      }
      // simple mock login — redirect to dashboard
      loginMsg.innerHTML = '<span style="color:#1f7b4d;"><i class="fas fa-check-circle"></i> Login successful! Redirecting...</span>';
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 800);
    });
  }

  // --- 3. Register form handler (connected to login) ---
  const registerForm = document.getElementById('registerForm');
  const regMsg = document.getElementById('registerMessage');
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('regName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const password = document.getElementById('regPassword').value.trim();

      if (!name || !email || !password) {
        regMsg.innerHTML = '<span style="color:#b13e3e;"><i class="fas fa-exclamation-circle"></i> All fields are required.</span>';
        return;
      }
      if (password.length < 6) {
        regMsg.innerHTML = '<span style="color:#b13e3e;"><i class="fas fa-exclamation-circle"></i> Password must be at least 6 characters.</span>';
        return;
      }
      // mock registration — redirect to login
      regMsg.innerHTML = '<span style="color:#1f7b4d;"><i class="fas fa-check-circle"></i> Account created! Redirecting to login...</span>';
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 800);
    });
  }

  // --- 4. premium upgrade button (simple feedback) ---
  const upgradeBtn = document.querySelector('.btn-primary .fa-gem')?.closest('.btn-primary');
  if (upgradeBtn) {
    upgradeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      alert('✨ Premium upgrade flow (demo). All files connected.');
    });
  }

  // --- 5. (optional) any other cross-page interactions ---
  console.log('📚 PageHaven · all files connected (dashboard, login, register, premium)');
});