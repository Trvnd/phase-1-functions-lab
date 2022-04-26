function distanceFromHqInBlocks(pickUpLoc) {
    return Math.abs(42 - pickUpLoc);
}

distanceFromHqInBlocks(43);

function distanceFromHqInFeet(pickUpLoc) {
    return distanceFromHqInBlocks(pickUpLoc) * 264;
}

distanceFromHqInFeet(1);


function distanceTravelledInFeet(grab, dropOffLoc) {
    return Math.abs(grab - dropOffLoc) * 264;
}

distanceTravelledInFeet();

function calculatesFarePrice(pickUp, dropOff) {
    if (distanceTravelledInFeet(pickUp, dropOff) < 400) {
        return 0
    } else if (distanceTravelledInFeet(pickUp, dropOff) > 400 && distanceTravelledInFeet(pickUp, dropOff) < 2000) {
        return (distanceTravelledInFeet(pickUp, dropOff) - 400) * .02;
    } else if (distanceTravelledInFeet(pickUp, dropOff) > 2000 && distanceTravelledInFeet(pickUp, dropOff) <= 2500) {
        return 25
    } else if (distanceTravelledInFeet(pickUp, dropOff) > 2500) {
        return 'cannot travel that far'
    }
}

calculatesFarePrice()
