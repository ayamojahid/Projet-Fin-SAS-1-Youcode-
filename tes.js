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
let numbers3= [2, 5, 7, 3, 8, 4];
let target = 10;
let numbr=[];
let compteur=0;
for(let i = 0 ; i<numbers3.length ; i++) {
    for(let j = 0 ; j<numbers3.length ; j++) {
        
    }
    if(numbers3[i] % 2 == 0) {
     numbr.push(numbers3[i])
     compteur++
    }
    
}
console.log(numbr + "  " + compteur)

for(let i = 0 ; i< numbr.length ; i++) {
    for(let j = i+ 1 ; j<numbr.length ; j++) {
        if(numbr[i] + numbr[j] == target) {
        console.log(numbr[i] + " + " + numbr[j]);
        }
    }
}

/* Tu veux trouver les notes qui apparaissent plusieurs fois.
Exemple attendu
12 apparaît plusieurs fois
15 apparaît plusieurs fois */

let notes = [12, 8, 15, 10, 18, 7, 15, 12];

for(let i=0 ; i<notes.length ; i++ ) {
    for(let j = i+1 ; j<notes.length ; j++) {
    if(notes[i] == notes[j]) {
        console.log(notes[i] +  "apparair plusieur fois" )
    }
    }
}

//les lettre repete
/*r apparaît plusieurs fois
o apparaît plusieurs fois
m apparaît plusieurs fois*/

console.log("=".repeat(50))
let word = "programmation";
for(let i = 0 ; i<word.length ; i++) {
    for(let j =i+1  ; j<word.length ; j++) {
        if(word[i] == word[j]) {
            console.log(word[i] + "  apparaît plusieurs fois   ")
        }
    }
}


let word1 = "bonjour";
let word2 = "bonsoir";

for(let i=0 ; i<word1.length ; i++) {
    for(let j = 0 ; j<word2.length ; j++) {
        if(word1[i] == word2[j] ) {
            console.log("lettre repete est " + word1[i])
        }
    }
}


let word4 = "javascript";


for(let i = 0 ; i< word4.length ; i++) {
    let compt=1;
    for(let j=i+1 ; j<word4.length ; j++){
        if(word4[i] == word4[j]) {
            compt++;
            console.log(word4[i]  + "  a apparaît "  + compt)
            
        }
        
    }
         

    
}


//Exercice — Nombres manquants

let numbersm= [1, 3, 5, 9];

for(let i = 1 ; i <=10 ; i++) {
        let trouve = false;
for(let j = 0 ; j<numbersm.length ; j++) {

    if(i == numbersm[j]) {
        trouve = true;
    }
}

if(trouve == false) {
    console.log(i)
}
}

//ok pour hello word aficher chaque one dands un tableau betwen them , 
// et nafiche pas le e 

let sm="hello word";
let f=[];

let mot = "";
for(let i=0 ; i<sm.length ; i++) {
    if(sm[i] !== "e" && sm[i] !== " ") {
        mot+=sm[i];
    }
    if(sm[i] == " "){
      f.push(mot);
      mot="";
    }

}
f.push(mot);
console.log(f)

//inverse 
let hol="hello word" ; 
let stoc="";
for(let i = hol.length-1  ; i>=0 ; i--) {
    stoc+=hol[i]
}
console.log(stoc)

//reponce 
let sm1 = "hello word";
let f1 = "";

for (let i = 0; i < sm1.length; i++) {
    if (sm1[i] !== "e") {
        f1 += sm[i];
    }
}

console.log(f1);



//let hello word skip e et affiche

let string="hello world" 
let st="";

for(let i = 0 ; i< string.length ; i++) {
    if(string[i] != "o" ) {
        st+=string[i];
    }
}
console.log(st)


//exercice num 3