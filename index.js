// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter((element) => element.toUpperCase() === name.toUpperCase());
}

function fuzzyMatch(drivers, name) {
    return drivers.filter((element) => element[0] === name[0])
}

function matchName(drivers, nameToFind) {
    return drivers.filter((element) => element.name === nameToFind)
}

// console.log(["Beck", "Bowie", "Indy"].filter((element) => element === "Indy"));
console.log(findMatching(["Beck", "Bowie", "Indy"], "Indy"));