const word = () => {

    let str = 'India Is My Country'
    let count = 0
    
    str.split('').forEach((char) => {
        if (char === char.toUpperCase() && char!==' ') {
            count++
        }
    })
    console.log(count);

}
word()