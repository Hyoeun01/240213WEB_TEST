
document.getElementById('userImage').addEventListener('click', function() {
  document.getElementById('userInput').click();
});

function submitForm() {
  
  var nickname = document.getElementById("nickname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;

  
  if (nickname && email && password && confirm_password) {

     localStorage.setItem("nickname", nickname);
      
      window.location.href = "main-on.html";
  } 
  else {
      
      alert("가입정보를 모두 입력하세요");
  
}
}

function loginForm() {
  
  
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email && password ) {

    loginButton.classList.add("blue-button");
    
      location.href = "main-on.html";
     // location.reload(); 
  } 
  else {
      
      alert("정보를 모두 입력하세요");
  
}
}


function displayImage(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function() {
      var image = new Image();
      image.src = reader.result;
      image.onload = function() {
          var userImageContainer = document.getElementById('userImageContainer');
          var userImage = document.getElementById('userImage');
          userImage.src = reader.result;
          userImage.style.width = '50px'; 
          userImage.style.height = '50px';

          var tooltip = document.getElementById('tooltip');
          tooltip.style.opacity = '0';
      }
  }
  reader.readAsDataURL(file);

  // 이미지를 로컬 스토리지에 저장하는 부분 추가
  reader.onloadend = function() {
      // 이미지를 base64로 변환하여 로컬 스토리지에 저장
      localStorage.setItem('userImage', reader.result);
  }
}