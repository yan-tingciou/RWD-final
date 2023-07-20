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

//前後輸入密碼不相符
const register_Email_Input = document.querySelector(".register_Email_Input");
const register_Pwd_Input = document.querySelector(".register_Pwd_Input");
const register_Pwd2_Input = document.querySelector(".register_Pwd2_Input");
const register_Input_Logo = document.querySelector(".register-input-logo");

register_Pwd_Input.addEventListener("keyup", function () {
  let p = document.querySelector(".note");
  if (register_Pwd2_Input.value !== register_Pwd_Input.value) {
    p.classList.add("note-hide");
  }
  if (register_Pwd2_Input.value == register_Pwd_Input.value) {
    p.classList.remove("note-hide");
  }
});

register_Pwd2_Input.addEventListener("keyup", function () {
  let p = document.querySelector(".note");
  if (register_Pwd2_Input.value !== register_Pwd_Input.value) {
    p.classList.add("note-hide");
  }
  if (register_Pwd2_Input.value == register_Pwd_Input.value) {
    p.classList.remove("note-hide");
  }
});

//註冊
const orange_register = document.querySelector(".orange-register");

orange_register.addEventListener("click", function (e) {
  clickRegister()
});

function clickRegister() {
  if (register_Email_Input.value == "" || register_Pwd_Input.value == "") {
    alert("請填寫正確的帳號或密碼");
    return; //中斷程式碼
  }
  let obj = {
    email: register_Email_Input.value,
    password: register_Pwd_Input.value
  };
  axios
    .post("https://hex-escape-room.herokuapp.com/api/user/signup", obj)
    .then(function (response) {
      if (response.data.success == true) {
        alert("帳號註冊成功");
      } else {
        alert("此帳號已被使用");
      }
      register_Email_Input.value = "";
      register_Pwd2_Input.value = "";
      register_Pwd_Input.value = "";
    })
    .catch(function (error) {
      console.log(error);
    });
}

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
