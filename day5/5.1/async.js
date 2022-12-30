async function f1() {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("완료")
        }, 1000)
    })
    let result = await p
    alert(result)
}

f1()
