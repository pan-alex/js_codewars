// Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

// So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

// Example:

// ghostBusters("Sky scra per");

// Should return:

// "Skyscraper"

// If the building contains no ghosts, return the string:

// "You just wanted my autograph didn't you?"

// P: A string that may contain whitespaces or not.
// R: The same string with all whitespaces removed (i.e., original string concatenated)

//E:
ghostBusters("Factor y") === "Factory"
ghostBusters("O  f fi ce") === "Office"
ghostBusters("BusStation") === "You just wanted my autograph didn't you?"


// P:
    // Use .replace and replace any whitespaces with nothing.
function ghostBusters(building) {
    const result = building.replace(/ /g, '')
    return result === building ? "You just wanted my autograph didn't you?" : result
}
