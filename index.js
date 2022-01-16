function distanceFromHqInBlocks(hqInBlocks){
    console.log(hqInBlocks)
    if (hqInBlocks >= 42){
        return hqInBlocks - 42
    }
    else if(hqInBlocks <= 42){
        return 42 - hqInBlocks
    }

    
}
function distanceFromHqInFeet(feet){
    console.log(feet)
    if (feet >= 42){
        return (feet - 42)*264
    }
    else if (feet <= 42){
        return (42 - feet)*264
    }

}
function distanceTravelledInFeet(to, from){
    console.log(to, from)
    if (to <= from){
        return (from - to)*264
    }
    else if (to >= from){
        return (to - from)*264
    }
}
function calculatesFarePrice(start, destination){
    if(start, destination = 0){
        return 0
    }
}