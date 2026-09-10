//	Inverser un tableau	[1, 2, 3, 4, 5]	[5, 4, 3, 2, 1]

let tab=[1, 2, 3, 4, 5];
let tab1=[]
for(let i = tab.length-1 ; i>=0 ; i--) {
    tab1+=tab[i]
}

console.log(tab1)

//Trouver le deuxième plus grand
let tab2=[1, 2, 3, 4, 5 , 45 , 100];
let max1=tab[0];
let max2=tab[0];
for(let i =0 ; i<tab2.length ; i++) {
    if(tab2[i]> max1) {
        max1 =tab2[i]
    }
}
console.log(max1)

for(let i =0 ; i<tab2.length ; i++) {
     if(tab2[i]> max2 && tab2[i]!=max1) {
        max2 =tab2[i]
    }
}
console.log(max2)

//Chercher un nombre

let tab3=[1, 2, 3, 4, 5 , 45 , 100];
let trouve = false;
let search=0;
for(let i=0 ; i<tab3.length ; i++) {
    if(search == tab3[i]) {
        trouve=true;
        console.log("la variable trouve")
        break
    } 
    else if(search == false) {
        console.log("la variable nest pas trouve")
        break;
    }

}


let nombres = [4, 8, 2, 15, 7, 10 , 4 , 5];
let find=false
let stock=[];
for(let i=0 ; i<nombres.length ; i++) {
for (let j=i+1 ; j<nombres.length ; j++ ) {
    if (nombres[i] == nombres[j]) {
        stock.push(nombres[i])
    }
}
}
console.log(stock);

//tri a bulle

let tablee=[10,8,6,5,3,1,7,11,21];

let swipe;
for(let i=0 ; i<tablee.length ; i++ ) {
    for(let j=0 ; j<tablee.length-1 ; j++) {
        if(tablee[j] > tablee[j+1]) {
        swipe=tablee[j];
        tablee[j]=tablee[j+1];
        tablee[j+1]=swipe
    }}

}
console.log(tablee)

