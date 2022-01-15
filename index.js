function distanceFromHqInBlocks(someValue){ 
    return Math.abs(someValue - 42); 
}

function distanceFromHqInFeet(someValue) {
distanceFromHqInBlocks(someValue);
let distance = distanceFromHqInBlocks(someValue);
    return distance * 264; 

}



    function distanceTravelledInFeet(start, destination) {
        const block = 264
        return Math.abs(start-destination) * 264; 


    }




    function calculatesFarePrice(start, destination) {
        const travel = (start - destination) * 264
        const travelmorethan2k = (Math.abs(start - destination)) * 264
        if (travel < 400){
            return 0;
        }
    else if (travel > 401 && travel < 2000) {
        return (travel - 400) *0.02;
    }
    else if (travelmorethan2k > 2000 && travelmorethan2k < 2500) {
    return 25; //not sure why this doesn't work
    }
    else if (travel >= 2500) {
        return "cannot travel that far";
    }
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    }
    if (
        distanceTravelledInFeet(start, destination) > 400 &&
        distanceTravelledInFeet(start, destination) < 2000
    ) {
        return 2.56;
    }
    if (
        distanceTravelledInFeet(start, destination) > 2000 && 
        distanceTravelledInFeet(start, destination) < 2500
    ) {
        return 25;
    }
    if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far";
    }
}