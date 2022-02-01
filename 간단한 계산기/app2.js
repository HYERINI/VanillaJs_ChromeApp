// 자바스크립트 개념 정리 실습
// object 안에 함수를 선언해서 
// 간단한 계산기를 만든다.
// 모두 크롬의 콘솔창에서 실행
// 단, console.log()를 사용하지 않고, 함수의 결괏값을
// 변수에 저장하는 방법을 사용한다.

const calculator = {
    add : function(a, b){
        return a + b;
    },

    minus : function(a, b) {
        return a - b;
    }, 
    div : function(a, b) {
        return a / b;
    },
    multi : function(a, b){
        return a * b;
    },
    powerOf : function(a, b){
        return a ^ b;
    },
}

const plusResult = calculator.add(6,2);
const minusResult = calculator.minus(6,2);
const divResult = calculator.div(6,2);
const multiResult = calculator.multi(6,2);
const powerOfResult = calculator.powerOf(2, 6);
