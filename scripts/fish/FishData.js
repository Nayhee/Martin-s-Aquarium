
const fishCollection = [
    {
        species: "Yellow Tang",
        length: 15,
        location: "Honululu, HI",
        saltwater: true,
        image: "bluefish.jpg",
        name: "Frodo",
        food: "insects"
    },
    {
        species: "Shark",
        length: 17,
        location: "Nashville, TN",
        saltwater: true,
        image: "shark.jpg",
        name: "Bruce",
        food: "insects"
    },
    {
        species: "Sword Fish",
        length: 15,
        location: "Brentwood, TN",
        saltwater: true,
        image: "swordfish.jpg",
        name: "Greg",
        food: "insects"
    }
    
]

export const getFish = () => {
    return fishCollection;
}


export const getMostHolyFish = (fishArray) => {          //needs to have the fishCollection array passed in when calling this function!
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = []

    for (const fish of fishArray) {
        if (fish.length % 3 === 0) {
            holyFishArray.push(fish);
        }
    }

    return holyFishArray;
}

export const getSoldierFish = (fishArray) => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiersArray = []

    for (const fish of fishArray) {
        if(fish.length % 5 === 0) {
            soldiersArray.push(fish);
        }
    }


    return soldiersArray
}

export const getUnworthy = (fishArray) => {
    // Any fish not a multiple of 3 or 5
    const unworthyArray = []

    for (const fish of fishArray) {
        if (fish.length % 5 != 0 || fish.length % 3 != 0) {
            unworthyArray.push(fish);
        }
    }
    return unworthyArray;
}