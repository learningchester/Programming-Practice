const int = () => {
    let num = 5678
    let sum = 0
    let str = (num + '').split('')
    str.forEach((ind) => {
        let n0 = +ind
        sum = sum + n0
    })
    console.log('sum',sum)
}

int()

const int2 = () => {
    let num = 5678
    let sum = 0
    let str = num.toString().split('')
    for (let index = 0; index < str.length; index++) {
        sum = sum + +(str[index])
    }

    console.log('sum', sum)
}
int2()

const int3 = () => {
    let num = 5678
    let sum = 0
    let str = num.toString().split('')
    for (let number of str) {
        sum = sum + Number(number)
    }

    console.log('sum', sum)
}
int3()

const int4 = () => {
    let num = 5678
    let sum = 0
    let str = num.toString().split('')
    for (let number in str) {
        sum = sum + Number(str[number])
    }

    console.log('sum', sum)
}
int4()