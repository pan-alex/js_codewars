// Description

// Below is described a skill tree:

    /*
    visualized:
      0
      ├── 1
      │   └── 3
      │       ├── 4
      │       └── 5
      └── 2
          └── 6    
    */
// The array that describes this skill tree is as follows:

// [
//  0, # 0 is the root and does not depend on any skill.
//  0, # 1 is unlocked by skill 0 (skill at index 0).
//  0, # 2 is unlocked by skill 0.
//  1, # 3 is unlocked by skill 1.
//  3, # 4 is unlocked by skill 3.
//  3, # 5 is unlocked by skill 3.
//  2  # 6 is unlocked by skill 2.
// ]

// In another words, each skill is identified by its index in the array, and its value identifies the skill that unlocks it.
// Your Task:

// Given a skill tree described as an array and a set of required skills, return the total number of skills needed to learn all of the required skills.

// Intuition: In the example's tree, if I want to learn skill 6, I first need to learn skills 0 and 2 - a total of 3 skills learned.
// Examples:

// countSkills([ 0, 0, 0, 1, 3, 3, 2 ], new Set([ 6 ]));     -> 3
// countSkills([ 0, 0, 0, 1, 3, 3, 2 ], new Set());          -> 0
// countSkills([ 0, 0, 0, 1, 3, 3, 2 ], new Set([ 1, 2 ]));  -> 3

// Constraints:

//     Each skill is only unlocked by exactly one skill!
//     Skills can unlock any number of skills.
//     Inputs are always valid and each skill can be unlocked by some other skill, except 0.
//     0 ≤ len(tree) ≤ 200,0000 len(tree) \le 200\,0000≤len(tree)≤200000
//     0 ≤ len(required) ≤ len(tree)

// Notes:

//     You need to be somewhat efficient with your approach.
//     You are provided with 2 functions in preloaded to help you debug:
//         build_tree/buildTree - convert a tree array into a dict describing which skills each skill unlocks.
//         visualize_tree/visualiseTree/visualizeTree - get a visual representation of the given tree array.



// Parameters:
    // tree: Array. Represents the tree.
    // required: Set/array. Contains the index position of the skills that you are trying to unlock.
        // If empty, return 0.

// Example: 
    // countSkills([ 0, 0, 0, 1, 3, 3, 2 ], new Set([ 1, 2 ]))
        // Start by looking at position 2:
            // Will require skill 2 and skill 0 = 2
        // Look at position 1:
            // Will require still 1 and skill 0. Skill 0 already unlocked, so only 1 new skill.
        // Total is 3.

    // countSkills([ 0, 0, 0, 1, 3, 3, 2 ], new Set([ 4, 5 ]))
        // 5: 5, 3, 1, 0
        // 4: 4, 3, 1, 0
        // = 5


// Psuedocode:
    // Initialize an array called 'unlocked'
    // Start with the largest number in the set:
        // do tree[i]; store the value j in unlocked.
        // do tree[j]; store the value in unlocked. Repeat until you reach a value of 0.
    // Repeat with each of the numbers in the set.
    // At the end, convert unlocked to a set, and return the length.

// Efficiencies:
    // If a skill in required is already included in the unlocked set, skip it.
        // If, while evaluating a tree a number is encountered that is already included in the unlocked set, skip it.


function countSkills(tree, required) {
    let unlocked = [0]
    required = [...required].sort( (a, b) => b - a)
    if (required.length == 0) return 0
    required.forEach( x => {
        while (!unlocked.slice(0, -1).includes(tree[x])) {
            x = tree[x]
            unlocked.push(x)
        }
    });
    unlocked = new Set(unlocked.concat(required))
    return [...unlocked].length
    }