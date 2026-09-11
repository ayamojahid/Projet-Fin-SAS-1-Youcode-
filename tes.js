//doublons
let numbers = [4, 7, 2, 7, 9, 4, 8, 7];
let stock=[] 


for(let i =0 ; i<numbers.length ; i++) {

    let trouve = false;

    for(let j = i+1 ; j<numbers.length ; j++) {
        if(numbers[i] == numbers[j] ) {
         trouve =true
        } 

    }
    if(trouve == true ) {
            stock.push(numbers[i])

    }
}
console.log(stock)


let numbers1 = [2, 4, 2, 7, 4, 2, 9];


for(let i = 0 ; i<numbers1.length ; i++) {
    let compteur = 0;

    for (let j =i+1 ; j<numbers1.length ; j++) {
        if (numbers1[i] == numbers1[j]) {
            compteur++;
            numbers1[i]
        }
    }
        console.log(numbers[i] + "  apair " + compteur)

}

//Paire avec la plus petite différence
