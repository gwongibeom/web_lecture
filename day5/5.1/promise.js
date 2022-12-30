/*
function f1() {
    console.log("f1")
    f2()
}
function f2() {
    console.log("f2")
}
function f3() {
    ///
    console.log("f3")
}

function f4() {
    ///
    console.log("f4")
}

function f5() {
    console.log("f5")
    ///
}

f1()
f2()
f3()
f4()
f5()
*/

//js에서 비동기 구현
// 1. callback(걸름)
// 2. Promise(es6 비동기 표준)
// 3. async await(짱짱한 최신 문법)

//현재 작업중 비동기적으로 처리하고 있는 상황
//1. 작업중 (pending) -> 성공 및 실패여부가 결정되지않은 promise 객체가 실행중
//2. 직압완료 & 성공 + 값 (resolve)
//3. 작업완료 & 실패 + 왜 실패 했는지 에러객체 (reject)

// const p1 = new Promise(function (resolve, reject) {
//     //어렵고 복잡한 작업
//     setTimeout(() => {
//         //성공 했을떄
//         resolve("p1 sucess")
//     }, 3000)

//     // 리졸브는 알아서 끝냄

//     //실패
//     // return reject(new Error("dammmmmmmmmm"))
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p2 sucess")
//     }, 4000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("p3 콩쥐야 좆됐어"))
//     }, 1000)
// })

// p3.then(null /* 리솔브 자리*/, (reject) => {
//     console.log(reject)
// })

// console.time("test")

// //작업이 완료 된 후 어떻게 처리 해줄지 (소비자~)
// // p1 p2 p3 모든 promise 객체가 완료 되었을때

// Promise.all([p1, p2]).then(([r1, r2]) => {
//     console.log(r1, r2)
//     console.timeEnd("test")
// })

//then cath finally 다 써보자
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("완료!")
//     }, 1000)
//     // setTimeout(() => {
//     //     reject(new Error("에러발생!"))
//     // }, 2000)
// })
//     .finally(() => {
//         alert("프로미스가 준비됨")
//     })
//     .then((result) => alert(result))

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1)
//     }, 1000)
// })

// promise.then(function (result) {
//     alert(result)
//     return result * 2
// })

// promise.then(function (result) {
//     alert(result)
//     return result * 2
// })

// promise.then(function (result) {
//     alert(result)
//     return result * 2
// })
