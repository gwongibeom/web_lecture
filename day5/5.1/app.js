const sumbitBtn = document.getElementById("submit-btn")

console.log(sumbitBtn)

const hidden = document.getElementsByClassName("hidden")

const [divA, divB, divC] = document.getElementsByClassName("div")

console.log(divA)

const radioInputs = document.getElementsByName("animal")
console.log(radioInputs)

const firstDiv = document.querySelector("div")
console.log(firstDiv)

const form = document.querySelector("form")

const [div1, div2, div3] = document.querySelectorAll("div")
console.log(div1)

div1.innerText = "영역1"

console.log(div1.className)
console.log(div1.classList.add("color-red"))
div1.classList.remove("t1")

// if (div1.classList.contains("color-red")) {
//     div1.classList.remove("color-red")
// } else {
//     div1.classList.add("color-red")
// }

const newDiv = document.createElement("div")
newDiv.innerText = "추가된 영역!"
newDiv.classList.add("color-red")

form.appendChild(newDiv)

// 브라우저 유저가 클릭 마우스를 올려 볼 수 있고

//키보드 뭔가 입력
//마우스 click
//form submit

div1.addEventListener("click", clickHandler)

// div1.removeEventListener()
