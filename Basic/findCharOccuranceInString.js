const occr = () => {
    let str = "missisippi"
    let map = new Map()

    str.split('').forEach((char) => {

        if (map.get(char) > 0) {
            map.set(char, map.get(char) + 1)
        }
        else {
            map.set(char, 1)
        }
    })

    for (let key of map.keys()) {
        console.log(`${key} occur ${map.get(key)} times`);
    }
}
occr()