"use strict";
let guests = ["Ali", "Fahad", "Abdullah"];
let unable_to_attend = "Ali";
console.log(`${unable_to_attend} can't make it to dinner.`);
//replace the guest
let new_guests = "Sulyman";
guests[guests.indexOf(unable_to_attend)] = new_guests;
//new invitation
guests.forEach(guests => {
    console.log(`Dearn ${guests}, would you like to join me for todays dinner? `);
});
