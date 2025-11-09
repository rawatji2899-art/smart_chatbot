document.addEventListener("DOMContentLoaded", () => {
  // LOGIN section
  const loginEmail = document.getElementById("login-email");
  const loginPassword = document.getElementById("login-password");
  const loginBtn = document.getElementById("login-btn");

  function checkLoginFields() {
    if (loginEmail.value.trim() && loginPassword.value.trim()) {
      loginBtn.disabled = false;
    } else {
      loginBtn.disabled = true;
    }
  }

  loginEmail.addEventListener("input", checkLoginFields);
  loginPassword.addEventListener("input", checkLoginFields);

  loginBtn.addEventListener("click", () => {
    if (!loginBtn.disabled) {
      window.location.href = "about.html"; // ✅ redirect only when active
    }
  });

  // REGISTER section
  const regName = document.getElementById("reg-name");
  const regEmail = document.getElementById("reg-email");
  const regPass = document.getElementById("reg-password");
  const regConfirm = document.getElementById("reg-confirm");
  const regBtn = document.getElementById("reg-btn");

  function checkRegisterFields() {
    if (
      regName.value.trim() &&
      regEmail.value.trim() &&
      regPass.value.trim() &&
      regConfirm.value.trim()
    ) {
      regBtn.disabled = false;
    } else {
      regBtn.disabled = true;
    }
  }

  regName.addEventListener("input", checkRegisterFields);
  regEmail.addEventListener("input", checkRegisterFields);
  regPass.addEventListener("input", checkRegisterFields);
  regConfirm.addEventListener("input", checkRegisterFields);

  regBtn.addEventListener("click", () => {
    if (!regBtn.disabled) {
      window.location.href = "about.html"; // ✅ redirect only when active
    }
  });
});
