//expected output  1 1 2 3 5 8 13 21 34 ...

const fibbo = () => {

    let num1 = 1
    let num2 = 1
    let res = ''
    console.log('1')
    console.log('1')

    for (let index = 0; index < 8; index++) {
        res = num1 + num2

        console.log(res);
        num1 = num2
        num2 = res
    }

}

fibbo()