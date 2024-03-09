//set guests
let guests : string[] = ["sulyman","ali","adnan"];

//adding more guest
guests.unshift("nawaz");
guests.splice(guests.length / 2, 0, "ahmed");
guests.push("hamad");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner`);
});