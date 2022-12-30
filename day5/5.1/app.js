// const sumbitBtn = document.getElementById("submit-btn")

// console.log(sumbitBtn)

// const hidden = document.getElementsByClassName("hidden")

// const [divA, divB, divC] = document.getElementsByClassName("div")

// console.log(divA)

// const radioInputs = document.getElementsByName("animal")
// console.log(radioInputs)

// const firstDiv = document.querySelector("div")
// console.log(firstDiv)

// const form = document.querySelector("form")

// const [div1, div2, div3] = document.querySelectorAll("div")
// console.log(div1)

// div1.innerText = "영역1"

// console.log(div1.className)
// console.log(div1.classList.add("color-red"))
// div1.classList.remove("t1")

// if (div1.classList.contains("color-red")) {
//     div1.classList.remove("color-red")
// } else {
//     div1.classList.add("color-red")
// }

// const newDiv = document.createElement("div")
// newDiv.innerText = "추가된 영역!"
// newDiv.classList.add("color-red")

// form.appendChild(newDiv)

// 브라우저 유저가 클릭 마우스를 올려 볼 수 있고

//키보드 뭔가 입력
//마우스 click
//form submit

// div1.addEventListener("click", clickHandler)

// div1.removeEventListener()

const loginForm = document.querySelector(".login-form form")
const loginInput = document.querySelector(".login-form input")
const h1 = document.querySelector("h1")

const loginSubmitHandler = (event) => {
    event.preventDefault()
    const userName = loginInput.value
    if (userName === "") {
        alert("값을 입력 해주세요")
    } else if (userName.length > 15) {
        alert("15자 이내로")
    } else {
        h1.innerText = `새로운 시작 | ${userName}님 환영합니다.`
        loginForm.style.display = "none"
    }
}

loginForm.addEventListener("submit", loginSubmitHandler)
