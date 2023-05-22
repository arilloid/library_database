console.log("CRUD operations");
console.log("----------------");
console.log("Update the rental fee for all books in a specific genre:");
printjson(
  db.books.updateMany(
    { genre: "Fiction" },
    { $set: { rental_fee: 0.44 } }
  )
);

console.log("----------------");
console.log("Update the contact information (phone number and address) for Eunseo:");
printjson(
  db.patrons.updateOne(
    { first_name: "Eunseo", last_name: "Park" },
    {
      $set: {
        phone_number: "123-456-789",
        address: {
          street: "100 King St",
          city: "Vancouver",
          province: "BC",
          zip: "2W2E2R"
        }
      }
    }
  )
);