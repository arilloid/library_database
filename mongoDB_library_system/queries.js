console.log("The results of the queries:");
console.log("----------------------------");
console.log("Finding all books of the Novel genre:");
printjson(db.books.find( { genre: "Novel" }).toArray());

console.log("----------------------------");
console.log("Finding all books released between 2000 – 2003:");
printjson(db.books.find( {
  publish_year: {
    $gte: 2000,
    $lte: 2003
  }
}).toArray());

console.log("----------------------------");
console.log("Finding all patrons who have rented a book of a “Classic literature” genre:");
printjson(db.patrons.aggregate( [
  {
    $lookup: {
      from: "rentals",
      localField: "email",
      foreignField: "patron_email",
      as: "rentals"
    }
  },
  {
    $unwind: "$rentals"
  },
  {
    $lookup: {
      from: "books",
      localField: "rentals.book_isbn",
      foreignField: "isbn",
      as: "book"
    }
  },
  {
    $unwind: "$book"
  },
  {
    $match: {
      "book.genre": "Classic literature"
    }
  },
  {
    $group: {
      _id: "$_id",
      first_name: { $first: "$first_name" },
      last_name: { $first: "$last_name" },
      email: { $first: "$email" }
    }
  }
]).toArray());

console.log("----------------------------");
console.log("Finding the total rental fees collected from arina@dbs311.com:");
printjson(db.rentals.aggregate( [
  {
    $match: {
      patron_email: "arina@dbs311.com"
    }
  },
  {
    $lookup: {
      from: "books",
      localField: "book_isbn",
      foreignField: "isbn",
      as: "book_info"
    }
  },
  {
    $unwind: "$book_info"
  },
  {
    $group: {
      _id: "$patron_email",
      total_rental_fees: {
        $sum: "$book_info.rental_fee"
      }
    }
  }
]).toArray());

console.log("----------------------------");
console.log("Finding the most popular book based on the number of rentals:");
printjson(db.rentals.aggregate( [
  {
    $lookup: {
      from: "books",
      localField: "book_isbn",
      foreignField: "isbn",
      as: "book"
    }
  },
  {
    $unwind: "$book"
  },
  {
    $group: {
      _id: "$book.title",
      numRentals: { $sum: 1 }
    }
  },
  {
    $sort: { numRentals: -1 }
  }
]).toArray());

console.log("----------------------------");
console.log("Calculating the average rental fee per genre:");
printjson(db.books.aggregate( [
  {
    $group: {
      _id: "$genre",
      avg_rental_fee: {
        $avg: "$rental_fee"
      }
    }
  }
]).toArray()); 

console.log("----------------------------");
console.log("Calculating the total rental fees collected per month:");
printjson(db.rentals.aggregate([
  {
    $match: {
      actual_return_date: { $exists: true }
    }
  },
  {
    $lookup: {
      from: "books",
      localField: "book_isbn",
      foreignField: "isbn",
      as: "book"
    }
  },
  {
    $unwind: "$book"
  },
  {
    $addFields: {
      rental_days: {
        $divide: [
          { $subtract: [ "$actual_return_date", "$return_date" ] },
          86400000
        ]
      }
    }
  },
  {
    $addFields: {
      rental_fee: {
        $cond: {
          if: { $gte: [ "$actual_return_date", "$return_date" ] },
          then: { $multiply: [ "$book.rental_fee", "$rental_days" ] },
          else: 0
        }
      }
    }
  },
  {
    $group: {
      _id: {
        month: { $month: "$actual_return_date" },
        year: { $year: "$actual_return_date" }
      },
      total_rental_fee: { $sum: "$rental_fee" }
    }
  },
  {
    $project: {
      _id: 0,
      month: "$_id.month",
      year: "$_id.year",
      total_rental_fee: 1
    }
  },
  {
    $sort: {
      year: 1,
      month: 1
    }
  }
]).toArray());

console.log("----------------------------");
console.log("Finding the top 3 most popular genres among customers:");
printjson(db.rentals.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "book_isbn",
      foreignField: "isbn",
      as: "book"
    }
  },
  {
    $unwind: "$book"
  },
  {
    $group: {
      _id: "$book.genre",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  },
  {
    $limit: 3
  }
]).toArray());
