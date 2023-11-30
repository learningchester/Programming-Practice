const swap = () => {

    let n1 = 10
    let n2 = 20

    n1=n1+n2 // n1=30 , n2= 20

    n2 = n1-n2 // n2=10 , n1=30
    n1=n1-n2

    console.log(`n1 ${n1} n2 ${n2}`);
}
swap()