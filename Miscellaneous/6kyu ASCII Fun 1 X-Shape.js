// You will get an odd integer n (>= 3) and your task is to draw an X. Each line is separated with \n.

// Use the following characters: ■ □ For Ruby, Crystal and PHP: whitespace and o
// Examples


//                                      ■□□□■
//             ■□■                      □■□■□
//   x(3) =>   □■□             x(5) =>  □□■□□
//             ■□■                      □■□■□
//                                      ■□□□■


function x(n){
    let layer = 1; // Layer = distance from middle;
    let bottom = ''
    const middle = `\n` + `□`.repeat((n-1)/2) + `■` + `□`.repeat((n-1)/2) + `\n`
    while (layer < (n)/2) {
        bottom += `□`.repeat((n/2) - layer) + `■` + `□`.repeat((layer-1)*2+1) + `■`+ `□`.repeat((n/2) - layer) + `\n`
        layer++;
    }
    bottom = bottom.slice(0, -1)
    const top = bottom.split('').reverse().join('');
    return (top + middle + bottom)
}



// Better solution
function x(n){
    const answ = []
    for (let i = 0; i < n; i++) {
      const a = "□".repeat(n).split("")
      a[i] = "■"
      a[n - 1 - i] = "■"
      answ.push(a.join(""))
    }
    return answ.join("\n")
  }