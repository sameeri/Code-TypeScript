// Does something that abides by an interface must have all things mentioned by the interface?
// Sometimes we know that we could have somethings or not, but we must have some other things
// To represent such a real world scenarion, the interface construct can specify required
// and optional fields.
// What we are saying here is a Vehicle can have multiple Owners
// And having owners is optional
// And what an Owner means to us is also defined.
// Inside Owner, gender is an optional field
function getOwners(vehicle) {
    return vehicle.owners;
}
var v1 = {
    brand: 'Mitsubhishi',
    year: 2001
};
var v2 = {
    brand: 'BMW',
    year: 2004,
    owners: []
};
var v3 = {
    brand: 'Mercedes',
    year: 2009,
    owners: [
        { name: 'Sam', age: 21, gender: 'Male' },
        { name: 'Pavan', age: 28 }
    ]
};
console.log(getOwners(v1));
console.log(getOwners(v2));
console.log(getOwners(v3));
