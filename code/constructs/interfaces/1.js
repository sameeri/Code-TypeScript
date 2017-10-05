// Interfaces let us define contracts.
// Let us say in our domain, we have some concept called 'New' vehicle and 'Old' vehicle
// And we have rules that ydefine what we mean by a new and an old vehicle
function isNew(vehicle) {
    return vehicle.year > 2015;
}
function isOld(vehicle) {
    return vehicle.year <= 2015;
}
// Now lets say we have a vehicle.
// Observe that this is a plain JavaScript object defined with a literal syntax
var myAltima = { year: 2014, brand: "Altima" };
// I can check whether it is an old or a new vehicle
console.log("Is my car a new one? ", isNew(myAltima));
// The above code should compile fine, since the object myAltima meets the
// structure/definition/contract/shape of the expected argument. That is all. 
