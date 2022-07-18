    // Given the node object:

    // Node:
    //   val: <int>,
    //   left: <Node> or null,
    //   right: <Node> or null

    // write a function compare(a, b) which compares the two trees defined by Nodes a and b and returns true if they are equal in structure and in value and false otherwise.

    // Examples:

    // 1       1
    // | \     | \
    // 2  3    2  3
    // => true

    // 1       1
    // | \     | \
    // 3  3    2  3
    // => false (values not the same 2 != 3)

    // 1       1
    // | \     |
    // 2  3    2
    //         |
    //         3
    // => false (structure not the same)

    // Examples
    var aNode = {val: 1, left: null, right: null};
    var bNode = {val: 1, left: null, right: null};
    var cNode = {val: 2, left: null, right: null};
    var dNode = {val: 1, left: bNode, right: null};

    compare(aNode, bNode) // true
    compare(aNode, cNode) // false
    compare(aNode, dNode)


    // return true if the binary trees rooted and a and b are equal in structure and value
    // return false otherwise

    // Check:
        // vals are same
            // if not return false
        // lefts / rights are both null or both nodes
            // If not return false
            // If both nodes: call compare to recursively check all nodes
            // If both nulls: return true

function compare(a, b){
    if (a === b) return true
    if (a === null || b === null || a.val !== b.val) return false
    // left / right values both have a val property (none are null)
    if ((!!a.left && !!b.left) && (!!a.right && 'val' in b.right)) {
        let leftEqual = compare(a.left, b.left)
        let rightEqual = compare(a.right, b.right)
        return (leftEqual && rightEqual)
    }
    else {
        return (a.left === b.left && a.right === b.right) // true if all nodes are null; false otherwise
    }
}

