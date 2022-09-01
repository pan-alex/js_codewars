

//One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

//One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:

//V = max(R,G,B)

//You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!

//For example,

brightest(["#001000", "#000000"]) == "#001000"
brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"

//If there are multiple brightest colors, return the first one:

brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"

//Note that both input and output should use upper case for characters A, B, C, D, E, F.
//Algorithms
//Strings

//P: Array. Array containing strings; strings represent colours in hexadecimal format.
// R: String. Return the string corresponding to the brightest colour contained in the array

// P:
	// For each string in the array:
		// Split into RGB values.
		// Find the max
		// Check if max is higher than current highest
		// If yes, replace that value
		// If no, continue

function getBrightness(color) {
	// Takes a string in hexadecimal and returns the brightness
	channels = color.match(/[A-F0-9][A-F0-9]/g)
	rgbs = channels.map( channel => parseInt(channel, 16))
	return Math.max(...rgbs)
}

function brightest(colors){
	let brightnesses = colors.map( color => getBrightness(color))
	let i = brightnesses.indexOf(Math.max(...brightnesses))
	return colors[i]
}

