const swap = () => {
    let str1 = 'INDIA'
    let str2 = 'CANADA'
   
    console.log(`Before Swapping str 1:${str1}  str 2: ${str2}`)
    str1 =str1+str2
    
    str2 = str1.substring(0,str1.length-str2.length) // INDIA
    str1 =str1.substring(str2.length ,str1.length) // CANADA

    console.log(`After  Swapping str 1:${str1}  str 2: ${str2}`)
}
swap()