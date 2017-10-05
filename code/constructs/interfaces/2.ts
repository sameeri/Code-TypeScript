// Does something that abides by an interface must have all things mentioned by the interface?
// Sometimes we know that we could have somethings or not, but we must have some other things
// To represent such a real world scenarion, the interface construct can specify required
// and optional fields.

// Let us try to understand this from an example.
// We want to know information about owners of a vehicle.
// A vehicle over its life time may have many owners
// If it is a brand new vehicle, then there will be no owners.

// Let us try to extend this knowledge to extend what we already have
// by re-defining our interfaces.

interface Vehicle{
    brand: string,
    year: number,
    owners ? : Array<Owner> 
}

interface Owner{
    name: string,
    age: number,
    gender?: string
}

// What we are saying here is a Vehicle can have multiple Owners
// And having owners is optional

// And what an Owner means to us is also defined.
// Inside Owner, gender is an optional field

function getOwners(vehicle: Vehicle) : Array<Owner>{
    return vehicle.owners;
}

let v1 = {
    brand: 'Mitsubhishi',
    year: 2001
};

let v2 = {
    brand: 'BMW',
    year: 2004,
    owners: []
};

let v3 = {
    brand: 'Mercedes',
    year: 2009,
    owners: [
                {name: 'Sam', age: 21, gender: 'Male'},
                {name: 'Pavan', age: 28}
            ]
};

console.log(getOwners(v1)); // logs undefined, should check in the function if property exists?
console.log(getOwners(v2)); // logs []
console.log(getOwners(v3)); // logs the two objects Sam and Pavan