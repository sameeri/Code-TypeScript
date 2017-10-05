// Interfaces let us define contracts.

// Let us say we have a function that works with Vehicles
// What do we mean by a Vehicle? Whats the concept?

// Lets say we figured that out. and defined it as

interface Vehicle{
    brand: string,
    year: number
}

// Let us say in our domain, we have some concept called 'New' vehicle and 'Old' vehicle
// And we have rules that ydefine what we mean by a new and an old vehicle

function isNew(vehicle: Vehicle){
    return vehicle.year > 2015;
}

function isOld(vehicle: Vehicle){
    return vehicle.year <= 2015;
}

// Now lets say we have a vehicle.
// Observe that this is a plain JavaScript object defined with a literal syntax

let myAltima = {year: 2014, brand: "Altima"};

// I can check whether it is an old or a new vehicle
console.log("Is my car a new one? ", isNew(myAltima));

// The above code should compile fine, since the object myAltima meets the
// structure/definition/contract/shape of the expected argument. That is all.