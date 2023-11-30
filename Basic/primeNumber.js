const prime = (num) => {
    if (num < 2) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }

    }
    return true
}

if (prime(47)) {
    console.log('number is prime');
}

else {
    console.log('number is NOT prime');
}

const genPrimeNumberSeries = (limit) => {
    const series = []
    if (limit < 2) {
        false
    }

    for (let index = 2; index <= limit; index++) {
        if (prime(index)) {
            series.push(index)
        }

    }
    return series
}

console.log(genPrimeNumberSeries(50))