// title에 event라는 클래스 이름을 가진 h1 태그를 가져옴
// title을 클릭하면 글자색을 blue로 바꿔주는 handleTitleClick 함수를 구현함
// addEventListener() 함수를 사용해 click event를 listen하고, 
// click event가 발생하면 두번째 인자로 받은 함수를 실행한다.

const title = document.querySelector(".event h1");

function handleTitleClick() {
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);