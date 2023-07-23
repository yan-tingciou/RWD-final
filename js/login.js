$(document).ready(function(){
    $('.menu-list').on().click(function(event){
      (event).preventDefault();
      $('body').toggleClass('menu-show');
    });
    $('.heart').click(function(event){
      $(this).toggleClass('full');
    });
    $('.burger-menu h5').click(function(event){
      $(this).toggleClass('add');
    });
  });
//登入
const email_Input = document.querySelector(".email_Input");
const pwd_Input = document.querySelector(".pwd_Input");
const login = document.querySelector(".orange-login");

login.addEventListener("click", function () {
  callLoginUp();
});

function callLoginUp() {
  if (email_Input.value == "" || pwd_Input.value == "") {
    alert("請填寫正確的登入帳號或密碼");
    return;
  }
  let data = {
    email: email_Input.value,
    password: pwd_Input.value
  };
  axios
    .post("https://hex-escape-room.herokuapp.com/api/user/signin", data)
    .then(function (response) {
      if (response.data.message == "登入成功") {
        alert("帳號登入成功");
      } else{
        alert("請填寫正確的登入帳號或密碼");
      }
      email_Input.value = "";
      pwd_Input.value = "";
    })
    .catch(function (error) {
      alert("格式錯誤");
    });
}