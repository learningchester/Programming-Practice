const revString = () => {
    let str = 'SHIMLA'
    let revStr = '';
    for (let index = str.length - 1; index >= 0; index--) {
        revStr = revStr + str[index]

    }
    console.log('Reverse String:', revStr)
}
revString()

const revString2 = () => {
    let str = 'AuStRaLiA'
    console.log('Reverse String:', str.split('').reverse().join('').toUpperCase())
}
revString2()