//
var object = document.getElementById('profile_picture');
var message = document.getElementById('message');

// 오브젝트 위에 마우스를 올렸을 때 이벤트 처리
object.addEventListener('mouseover', function() {
    // 메시지를 표시합니다.
    message.style.display = 'block';
});

// 오브젝트에서 마우스가 떠났을 때 이벤트 처리
object.addEventListener('mouseout', function() {
    // 메시지를 숨깁니다.
    message.style.display = 'none';
});
