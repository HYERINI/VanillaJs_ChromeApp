//getElementById() : ()안의 아이디를 가진 태그를 불러온다.
// js안에서 Html 속 해당 아이디를 갖고 있는 태그의 innertext를 바꾼다.
// js안에서 불러온 태그의 id와 class를 출력한다.
const title = document.getElementById("h1IdName");

title.innertext = "js속에서 innertext를 바꿔봤어요";

console.log(title.id);
console.log(title.className);

//hello라는 클래스 이름을 가진 h1의 글자색을 검정으로 바꿔준다. 
const title3 = document.querySelector(".hello h1");

console.log(title3);

title3.style.color = "black";