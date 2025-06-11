function checkAuth() {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Token manquant. Veuillez vous reconnecter.");
    window.location.href = "dmin_login.html";
  }
  return token;
}
