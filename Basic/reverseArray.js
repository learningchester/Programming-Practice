const revArray = () => {
    let arr = ['A', 'B', 'C', 'D', 'E']
    let revArray = []

    for (let index = arr.length - 1; index >= 0; index--) {

        revArray.push(arr[index])

    }

    console.log(revArray);
}
revArray()