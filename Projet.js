var prompt = require('prompt-sync')();

const tickets = [];
let compteur=0;


  const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    }, 
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
function Afficherlestrajets(){
  
console.log("=== TRAJETS DISPONIBLES ===");

 for(let i = 0 ; i<trips.length ; i++) {
    console.log("=============================");

    console.log("#" + trips[i].id + "  " + trips[i].departure + " -----> " + trips[i].destination);

    console.log("Départ : " + trips[i].departureTime);

    console.log("Arrivée : " + trips[i].arrivalTime);

    console.log("Prix : " + trips[i].price + " DH ");

    console.log("Places disponibles :  " + trips[i]. availableSeats);
    }

 }

function main() {
let choix;

do {
console.log("=================================")
console.log("RAILWAY MANAGER");
console.log("=================================")

console.log("1. Afficher les trajets ")
console.log("2. Acheter un ticket")
console.log("3. Afficher les tickets" )
console.log("4. Annuler un ticket" )
console.log("5. Rechercher un ticket" )
console.log("6. Filtrer les trajets")
console.log("7. Trier les trajets")
console.log("0. Quitter")




choix=Number(prompt("Veuiller taper un choix de (0 a 7) :     "))
switch(choix)  {
 
    case 1 : Afficherlestrajets()
    break; 
    case 2 : Acheterunticket()
    break;
    case 3 : Afficherlestickets()
    break;
    case 4 : Annulerunticket()
    break;
    case 5 : Rechercherunticket()
    break;
    case 6 : Filtrerlestrajets()
    break;
    case 7 : Trierlestrajets()
    break;
    case 0 : 
    break;
    default : 
    console.log("auncun choix trouvee")
    break;

} } while(choix!=0)

}


function Acheterunticket() {
     
    let acht={
    ID : 0,
    Nomdupassager : "",
    tripID : 0,
    Trajet : "" ,
    seatNumber: 0,
    price : 0
    };

    do{
    acht.Nomdupassager=prompt("Veuiller entrer votre nom:   ");
    
    } while(acht.Nomdupassager.trim()==""  || !isNaN(acht.Nomdupassager))
    
    do {
    acht.tripID=Number(prompt("Veuiller entrer votre identifiant du traget:   "));
    } while(acht.tripID === 0  || isNaN(acht.tripID))


        let tr=false;

        
    for(let i = 0 ; i<trips.length ; i++) {
        
        if(acht.tripID==trips[i].id)  {
            tr=true;

   
       if(trips[i].availableSeats > 0) {

             compteur++;

            
         acht.seatNumber = 51 - trips[i].availableSeats;

         acht.ID = compteur;

       
          acht.price=trips[i].price;
          
           acht.Trajet=trips[i].departure +" ----> " + trips[i].destination;

         trips[i].availableSeats--;
               
                
                tickets.push(acht);

                console.log(acht);

                console.log("ticket est achete avec succes");
       }   else {
        console.log("desole ce trajet est complet aucune place trouve")
       } 
       break;
     }
           

    }

    //verifier si le trajet se trouve ou non
    if(tr==false) {
        console.log("aucun trajet ne trouve avec cette id ")

    }




}

function Afficherlestickets() {
    console.log("=== TICKETS ===");
    if(tickets.length === 0) {
        console.log("aucun ticket enregistrer");
        return;
    }
    for(let i = 0 ; i<tickets.length ; i++) {
        console.log("------------------------------")
        console.log(`Tickets ${i+1}`)

          console.log("Passager :" +tickets[i].Nomdupassager);
          console.log("Trajet :" +tickets[i].Trajet);
          console.log("Place : "+ tickets[i].seatNumber);
          console.log("Prix : " + tickets[i].price + "DH")


    }
}

function Annulerunticket() {

    let  Identifiantduticket;
    let trouve=false;
    do{
    Identifiantduticket=Number(prompt("Veuiller entrer l'dentifiant du ticket :  ")); 
    } while(isNaN(Identifiantduticket)  )
    
    for(let i= 0 ; i<tickets.length ; i++) {
        if(Identifiantduticket==tickets[i].ID) {
        trouve=true
        for(let j=0 ; j<trips.length ; j++) {
            if(trips[j].id == tickets[i].tripID) {
             trips[j].availableSeats++;
             break;
            }
        }
        tickets.splice(i, 1);
       
        console.log("Ticket a ete annule avec succes")
        break;
        }
  
    
}
  if (trouve==false) {
            console.log("Ticket introuvable.")
        }
}

function Rechercherunticket() {
let rechercherprnomdupassager;
let rech=false;

do{
rechercherprnomdupassager=prompt("Veuillez entrer votre nom pour rechercher votre tickets : ")
} while(rechercherprnomdupassager.trim() == "" || isNaN(rechercherprnomdupassager ))

for(let i=0 ; i<tickets.length ; i++) {
    if(rechercherprnomdupassager== tickets[i].Nomdupassager) {
        console.log("Voici tous les tickets appartenant votre nom " + rechercherprnomdupassager );
        console.log(tickets[i])
        rech=true;
        
    }
   
}
 if(rech==false) {
        console.log("aucun nom trouve")
    }

}

function Filtrerlestrajets() {
    let Villededepart;
    let ville = false;
    do {Villededepart=prompt("Veuiller entrer la vie de depart---> ");
    }while(isNaN(Villededepart)|| Villededepart.trim() == "")

    for(let i=0 ; i<trips.length ; i++) {
    if(Villededepart.toLowerCase() == trips[i].departure.toLowerCase() ) {
    console.log(trips[i].departure + "--->" + trips[i].destination + " : " + trips[i].price + " DH ");
     ville = true;

    }
        }
         if (ville == false) {
        console.log("Aucun trajet nest trouver");
    }
}


function Trierlestrajets() {
    let swipe;
    for(let i=0 ; i<trips.length ; i++ ) {
        for(let j = 0 ; j<trips.length-1 ; j++) {
            if(trips[j].price > trips[j+1].price) {
                swipe=trips[j];
                trips[j]=trips[j+1];
                trips[j+1]=swipe;
            }
        }
    }
    console.log(trips);


}


main()