// Create an array to store the names of guests
let guests = ["Ali", "Fahad", "Abdullah"];

// Identify the guest who can't attend
let unable_to_attend = "Ali";
console.log(`${unable_to_attend} can't make it to dinner.`);

// Replace the guest who can't attend with a new guest
let new_guest = "Sulyman";
guests[guests.indexOf(unable_to_attend)] = new_guest;

// Send new invitations to all guests
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for today's dinner?`);
});
