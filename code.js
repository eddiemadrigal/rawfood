function dogFeeder(weight, age) {
    let rawFood = 0;
    if (age >=1) {
        if (weight <= 5) {
            rawFood = weight * .05
            return rawFood
        } else if (weight > 5 && weight <= 10) {
            rawFood = weight * .04;
            return rawFood;
        } 
    } else {
            console.log("puppy")
    }
}

console.log(dogFeeder(7, 2))
