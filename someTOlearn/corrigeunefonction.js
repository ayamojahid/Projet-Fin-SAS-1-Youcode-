function Annulerunticket() {

    let  Identifiantduticket;
    let trouve=false;
    do{
    Identifiantduticket=Number(prompt("Veuiller entrer l'dentifiant du ticket :  ")); 
    } while(isNaN(Identifiantduticket)  )
    
    for(let i= 0 ; i<tickets.length ; i++) {
        if(Identifiantduticket==tickets[i].ID) {
        trouve=true
           for(let j=0 ; j<trips.length ; j++ ) {
           
            if(trips[j].id === tickets[i].tripID)
             {
           
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