
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
