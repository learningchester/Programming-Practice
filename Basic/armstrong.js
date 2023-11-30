const arm = () => {

    let num = 153
    let str = num.toString()
    let res = ''
    let n1 = str.split('')[0]
    let n2 = str.split('')[1]
    let n3 = str.split('')[2]
    res = +(n1 * n1 * n1) + +(n2 * n2 * n2) + +(n3 * n3 * n3)
    if (res === num) {
        console.log(`Given number ${num} is armstrong number because some of cube ${res} is same as number ${num} `)
    }
    else {
        console.log(`Given number ${num} is not armtsrong number because some of cube ${res} is not same as number ${num}`)
    }
}
arm()