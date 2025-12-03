
function login(){
  let u=document.getElementById('username').value;
  let p=document.getElementById('password').value;
  if(u==='admin' && p==='admin123'){
    localStorage.setItem('logged','yes');
    window.location='dashboard.html';
    return false;
  }
  document.getElementById('error').classList.remove('d-none');
  document.getElementById('error').innerText='Username atau password salah!';
  return false;
}
function logout(){ localStorage.removeItem('logged'); }
