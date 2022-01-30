// 자바스크립트 개념 정리 실습
// object 안에 함수를 선언해서 
// 간단한 계산기를 만든다.
// 모두 크롬의 콘솔창에서 실행

const calculator = {
    add : function(a, b){
        console.log(a+b);
    },

    minus : function(a, b) {
        console.log(a-b);
    }, 
    div : function(a, b) {
        console.log(a/b);
    },
    multi : function(a, b){
        console.log(a*b);
    },
    powerOf : function(a, b){
        console.log(a^b);
    },
}

calculator.add(6,2);
calculator.minus(6,2);
calculator.div(6,2);
calculator.multi(6,2);
calculator.powerOf(2, 6);
