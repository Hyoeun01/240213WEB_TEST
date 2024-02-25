

document.addEventListener("DOMContentLoaded", function() {
    // 로컬 스토리지에서 닉네임을 가져옵니다.
    var nickname = localStorage.getItem("nickname");
  
    // 가져온 닉네임이 존재하면 환영 메시지를 업데이트합니다.
    if (nickname) {
      var welcomeMessage = document.querySelector(".welcome");
      welcomeMessage.textContent = nickname + "님, 반갑습니다.";
    }
  });


  window.onload = function() {
    // 로컬 스토리지에서 이미지 데이터를 가져옵니다.
    var userImage = localStorage.getItem('userImage');
    
    // 가져온 이미지가 있는지 확인합니다.
    if (userImage) {
        // 새로운 이미지 요소를 생성합니다.
        var imgElement = document.createElement('img');
        imgElement.src = userImage;
        
        imgElement.style.width = '50px';
        imgElement.style.height = '50px';
        
        
        // "circle" 클래스를 가진 요소를 찾습니다.
        var circleElement = document.querySelector('.circle');
        
        // "circle" 클래스를 가진 요소가 존재하는지 확인합니다.
        if (circleElement) {
            // 이미지 요소를 "circle" 클래스를 가진 요소에 추가합니다.
            circleElement.appendChild(imgElement);
        } else {
            console.error('Circle 클래스를 가진 요소를 찾을 수 없습니다.');
        }
    } else {
        console.error('로컬 스토리지에서 이미지를 가져올 수 없습니다.');
    }
};