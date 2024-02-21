
        // 함수 정의시 사용하는 function은 예약어여서 변수로 사용할수없다. 
        // 예약어를 잘 몰라서 변수로 사용하면 동작이 잘 안되는 경우 발생

        // 함수(=메서드) 이름 작명시 첫단어를 제외하고는 대문자로 쓰자.

        function nightDayHandler(self) {

            // 실행시 night 버튼값 변경이 안되는 현상이 있다. this 수정필요
            // 함수 정의시 파라미터의 이름값은 아무거나 사용하면되지만, 의미상으로 사용 권장
            // 순서
            //  1. 함수 호출 onclick = "nightDayHandler(this)"
            //  2. 함수 정의한 곳으로 이동
            //  3. 함수를 정의한 곳에서 this는 self로 간다.
            //  ex) 매개변수 self = this (self라는 변수에 this라는 객체를 할당(assignment)했다. x = 1; 처럼 x에 1 대입한것과 같다)

            // var target = document.querySelector('body');

            if (self.value === 'night') {
                //이부분을 함수로 변경해서 재사용 해보기
                // 기존에는 중복부분을 target이란 변수에 할당해서 사용. 리팩토링 했지만 이번에는  함수를 이용할 예정
                // target.style.backgroundColor = 'black';
                // BodySetBackgroudSetColor('black')
                // // target.style.color = 'white';
                // BodySetColor('white')
                Body.setBackgroundColor('black')
                Body.setColor('white')
                self.value = 'day'

                Links.setColor('pink')
                // //a태그를 다중선택자 이용, alist 변수에 담아서 각 a태그속성(색상)에 접근하여 변경작업 (반복문 이용)
                // var alist = document.querySelectorAll('a');
                // var i = 0;
                // while (i < alist.length) {
                //     // 해당 a 태그의 글자 색상 변경코드
                //     alist[i].style.color = 'powderblue';
                //     // 테스트(개발 환경에서) 크롬 브라우저 콘솔 확인용
                //     console.log(alist[i]);
                //     i = i + 1;
                // }

            } else {
                // BodySetBackgroudSetColor('white')
                // BodySetColor('black')
                // target.style.backgroundColor = 'white';
                // target.style.color = 'black';
                Body.setBackgroundColor('white')
                Body.setColor('black')
                self.value = 'night'

                Links.setColor('cornflowerblue')
                // var alist = document.querySelectorAll('a');
                // var i = 0;
                // while (i < alist.length) {
                //     alist[i].style.color = 'blue';
                //     console.log(alist[i]);
                //     i = i + 1;
                // }
            }

        }
        // 해당 a태그 요소 모두 선택, 색상 변경하는 기능을 함수로 분리
        // function linksSetColor(color) {
        //     var alist = document.querySelectorAll('a');
        //     var i = 0;
        //     while (i < alist.length) {
        //         alist[i].style.color = color;
        //         console.log(alist[i]);
        //         i = i + 1;
        //     }
        // }

        //기존 a태그 선택해서 색변경기능을 객체함수에 담기
        // 키 : setColor 
        // 값 : funcion ~
            var Links = {
            setColor: function (color) {
                var alist = document.querySelectorAll('a');
                var i = 0;
                while (i < alist.length) {
                    alist[i].style.color = color;
                    i = i + 1;
                }
            }
        }

        //주의사항 ; 함수를 사용시 인잣값으로 문자열타입 사용하기

        // // body태그 하위 글자색을 변경하는 함수
        // function BodySetColor(color) {
        //     document.querySelector('body').style.color = color;
        // }

        // // body태그 하위 배경색을 변경하는 함수
        // function BodySetBackgroudSetColor(color) {
        //     document.querySelector('body').style.backgroundColor = color;
        // }

        // Body (객체) : 해당 객체 내 속성으로 익명함수 이용중
        var Body = {
            //키 : setColor
            //값 : function~
            setColor: function (color) {
                document.querySelector('body').style.color = color;
            },
            setBackgroundColor: function (color) {
                document.querySelector('body').style.backgroundColor = color;
            }
        }