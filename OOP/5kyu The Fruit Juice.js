// In this kata we mix some tasty fruit juice. We can add some components with certain amounts. Sometimes we pour out a bit of our juice. Then we want to find out, which concentrations our fruit juice has.

// Example:

//     You take an empty jar for your juice
//     Whenever the jar is empty, the concentrations are always 0
//     Now you add 200 units of apple juice
//     And then you add 200 units of banana juice
//     Now the concentration of apple juice is 0.5 (50%)
//     Then you pour out 200 units
//     The concentration of apple juice is still 50%
//     Then you add 200 units of apple juice again
//     Now the concentration of apple juice is 0.75, while the concentration of banana juice is only 0.25 (300 units apple juice + 100 units banana juice)

// Complete the functions in order to provide this functionality. The test code for the example above can be found in the test fixture.


function Jar() {
    this.concentrations = {}
    this.totalAmount = 0;

    Jar.prototype.add = function(amount, type) {
        if (!type) return undefined
        this.totalAmount += amount
        if(!(this.concentrations[type])) this.concentrations[type] = 0
        this.concentrations[type] += amount
    };

    Jar.prototype.pourOut = function(amount) {
        percentChange = (this.totalAmount - amount) / this.totalAmount
        this.totalAmount -= amount
        for (type in this.concentrations) {
            this.concentrations[type] *= percentChange
        }
    };

    Jar.prototype.getTotalAmount = function() {
        return this.totalAmount
    };

    Jar.prototype.getConcentration = function(type) {
        return this.concentrations[type] ? this.concentrations[type] / this.totalAmount : 0
    }
}

jar = new Jar();
jar.getConcentration('apple')
jar.add(200, 'apple')
jar.this.getTotalAmount()
jar.getConcentration('apple')
jar.add(200, 'banana')
jar.getConcentration('apple')
jar.getConcentration('banana')
jar.pourOut(200)
jar.getConcentration('apple')
jar.add(200, 'apple')
jar.getTotalAmount()
jar.getConcentration('apple')
jar.getConcentration('banana')
jar.add(100, 'mango')
jar.getTotalAmount()

jar.add(100, 'pineapple')
jar.add(150, 'pineapple')
console.log(jar.getTotalAmount())
jar.add(12, 'peach')
console.log(jar.getTotalAmount())
jar.pourOut(12)
console.log(jar.getTotalAmount())
jar.pourOut(100)
console.log(jar.getTotalAmount())
jar.add(100, 'peach')
console.log(jar.getTotalAmount())
