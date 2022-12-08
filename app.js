//  this is a js file
// yoooo gitttt

console.log("this is JS")


function promfunc(){

    const prom = new Promise((res) => {
        res("This is resolveee prom")
    });
    return prom;
}
    
async function callfunc(){
    const result = await promfunc();
    console.log(result)
}asd

callfunc();asdasda
