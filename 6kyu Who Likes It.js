// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


function likes(names) {
    // If names empty, return "no one likes this"
    // If names has 1 name, return the name
    // If has 2 names, return name1 and name2 like this
    // If has 3 names, return name1, name2, and name3 like this
    // If 4 + names, return Name1, name2, and names.length-2 others like this
    const len = names.length
    return (
        len > 3 ? `${names[0]}, ${names[1]} and ${len-2} others like this` :
        len == 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` :
        len == 2 ? `${names[0]} and ${names[1]} like this` :
        len == 1 ? `${names[0]} likes this` :
        'no one likes this'
        )
  }


function likes(names) {
    names = names || [];
    switch(names.length) {
        case 0: return 'no one likes this'; break;
        case 1: return `${names[0]} likes this`; break;
        case 2: return `${names[0]} and ${names[1]} like this`; break;
        case 3:  return `${names[0]}, ${names[1]} and ${names[2]} like this`; break;
        default: return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
    }
}