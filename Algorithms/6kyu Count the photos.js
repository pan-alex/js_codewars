// In a string we describe a road. There are cars that move to the right and we denote them with ">" and cars that move to the left and we denote them with "<". There are also cameras that are indicated by: " . ".
// A camera takes a photo of a car if it moves to the direction of the camera.

// Task
// Your task is to write a function such that, for the input string that represents a road as described, returns the total number of photos that were taken by the cameras. The complexity should be strictly O(N) in order to pass all the tests.

// Examples

// For ">>." -> 2 photos were taken
// For ".>>" -> 0 photos were taken
// For ">.<." -> 3 photos were taken
// For ".><.>>.<<" -> 11 photos were taken

// Algorithms
// Performance
// Arrays


// P: String
    // > and < represent cars traveling left or right
    // . represent cameras
// R: integer
    // The number of photos
    // A photo is taken when a car is facing the camera. I.e., return the total number of cars facing all cameras

// E:
    // For ">>." -> 2 photos were taken
    // For ".>>" -> 0 photos were taken
    // For ">.<." -> 3 photos were taken
    // For ".><.>>.<<" -> 11 photos were taken

// P:
    // Solution must be O(N) to pass.
    // Look at right only then left only.
    // If splitting on cars (eg., ">") then the index position of the camera is the same as the number of cars that it sees

    // >..<<.>.<.
        // right only: >...>..
            // ['', '...', '..'] 3x1 + 2x2 = 7
        // left only: ..<<..<. reverse: .>..>>..
            // ['.', '..', '', '..'] 1x0 + 2x1 + 2x3 = 0+2+6=8

function countPhotos(road){
    let photos = 0;
    let right = road.replace(/</g, '').split('>')
    let left = road.replace(/>/g, '').split('<').reverse()

    right.forEach( (x, i) => {
       photos += x ? x.length * i : 0
    })
    left.forEach( (x, i) => {
        photos += x ? x.length * i : 0
    })
    return photos
}



// Original solutions (not O(n))
// For each .:
        // Count the number of ">" to the left and the number of "<" to the right
        // Sum the value for all cameras

function sumCars(roadSegment, car) {
    return roadSegment.split('').filter(x => x===car).length
}

function countPhotos(road){
    let cars = 0;
    for (i in road) {
        if (road[i] === '.') {
            cars += sumCars(road.slice(0, i), '>') + sumCars(road.slice(i), '<')
        }
    }
    return cars;
}