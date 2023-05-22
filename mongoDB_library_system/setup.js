// Script for performing the project setup
db.createCollection("books");
db.createCollection("patrons");
db.createCollection("rentals");

console.log("Collections are successfully created."); 

// Inserting the patrons data
db.patrons.insertMany([
  {
    first_name: "Anna",
    last_name: "Sychikova",
    email: "anna@dbs311.com",
    phone_number: "237-427-3982",
    address: {
      street: "893 Main St",
      city: "Toronto",
      province: "ON",
      zip: "H9Q1K1"
    },
    date_of_birth: new Date("2023-01-04")
  },
  {
    first_name: "Olha",
    last_name: "Hodovaniuk",
    email: "lisa@dbs311.com",
    phone_number: "484-429-2723",
    address: {
      street: "345 Bloor St E",
      city: "Toronto",
      province: "ON",
      zip: "H9R2A1"
    },
    date_of_birth: new Date("2023-01-03")
  },
  {
    first_name: "Arina",
    last_name: "Kolodeznikova",
    email: "arina@dbs311.com",
    phone_number: "188-427-7643",
    address: {
      street: "5000 Yonge St",
      city: "Toronto",
      province: "ON",
      zip: "O1N3U1"
    },
    date_of_birth: new Date("2023-01-02")
  },
  {
    first_name: "Eunseo",
    last_name: "Park",
    email: "eunseo@dbs311.com",
    phone_number: "642-153-8311",
    address: {
      street: "215 Queen St W",
      city: "Toronto",
      province: "ON",
      zip: "J3H2B9"
    },
    date_of_birth: new Date("2023-01-01")
  },
  {
    first_name: "Lisa",
    last_name: "Lee",
    email: "lisa@dbs311.com",
    phone_number: "832-488-8383",
    address: {
      street: "190 Rue Wellington St",
      city: "Montreal",
      province: "QC",
      zip: "H1H1H1"
    },
    date_of_birth: new Date("1973-10-17")
  },
  {
    first_name: "David",
    last_name: "Garnson",
    email: "david@dbs311.com",
    phone_number: "905-421-1234",
    address: {
      street: "453 Main St",
      city: "Toronto",
      province: "ON",
      zip: "M5V1Z5"
    },
    date_of_birth: new Date("1972-11-12")
  },
  {
    first_name: "Sophia",
    last_name: "Kim",
    email: "ksophia511@dbs311.com",
    phone_number: "778-123-4567",
    address: {
      street: "456 Oak St",
      city: "Vancouver",
      province: "BC",
      zip: "V6B2K4"
    },
    date_of_birth: new Date("1993-01-17")
  },
  {
    first_name: "Thomasine",
    last_name: "Chen",
    email: "thomasine@dbs311.com",
    phone_number: "613-555-9876",
    address: {
      street: "789 Granville St",
      city: "Ottawa",
      province: "ON",
      zip: "K1P5L6"
    },
    "date_of_birth": new Date("2000-06-11")
  },
  {
    first_name: "Ava",
    last_name: "Singh",
    email: "ava@dbs311.com",
    phone_number: "604-555-4789",
    address: {
      street: "321 Burrard St",
      city: "Vancouver",
      province: "BC",
      zip: "V6C2G8"
    },
    "date_of_birth": new Date("1991-09-11")
  },
  {
    first_name: "Jacob",
    last_name: "Li",
    email: "jacob@dbs311.com",
    phone_number: "416-555-5255",
    address: {
      street: "456 Yonge St",
      city: "Toronto",
      province: "ON",
      zip: "M4Y1W9"
    },
    date_of_birth: new Date("1977-10-30")
  },
  {
    first_name: "Samantha",
    last_name: "Chen",
    email: "samantha@dbs311.com",
    phone_number: "647-555-0141",
    address: {
      street: "143 Main St",
      city: "Toronto",
      province: "ON",
      zip: "M5V2X1"
    },
    date_of_birth: new Date("2001-04-07")
  },
  {
    first_name: "Ryan",
    last_name: "Kim",
    email: "ryan@dbs311.com",
    phone_number: "778-555-0212",
    address: {
      street: "456 High St",
      city: "Vancouver",
      province: "BC",
      zip: "V6C1B1"
    },
    date_of_birth: new Date("1993-11-14")
  },
  {
    first_name: "Michelle",
    last_name: "Nguyen",
    email: "michelle@dbs311.com",
    phone_number: "613-535-0333",
    address: {
      street: "789 Broadview Ave",
      city: "Ottawa",
      province: "ON",
      zip: "K1S1K1"
    },
    date_of_birth: new Date("1992-12-12")
  },
  {
    first_name: "Andrew",
    last_name: "Wong",
    email: "andrew@dbs311.com",
    phone_number: "604-555-0144",
    address: {
      street: "321 Oak St",
      city: "Victoria",
      province: "BC",
      zip: "V8T1T1"
    },
    date_of_birth: new Date("1994-11-11")
  },
  {
    first_name: "Emily",
    last_name: "Li",
    email: "emily123@dbs311.com",
    phone_number: "416-555-0595",
    address: {
      street: "567 Elm St",
      city: "Toronto",
      province: "ON",
      zip: "M4W2M2"
    },
    date_of_birth: new Date("1999-07-15")
  },
  {
    first_name: "Blaire",
    last_name: "Park",
    email: "blaire@dbs311.com",
    phone_number: "778-515-0126",
    address: {
      street: "890 Maple St",
      city: "Vancouver",
      province: "BC",
      zip: "V6H1V1"
    },
    date_of_birth: new Date("2002-08-19")
  },
  {
    first_name: "Vernor",
    last_nam: "Chen",
    email: "vernor@dbs311.com",
    phone_number: "647-512-9912",
    address: {
      street: "605 Bloor St W",
      city: "Toronto",
      province: "ON",
      zip: "M6G1K5"
    },
    date_of_birth: new Date("1999-12-10")
  },
  {
    first_name: "Avery",
    last_name: "Liu",
    email: "avery@dbs311.com",
    phone_number: "604-713-8819",
    address: {
      street: "800 Robson St",
      city: "Vancouver",
      province: "BC",
      zip: "V6Z3B7"
    },
    date_of_birth: new Date("1996-05-25")
  },
  {
    first_name: "Alexandra",
    last_name: "Wong",
    email: "alexandra@dbs311.com",
    phone_number: "905-555-0192",
    address: {
      street: "200 Bay St",
      city: "Toronto",
      province: "ON",
      zip: "M5J2J5"
    },
    date_of_birth: new Date("1973-10-17")
  },
  {
    first_name: "Mason",
    last_name: "Nguyen",
    email: "mason@dbs311.com",
    phone_number: "613-554-0134",
    address: {
      street: "150 Elgin St",
      city: "Ottawa",
      province: "ON",
      zip: "K2P 1L4"
    },
    date_of_birth: new Date("1973-10-17")
  },
  {
    first_name: "Sophia",
    last_name: "Lee",
    email: "soplee@dbs311.com",
    phone_number: "778-555-1298",
    address: {
      street: "800 Robson St",
      city: "Vancouver",
      province: "BC",
      zip: "V6Z 3B7"
    },
    date_of_birth: new Date("1973-10-17")
  },
  {
    first_name: "Oliver",
    last_name: "Patel",
    email: "oliver321@dbs311.com",
    phone_number: "514-525-7986",
    address: {
      street: "190 Rue Wellington St",
      city: "Montreal",
      province: "QC",
      zip: "H1H 1H1"
    },
    date_of_birth: new Date("1973-10-17")
  },
  {
    first_name: "Tessy",
    last_name: "Smith",
    email: "tessy@dbs311.com",
    phone_number: "416-551-0117",
    address: {
      street: "736 Yonge St",
      city: "Toronto",
      province: "ON",
      zip: "M4T1W6"
    },
    date_of_birth: new Date("1986-03-12")
  },
  {
    first_name: "Emma",
    last_name: "Johnson",
    email: "emma1@dbs311.com",
    phone_number: "416-551-0132",
    address: {
      street: "5678 Bay St",
      city: "Toronto",
      province: "ON",
      zip: "M5J2R8"
    },
    date_of_birth: new Date("1991-09-05")
  },
  {
    first_name: "Oliver",
    last_name: "Brown",
    email: "oliver123@dbs311.com",
    phone_number: "416-552-0176",
    address: {
      street: "910 Queen St",
      city: "Toronto",
      province: "ON",
      zip: "M6J1G6"
    },
    date_of_birth: new Date("1978-12-23")
  },
  {
    first_name: "Sophia",
    last_name: "Lee",
    email: "sophia123@dbs311.com",
    phone_number: "416-554-0192",
    address: {
      street: "3456 King St",
      city: "Toronto",
      province: "ON",
      zip: "M5V1G8"
    },
    date_of_birth: new Date("1989-05-02")
  },
  {
    first_name: "Aiden",
    last_name: "Wong",
    email: "aiden@dbs311.com",
    phone_number: "416-555-0212",
    address: {
      street: "7890 Dundas St",
      city: "Toronto",
      province: "ON",
      zip: "M9B6C8"
    },
    date_of_birth: new Date("1997-11-14")
  },
  {
    first_name: "Jay",
    last_name: "Nguyen",
    email: "jay@dbs311.com",
    phone_number: "416-553-0214",
    address: {
      street: "1112 College St",
      city: "Toronto",
      province: "ON",
      zip: "M6H1A9"
    },
    date_of_birth: new Date("1981-07-19")
  },
  {
    first_name: "John",
    last_name: "Smith",
    email: "john@dbs311.com",
    phone_number: "416-535-1234",
    address: {
      street: "612 Main St",
      city: "Toronto",
      province: "ON",
      zip: "M1M1M1"
    },
    date_of_birth: new Date("1980-01-01")
  },
  {
    first_name: "Jane",
    last_name: "Doe",
    email: "jane@dbs311.com",
    phone_number: "416-155-5678",
    address: {
      street: "456 Queen St",
      city: "Toronto",
      province: "ON",
      zip: "M2M2M2"
    },
    date_of_birth: new Date("1985-05-05")
  },
  {
    first_name: "Mike",
    last_name: "Johnson",
    email: "mike@dbs311.com",
    phone_number: "416-355-9012",
    address: {
      street: "789 King St",
      city: "Toronto",
      province: "ON",
      zip: "M3M3M3"
    },
    date_of_birth: new Date("1990-10-10")
  },
  {
    first_name: "Dorrie",
    last_name: "Nguyen",
    email: "dorrie@dbs311.com",
    phone_number: "416-595-7890",
    address: {
      street: "34 Bloor St",
      city: "Toronto",
      province: "ON",
      zip: "M5M5M5"
    },
    date_of_birth: new Date("2000-08-20")
  },
  {
    first_name: "Avery",
    last_name: "Wang",
    email: "awang@dbs311.com",
    phone_number: "416-505-2345",
    address: {
      street: "56 Bay St",
      city: "Toronto",
      province: "ON",
      zip: "M6M6M6"
    },
    date_of_birth: new Date("2005-01-25")
  },
  {
    first_name: "Olivia",
    last_name: "Liu",
    email: "olivia9@dbs311.com",
    phone_number: "416-515-6789",
    address: {
      street: "78 Jarvis St",
      city: "Toronto",
      province: "ON",
      zip: "M7M7M7"
    },
    date_of_birth: new Date("2010-06-30")
  },
  {
    first_name: "Emma",
    last_name: "Lee",
    email: "lemma@dbs311.com",
    phone_number: "832-488-8193",
    address: {
      street: "190 Rue Wellington St",
      city: "Toronto",
      province: "ON",
      zip: "M5V0A1"
    },
    date_of_birth: new Date("1973-10-17")
  },
  {
    first_name: "Adam",
    last_name: "Chan",
    email: "adam@dbs311.com",
    phone_number: "416-555-1478",
    address: {
      street: "315 Bloor St W",
      city: "Toronto",
      province: "ON",
      zip: "M5S1W7"
    },
    date_of_birth: new Date("1990-04-15")
  },
  {
    first_name: "Emily",
    last_name: "Chen",
    email: "chene@dbs311.com",
    phone_number: "416-555-1764",
    address: {
      street: "1287 Yonge St",
      city: "Toronto",
      province: "ON",
      zip: "M4M4M4"
    },
    date_of_birth: new Date("1995-03-15")
  },
  {
    first_name: "Jenny",
    last_name: "Wang",
    email: "jenny@dbs311.com",
    phone_number: "905-555-1298",
    address: {
      street: "42 Overlea Blvd",
      city: "Toronto",
      province: "ON",
      zip: "M4H1B6"
    },
    date_of_birth: new Date("1985-08-22")
  },
  {
    first_name: "Mike",
    last_name: "Li",
    email: "mike123@dbs311.com",
    phone_number: "647-555-3874",
    address: {
      street: "121 King St W",
      city: "Toronto",
      province: "ON",
      zip: "M5H3T9"
    },
    date_of_birth: new Date("1979-02-11")
  },
  {
    first_name: "Emily",
    last_name: "Kim",
    email: "ekim@dbs311.com",
    phone_number: "416-552-8122",
    address: {
      street: "60 Harbour St",
      city: "Toronto",
      province: "ON",
      zip: "M5J1B7"
    },
    date_of_birth: new Date("1996-12-01")
  },
  {
    first_name: "Kevin",
    last_name: "Batho",
    email: "bathok@dbs311.com",
    phone_number: "905-550-1357",
    address: {
      street: "100 Queen St W",
      city: "Toronto",
      province: "ON",
      zip: "M5H2N2"
    },
    date_of_birth: new Date("1982-06-28")
  },
  {
    first_name: "Karen",
    last_name: "Walkey",
    email: "karen@dbs311.com",
    phone_number: "647-233-3698",
    address: {
      street: "65 Front St W",
      city: "Toronto",
      province: "ON",
      zip: "M5J1E6"
    },
    date_of_birth: new Date("1992-03-17")
  },
  {
    first_name: "Jennifer",
    last_name: "Han",
    email: "jennifer@dbs311.com",
    phone_number: "416-451-1234",
    address: {
      street: "452 Main St",
      city: "Toronto",
      province: "ON",
      zip: "M5V1B6"
    },
    date_of_birth: new Date("2004-08-14")
  },
  {
    first_name: "Mikol",
    last_name: "Scholey",
    email: "mikol@dbs311.com",
    phone_number: "416-746-5678",
    address: {
      street: "456 Yonge St",
      city: "Toronto",
      province: "ON",
      zip: "M4Y1X5"
    },
    date_of_birth: new Date("2003-09-18")
  },
  {
    first_name: "Cynthia",
    last_name: "Scholey",
    email: "cynthia@dbs311.com",
    phone_number: "416-654-4567",
    address: {
      street: "234 Main St",
      city: "Toronto",
      province: "ON",
      zip: "M5V1A1"
    },
    date_of_birth: new Date("1979-05-23")
  },
  {
    first_name: "Janette",
    last_name: "Jeon",
    email: "janette@dbs311.com",
    phone_number: "647-987-6543",
    address: {
      street: "456 Bay St",
      city: "Toronto",
      province: "ON",
      zip: "M5J2T3"
    },
    date_of_birth: new Date("1982-08-14")
  },
  {
    first_name: "Jennifer",
    last_name: "Park",
    email: "jennifer123@dbs311.com",
    phone_number: "416-135-1212",
    address: {
      street: "789 Yonge St",
      city: "Toronto",
      province: "ON",
      zip: "M4W2G8"
    },
    date_of_birth: new Date("1991-02-17")
  },
  {
    first_name: "Kevin",
    last_name: "Ailsbury",
    email: "kevin@dbs311.com",
    phone_number: "647-853-4513",
    address: {
      street: "234 Queen St W",
      city: "Toronto",
      province: "ON",
      zip: "M5V1Z7"
    },
    date_of_birth: new Date("1988-11-08")
  },
  {
    first_name: "Janaya",
    last_name: "Ho",
    email: "janava@dbs311.com",
    phone_number: "416-523-2731",
    address: {
      street: "567 College St",
      city: "Toronto",
      province: "ON",
      zip: "M6G1B2"
    },
    date_of_birth: new Date("1986-03-29")
  },
  {
    first_name: "Nathan",
    last_name: "Tse",
    email: "nathan@dbs311.com",
    phone_number: "647-555-6310",
    address: {
      street: "890 Yonge St",
      city: "Toronto",
      province: "ON",
      zip: "M4W3P4"
    },
    date_of_birth: new Date("1992-06-11")
  },
  {
    first_name: "Olivia",
    last_name: "Noads",
    email: "noads@dbs311.com",
    phone_number: "416-777-5232",
    address: {
      street: "123 Front St W",
      city: "Toronto",
      province: "ON",
      zip: "M5J2M2"
    },
    date_of_birth: new Date("1995-01-02")
  },
  {
    first_name: "Sophie",
    last_name: "Tran",
    email: "sophie@dbs311.com",
    phone_number: "416-122-4134",
    address: {
      street: "631 Main St",
      city: "Toronto",
      province: "ON",
      zip: "M5V2C2"
    },
    date_of_birth: new Date("1985-07-14")
  },
  {
    first_name: "Evyn",
    last_name: "Barczynski",
    email: "evyn@dbs311.com",
    phone_number: "604-124-3411",
    address: {
      street: "456 Granville St",
      city: "Vancouver",
      province: "BC",
      zip: "V6C1S4"
    },
    date_of_birth: new Date("1992-12-21")
  },
  {
    first_name: "Olivia",
    last_name: "McCrisken",
    email: "mc1234@dbs311.com",
    phone_number: "613-431-4125",
    address: {
      street: "789 Bank St",
      city: "Ottawa",
      province: "ON",
      zip: "K1S3V6"
    },
    date_of_birth: new Date("1978-05-02")
  },
  {
    first_name: "William",
    last_name: "yoon",
    email: "wyoon@dbs311.com",
    phone_number: "780-555-0104",
    address: {
      street: "101 Jasper Ave",
      city: "Edmonton",
      province: "AB",
      zip: "T5J1W8"
    },
    date_of_birth: new Date("1986-09-28")
  },
  {
    first_name: "Emily",
    last_name: "Hannah",
    email: "ehannah@dbs311.com",
    phone_number: "905-555-0105",
    address: {
      street: "222 Queen St",
      city: "Toronto",
      province: "ON",
      zip: "M5V1Z3"
    },
    date_of_birth: new Date("1995-02-13")
  },
  {
    first_name: "Daniel",
    last_name: "Shillito",
    email: "daniel@dbs311.com",
    phone_number: "514-522-0106",
    address: {
      street: "333 Saint Catherine St",
      city: "Montreal",
      province: "QC",
      zip: "H2X1C6"
    },
    date_of_birth: new Date("1991-11-07")
  },
  {
    first_name: "Dunc",
    last_name: "Camillo",
    email: "camillo@dbs311.com",
    phone_number: "416-123-0107",
    address: {
      street: "444 Yonge St",
      city: "Toronto",
      province: "ON",
      zip: "M4Y2B6"
    },
    date_of_birth: new Date("1980-03-26")
  },
  {
    first_name: "Emily",
    last_name: "Nguyen",
    email: "enguyen@dbs311.com",
    phone_number: "647-555-5211",
    address: {
      street: "4567 Yonge St",
      city: "Toronto",
      province: "ON",
      zip: "L4N1M9"
    },
    date_of_birth: new Date("1985-06-23")
  },
  {
    first_name: "Matthew",
    last_name: "Lowden",
    email: "matthew@dbs311.com",
    phone_number: "778-555-6124",
    address: {
      street: "421 Main St",
      city: "Vancouver",
      province: "BC",
      zip: "V6B4X4"
    },
    date_of_birth: new Date("1990-03-12")
  },
  {
    first_name: "Sarah",
    last_name: "Choi",
    email: "sarah@dbs311.com",
    phone_number: "905-411-5678",
    address: {
      street: "789 Yonge St",
      city: "Richmond Hill",
      province: "ON",
      zip: "L4C3B3"
    },
    date_of_birth: new Date("1978-12-30")
  },
  {
    first_name: "Michael",
    last_name: "Bockman",
    email: "michael@dbs311.com",
    phone_number: "604-414-8765",
    address: {
      street: "456 Granville St",
      city: "Vancouver",
      province: "BC",
      zip: "V6C1T1"
    },
    date_of_birth: new Date("1983-05-17")
  },
  {
    first_name: "Jennifer",
    last_name: "Knightley",
    email: "knight@dbs311.com",
    phone_number: "403-123-2345",
    address: {
      street: "109 Granville St",
      city: "Calgary",
      province: "AB",
      zip: "T2T0C2"
    },
    date_of_birth: new Date("1995-09-02")
  },
  {
    first_name: "Daniel",
    last_name: "Kim",
    email: "kdan@dbs311.com",
    phone_number: "604-343-3456",
    address: {
      street: "5678 Dunbar St",
      city: "Vancouver",
      province: "BC",
      zip: "V6S2G7"
    },
    date_of_birth: new Date("1980-11-18")
  },
  {
    first_name: "Karen",
    last_name: "Marco",
    email: "karen123@dbs311.com",
    phone_number: "416-834-7890",
    address: {
      street: "901 Queen St W",
      city: "Toronto",
      province: "ON",
      zip: "M6J1G5"
    },
    date_of_birth: new Date("1979-04-06")
  },
  {
    first_name: "Emily",
    last_name: "Joo",
    email: "eJoo@dbs311.com",
    phone_number: "613-183-1234",
    address: {
      street: "837 Main St",
      city: "Toronto",
      province: "ON",
      zip: "M8V4N2"
    },
    date_of_birth: new Date("1990-05-15")
  },
  {
    first_name: "William",
    last_name: "Pace",
    email: "pacew@dbs311.com",
    phone_number: "604-127-5678",
    address: {
      street: "456 Yonge St",
      city: "Vancouver",
      province: "BC",
      zip: "V6B2A8"
    },
    date_of_birth: new Date("1985-08-22")
  },
  {
    first_name: "Sophia",
    last_name: "Verring",
    email: "verrso@dbs311.com",
    phone_number: "403-838-9012",
    address: {
      street: "789 Queen St E",
      city: "Calgary",
      province: "AB",
      zip: "T2G1K3"
    },
    date_of_birth: new Date("1998-03-10")
  },
  {
    first_name: "Trueman",
    last_name: "Chen",
    email: "trueman@dbs311.com",
    phone_number: "780-555-1993",
    address: {
      street: "1010 9 Ave SW",
      city: "Edmonton",
      province: "AB",
      zip: "T2P1L6"
    },
    date_of_birth: new Date("1996-11-27")
  },
  {
    first_name: "Kristin",
    last_name: "Walak",
    email: "Kristin@dbs311.com",
    phone_number: "514-555-4092",
    address: {
      street: "1111 Rue Saint-Urbain",
      city: "Montreal",
      province: "QC",
      zip: "H2Z1Y6"
    },
    date_of_birth: new Date("2000-01-08")
  },
  {
    first_name: "Michael",
    last_name: "Nguyen",
    email: "michael@dbs311.com",
    phone_number: "416-125-3144",
    address: {
      street: "222 Bay St",
      city: "Toronto",
      province: "ON",
      zip: "M5K1J3"
    },
    date_of_birth: new Date("1982-07-03")
  },
  {
    first_name: "Olivia",
    last_name: "McCloy",
    email: "mccloy@dbs311.com",
    phone_number: "604-314-8482",
    address: {
      street: "948 Seymour St",
      city: "Vancouver",
      province: "BC",
      zip: "V6B1H4"
    },
    date_of_birth: new Date("1994-02-14")
  },
  {
    first_name: "Emma",
    last_name: "Camillo",
    email: "ecamillo@dbs311.com",
    phone_number: "514-429-4287",
    address: {
      street: "742 Main St",
      city: "Montreal",
      province: "QC",
      zip: "H3Z2Y7"
    },
    date_of_birth: new Date("1990-05-15")
  },
  {
    first_name: "Lydie",
    last_name: "Walak",
    email: "lydie@dbs311.com",
    phone_number: "905-341-3145",
    address: {
      street: "456 Queen St",
      city: "Toronto",
      province: "ON",
      zip: "M4C2V6"
    },
    date_of_birth: new Date("1982-07-23")
  },
  {
    first_name: "Olivia",
    last_name: "Lindenberg",
    email: "linden@dbs311.com",
    phone_number: "604-511-5120",
    address: {
      street: "789 Granville St",
      city: "Vancouver",
      province: "BC",
      zip: "V6Z1G9"
    },
    date_of_birth: new Date("1995-01-30")
  },
  {
    first_name: "Lucas",
    last_name: "Berkelay",
    email: "lucas@dbs311.com",
    phone_number: "416-134-1310",
    address: {
      street: "111 Yonge St",
      city: "Toronto",
      province: "ON",
      zip: "M5C9W4"
    },
    date_of_birth: new Date("1978-11-12")
  },
  {
    first_name: "Sophia",
    last_name: "Aronowicz",
    email: "aronow@dbs311.com",
    phone_number: "604-234-5699",
    address: {
      street: "222 Robson St",
      city: "Vancouver",
      province: "BC",
      zip: "V6B6A1"
    },
    date_of_birth: new Date("1986-03-25")
  },
  {
    first_name: "Aiden",
    last_name: "Bertolin",
    email: "bertolin@dbs311.com",
    phone_number: "416-332-5122",
    address: {
      street: "333 Bloor St",
      city: "Toronto",
      province: "ON",
      zip: "M5S1V6"
    },
    date_of_birth: new Date("1999-09-01")
  },
  {
    first_name: "Johanna",
    last_name: "Noads",
    email: "johanna@dbs311.com",
    phone_number: "514-351-4552",
    address: {
      street: "444 Ste-Catherine St",
      city: "Montreal",
      province: "QC",
      zip: "H3B1A6"
    },
    date_of_birth: new Date("1989-02-14")
  },
  {
    first_name: "Angel",
    last_name: "Skeat",
    email: "skeat@dbs311.com",
    phone_number: "604-555-5454",
    address: {
      street: "456 Granville St",
      city: "Vancouver",
      province: "BC",
      zip: "V6C1T1"
    },
  date_of_birth: new Date("1982-07-23")
  },
  {
    first_name: "Sophia",
    last_name: "Chen",
    email: "chenso@dbs311.com",
    phone_number: "416-555-5121",
    address: {
      street: "789 Yonge St",
      city: "Toronto",
      province: "ON",
      zip: "M4W1J7"
    },
    date_of_birth: new Date("1995-01-30")
  },
  {
    first_name: "Loni",
    last_name: "Lam",
    email: "loni@dbs311.com",
    phone_number: "905-515-1212",
    address: {
      street: "111 Bloor St",
      city: "Toronto",
      province: "ON",
      zip: "M5S1W7"
    },
    date_of_birth: new Date("1978-11-12")
  },
  {
    first_name: "Hallie",
    last_name: "Ramas",
    email: "hallie@dbs311.com",
    phone_number: "604-555-1230",
    address: {
      street: "222 Robson St",
      city: "Vancouver",
      province: "BC",
      zip: "V6B6A1"
    },
    date_of_birth: new Date("1986-03-25")
  },
  {
    first_name: "Jackson",
    last_name: "Cheng",
    email: "jcheng@dbs311.com",
    phone_number: "416-555-3455",
    address: {
      street: "333 Queen St",
      city: "Toronto",
      province: "ON",
      zip: "M5B1V1"
    },
    date_of_birth: new Date("1999-09-01")
  },
  {
    first_name: "Mia",
    last_name: "Mullenger",
    email: "mmmia@dbs311.com",
    phone_number: "514-555-8201",
    address: {
      street: "422 Ste-Catherine St",
      city: "Montreal",
      province: "QC",
      zip: "H2B4A9"
    },
    date_of_birth: new Date("1989-02-20")
  },
  {
    first_name: "Alex",
    last_name: "Blanchette",
    email: "alex@dbs311.com",
    phone_number: "416-123-7133",
    address: {
      street: "4211 Main St",
      city: "Toronto",
      province: "ON",
      zip: "M1J9B3"
    },
    date_of_birth: new Date("1987-04-17")
  },
  {
    first_name: "Olivia",
    last_name: "Willshere",
    email: "willshere@dbs311.com",
    phone_number: "604-555-1212",
    address: {
      street: "5678 Granville St",
      city: "Vancouver",
      province: "BC",
      zip: "V6Z1G9"
    },
    date_of_birth: new Date("1991-08-23")
  },
  {
    first_name: "Will",
    last_name: "Kim",
    email: "kwill@dbs311.com",
    phone_number: "905-988-1212",
    address: {
      street: "567 Yonge St",
      city: "Toronto",
      province: "ON",
      zip: "M4Y1Z3"
    },
    date_of_birth: new Date("1994-05-01")
  },
  {
    first_name: "Mia",
    last_name: "Wong",
    email: "wmia@dbs311.com",
    phone_number: "514-744-1212",
    address: {
      street: "712 St-Catherine St",
      city: "Montreal",
      province: "QC",
      zip: "H3B1A8"
    },
    date_of_birth: new Date("1983-11-08")
  },
  {
    first_name: "Noah",
    last_name: "Tran",
    email: "Tran@dbs311.com",
    phone_number: "778-345-1424",
    address: {
      street: "3200 Cambie St",
      city: "Vancouver",
      province: "BC",
      zip: "V5Z2W4"
    },
    date_of_birth: new Date("1979-02-25")
  },
  {
    first_name: "Sophia",
    last_name: "Chen",
    email: "so128chen@dbs311.com",
    phone_number: "416-599-1212",
    address: {
      street: "734 Yonge St",
      city: "Toronto",
      province: "ON",
      zip: "J7S1A5"
    },
    date_of_birth: new Date("1993-06-30")
  },
  {
    first_name: "Susette",
    last_name: "Lam",
    email: "susette@dbs311.com",
    phone_number: "905-521-1212",
    address: {
      street: "111 Bloor St",
      city: "Toronto",
      province: "ON",
      zip: "M5S1W7"
    },
    date_of_birth: new Date("1978-11-12")
  },
  {
    first_name: "Keri",
    last_name: "Wu",
    email: "keri@dbs311.com",
    phone_number: "604-499-4321",
    address: {
      street: "222 Robson St",
      city: "Vancouver",
      province: "BC",
      zip: "V6B6A1"
    },
    date_of_birth: new Date("1986-03-25")
  },
  {
    first_name: "Jackson",
    last_name: "Cheng",
    email: "jackc@dbs311.com",
    phone_number: "416-488-9876",
    address: {
      street: "313 Queen St",
      city: "Toronto",
      province: "ON",
      zip: "M5B1V9"
    },
    date_of_birth: new Date("1999-09-01")
  },
  {
    first_name: "Mia",
    last_name: "Liu",
    email: "mia817@dbs311.com",
    phone_number: "514-599-1246",
    address: {
      street: "356 Ste-Catherine St",
      city: "Montreal",
      province: "QC",
      zip: "H3B1A3"
    },
    date_of_birth: new Date("1989-02-14")
  },
  {
    first_name: "Alex",
    last_name: "Nguyen",
    email: "nalex91@dbs311.com",
    phone_number: "416-992-4567",
    address: {
      street: "1123 Main St",
      city: "Toronto",
      province: "ON",
      zip: "M5K8M2"
    },
    date_of_birth: new Date("1987-04-03")
  },
  {
    first_name: "Olivia",
    last_name: "Chang",
    email: "chang@dbs311.com",
    phone_number: "604-188-1212",
    address: {
      street: "5678 Granville St",
      city: "Vancouver",
      province: "BC",
      zip: "V6Z1G9"
    },
    date_of_birth: new Date("1991-08-23")
  },
  {
    first_name: "William",
    last_name: "Choi",
    email: "choiw@dbs311.com",
    phone_number: "905-477-1212",
    address: {
      street: "567 Yonge St",
      city: "Toronto",
      province: "ON",
      zip: "M4Y1Z3"
    },
    date_of_birth: new Date("1994-05-01")
  },
  {
    first_name: "Mia",
    last_name: "Wong",
    email: "mia171@dbs311.com",
    phone_number: "514-429-2412",
    address: {
      street: "789 St-Catherine St",
      city: "Montreal",
      province: "QC",
      zip: "H3B1A6"
    },
    date_of_birth: new Date("1983-11-08")
  },
  {
    first_name: "Noah",
    last_name: "Tran",
    email: "noah123@dbs311.com",
    phone_number: "778-135-4921",
    address: {
      street: "3211 Cambie St",
      city: "Vancouver",
      province: "BC",
      zip: "V5Z2W2"
    },
    date_of_birth: new Date("1979-07-25")
  },
  {
    first_name: "Sophia",
    last_name: "kang",
    email: "ksop@dbs311.com",
    phone_number: "416-233-948",
    address: {
      street: "2222 Yonge St",
      city: "Toronto",
      province: "ON",
      zip: "M4S1A5"
    },
    date_of_birth: new Date("1993-06-30")
  },
  {
    first_name: "Noah",
    last_name: "Tran",
    email: "trano@dbs311.com",
    phone_number: "778-139-7474",
    address: {
      street: "3213 Cambie St",
      city: "Vancouver",
      province: "BC",
      zip: "V5Z9W7"
    },
    date_of_birth: new Date("1979-02-25")
  },
  {
    first_name: "Janaya",
    last_name: "Keeley",
    email: "janaya@dbs311.com",
    phone_number: "710-249-4828",
    address: {
      street: "479 Yonge St",
      city: "Toronto",
      province: "ON",
      zip: "M7G3P1"
    },
    date_of_birth: new Date("1996-03-30")
  },
  {
    first_name: "Taffy",
    last_name: "Gowland",
    email: "taffy@dbs311.com",
    phone_number: "416-453-4282",
    address: {
      street: "1623 Yonge St",
      city: "Toronto",
      province: "ON",
      zip: "M8U1A5"
    },
    date_of_birth: new Date("1991-03-29")
  }
]);

// Inserting the books data
db.books.insertMany([
  {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic Literature",
      publisher: "Scribner",
      publish_year: 1925,
      isbn: "9780446310789",
      pages: 180,
      rating: 8.5,
      rental_fee: 0.33
  },
  {
      title: "Absalom, Absalom!",
      author: "William Faulkner",
      genre: "Novel",
      publisher: "Random House",
      publish_year: 1936,
      isbn: "1111111111111",
      pages: 384,
      rating: 8.0,
      rental_fee: 0.71
  },
  {
      title: "A Time To Kill",
      author: "John Grisham",
      genre: "Crime Fiction",
      publisher: "Wynwood Press",
      publish_year: 1989,
      isbn: "10101010101010",
      pages: 672,
      rating: 7.5,
      rental_fee: 0.80
  },
  {
      title: "The House Of Mirth",
      author: "Edith Wharton",
      genre: "Fiction",
      publisher: "Simon & Schuster",
      publish_year: 1905,
      isbn: "1234567890123",
      pages: 174,
      rating: 3.9,
      rental_fee: 0.28
  },
  {
      title: "East Of Eden",
      author: "John Steinbeck",
      genre: "Romance Novel",
      publisher: "The Viking Press",
      publish_year: 1952,
      isbn: "0987654321098",
      pages: 704,
      rating: 7.5,
      rental_fee: 0.33
  },
  {
      title: "The Sun Also Rises",
      author: "Ernest Hemingway",
      genre: "Historical Fiction",
      publisher: "Scribner",
      publish_year: 1926,
      isbn: "12345684693785",
      pages: 318,
      rating: 6.5,
      rental_fee: 0.66
  },
  {
      title: "Vile Bodies",
      author: "Evelyn Waugh",
      genre: "Novel",
      publisher: "Chapman & Hall",
      publish_year: 1930,
      isbn: "24968473859673",
      pages: 254,
      rating: 7.1,
      rental_fee: 0.46
  },
  {
      title: "A Scanner Darkly",
      author: "Philip K. Dick",
      genre: "Science Fiction",
      publisher: "Doubleday",
      publish_year: 1977,
      isbn: "9876543217643",
      pages: 220,
      rating: 5.5,
      rental_fee: 0.06
  },
  {
      title: "Moab Is My Washpot",
      author: "Stephen Fry",
      genre: "Autobiography",
      publisher: "Arrow Books",
      publish_year: 1997,
      isbn: "4565737364631",
      pages: 432,
      rating: 6.5,
      rental_fee: 0.03
  },
  {
      title: "Number The Stars",
      author: "Lois Lowry",
      genre: "Historical Fiction",
      publisher: "Scribner",
      publish_year: 1989,
      isbn: "2222222222222",
      pages: 654,
      rating: 9.5,
      rental_fee: 0.55
  },
  {
      title: "Noli Me Tangere",
      author: "Jose Rizal",
      genre: "Novel",
      publisher: "Berliner Buchdruckerei-Aktiengesellschaft",
      publish_year: 1887,
      isbn: "6748374628945",
      pages: 897,
      rating: 9.9,
      rental_fee: 0.78
  },
  {
      title: "Brave New World",
      author: "Aldous Huxley",
      genre: "Dystopian Fiction",
      publisher: "Chatto & Windus",
      publish_year: 1932,
      isbn: "8888888888888",
      pages: 531,
      rating: 4.4,
      rental_fee: 0.88
  },
  {
      title: "Rosemary And Rue",
      author: "Seanan Mcguire",
      genre: "Fantasy Fiction",
      publisher: "Astra Publishing House",
      publish_year: 2009,
      isbn: "5665654364567",
      pages: 450,
      rating: 9.5,
      rental_fee: 0.49
  },
  {
      title: "Pale Fire",
      author: "Vladimir Nabokov",
      genre: "Fiction",
      publisher: "G. P. Putnam's Sons",
      publish_year: 1962,
      isbn: "6665778969875",
      pages: 315,
      rating: 6.5,
      rental_fee: 0.99
  },
  {
      title: "Remembrance Of Things Past",
      author: "Marcel Proust",
      genre: "Modern Literature",
      publisher: "Grasset & Gallimard",
      publish_year: 1922,
      isbn: "23457857807576",
      pages: 4215,
      rating: 8.5,
      rental_fee: 0.08
  },
  {
      title: "The Fault In Our Stars",
      author: "John Green",
      genre: "Romance Novel",
      publisher: "Dutton Books",
      publish_year: 2012,
      isbn: "3456777777777",
      pages: 318,
      rating: 5.5,
      rental_fee: 0.09
  },
  {
      title: "Cold Comfort Farm",
      author: "Stella Gibbons",
      genre: "Comedy",
      publisher: "Longman",
      publish_year: 1932,
      isbn: "0000000000896",
      pages: 542,
      rating: 3.5,
      rental_fee: 0.27
  },
  {
      title: "In Cold Blood",
      author: "Truman Capote",
      genre: "True Crime",
      publisher: "Random House",
      publish_year: 1966,
      isbn: "3245676849204",
      pages: 343,
      rating: 9.5,
      rental_fee: 0.35
  },
  {
      title: "Behold, Here's Poison",
      author: "Georgette Heyer",
      genre: "Mystery",
      publisher: "Georgette Heyer",
      publish_year: 1936,
      isbn: "34567547586736",
      pages: 643,
      rating: 7.5,
      rental_fee: 0.69
  },
  {
      title: "Band Of Brothers",
      author: "Stephen E. Ambrose",
      genre: "    Non-fiction",
      publisher: "Touchstone (Simon & Schuster)",
      publish_year: 1925,
      isbn: "23456789875432",
      pages: 345,
      rating: 4.5,
      rental_fee: 0.73
  },
  {
      title: "Mortal Engines",
      author: "Philip Reeve",
      genre: "Action",
      publisher: "Scholastic",
      publish_year: 2001,
      isbn: "2222222222222",
      pages: 293,
      rating: 7.5,
      rental_fee: 0.26
  },
  {
      title: "The Dark Tower",
      author: "Stephen King",
      genre: "Western",
      publisher: "Simon & Schuster",
      publish_year: 1982,
      isbn: "5555555555555",
      pages: 400,
      rating: 8.5,
      rental_fee: 0.93
  },
  {
      title: "The Sound And The Fury",
      author: "William Faulkner",
      genre: "Novel",
      publisher: "Jonathan Cape and Harrison Smith",
      publish_year: 1929,
      isbn: "0986746375846",
      pages: 534,
      rating: 2.5,
      rental_fee: 0.11
  },
  {
      title: "No Wind Of Blame",
      author: "Georgette Heyer",
      genre: "Fiction",
      publisher: "Scribner",
      publish_year: 1925,
      isbn: "34565678654647",
      pages: 654,
      rating: 4.5,
      rental_fee: 0.23
  },
  {
      title: "I Know Why The Caged Bird Sings",
      author: "Maya Angelou",
      genre: "Autobiography",
      publisher: "Maya Angelou",
      publish_year: 1969,
      isbn: "3545456578905",
      pages: 396,
      rating: 8.5,
      rental_fee: 0.72
  },
  {
      title: "Alone On A Wide, Wide Sea",
      author: "Michael Morpurgo",
      genre: "Children's Literature",
      publisher: "HarperCollins",
      publish_year: 2006,
      isbn: "9876758421345",
      pages: 432,
      rating: 7.5,
      rental_fee: 0.81
  },
  {
      title: "Dance Dance",
      author: "Haruki Murakami",
      genre: "Classic Literature",
      publisher: "Kodansha International",
      publish_year: 1994,
      isbn: "9684575421753",
      pages: 678,
      rating: 5.5,
      rental_fee: 0.30
  },
  {
      title: "Gone With The Wind",
      author: "Margaret Mitchell",
      genre: "Historical Fiction",
      publisher: "Macmillan Publishers",
      publish_year: 1936,
      isbn: "9876037463265",
      pages: 535,
      rating: 9.5,
      rental_fee: 0.49
  },
  {
      title: "A Many-Splendoured Thing",
      author: "Han Suyin",
      genre: "Classic Literature",
      publisher: "Jonathan Cape",
      publish_year: 1955,
      isbn: "5738567483948",
      pages: 200,
      rating: 2.5,
      rental_fee: 0.29
  },
  {
      title: "As I Lay Dying",
      author: "William Faulkner",
      genre: "Christian Metal",
      publisher: "Random House Audio",
      publish_year: 2006,
      isbn: "3456865932567",
      pages: 310,
      rating: 6.5,
      rental_fee: 0.36
  },
  {
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      genre: "Novel",
      publisher: "William Heinemann Ltd.",
      publish_year: 1958,
      isbn: "2467574675789",
      pages: 469,
      rating: 4.5,
      rental_fee: 0.16
  },
  {
      title: "Far From The Madding Crowd",
      author: "Thomas Hardy",
      genre: "Fiction",
      publisher: "Cornhill Magazine",
      publish_year: 1874,
      isbn: "3578685754938",
      pages: 500,
      rating: 9.5,
      rental_fee: 0.08
  },
  {
      title: "Tender Is The Night",
      author: "F. Scott Fitzgerald",
      genre: "Tragedy",
      publisher: "Charles Scribner's Sons",
      publish_year: 1934,
      isbn: "4444444444444",
      pages: 432,
      rating: 7.7,
      rental_fee: 0.07
  },
  {
      title: "The Grapes Of Wrath",
      author: "John Steinbeck",
      genre: "Historical Fiction",
      publisher: "The Viking Press-James Lloyd",
      publish_year: 1939,
      isbn: "7777777777777",
      pages: 560,
      rating: 8.5,
      rental_fee: 0.06
  },
  {
      title: "A Passage To India",
      author: "E. M. Forster",
      genre: "Political Fiction",
      publisher: "Edward Arnold",
      publish_year: 1984,
      isbn: "5869784768796",
      pages: 430,
      rating: 1.5,
      rental_fee: 0.05
  },
  {
      title: "Bury My Heart At Wounded Knee",
      author: "Dee Brown",
      genre: "History",
      publisher: "New York: Holt, Rinehart & Winston",
      publish_year: 1970,
      isbn: "9875625364713",
      pages: 487,
      rating: 7.5,
      rental_fee: 0.25
  },
  {
      title: "A Farewell To Arms",
      author: "Ernest Hemingway",
      genre: "Novel",
      publisher: "Simon & Schuster",
      publish_year: 1929,
      isbn: "7865947364538",
      pages: 430,
      rating: 5.5,
      rental_fee: 0.25
  },
  {
      title: "His Dark Materials",
      author: "Philip Pullman",
      genre: "Mystery",
      publisher: "Scholastic",
      publish_year: 1995,
      isbn: "5768365836465",
      pages: 560,
      rating: 6.5,
      rental_fee: 0.43
  },
  {
      title: "No Country For Old Men",
      author: "Cormac Mccarthy",
      genre: "Western",
      publisher: "Alfred A. Knopf",
      publish_year: 1945,
      isbn: "6589786423547",
      pages: 310,
      rating: 9.5,
      rental_fee: 0.45
  },
  {
      title: "Nectar In A Sieve",
      author: "Kamala Markandaya",
      genre: "Domestic Fiction",
      publisher: "John Day Company",
      publish_year: 1954,
      isbn: "6799999999999",
      pages: 650,
      rating: 9.9,
      rental_fee: 0.05
  },
  {
      title: "A Thousand Splendid Suns",
      author: "Khaled Hosseini",
      genre: "Fiction",
      publisher: "Bloomsbury Publishing",
      publish_year: 1975,
      isbn: "6767676767676",
      pages: 164,
      rating: 1.5,
      rental_fee: 0.03
  },
  {
      title: "Of Mice And Men",
      author: "John Steinbeck",
      genre: "Novella",
      publisher: "Covici Friede",
      publish_year: 1937,
      isbn: "9999999999999",
      pages: 107,
      rating: 4.5,
      rental_fee: 0.04
  },
  {
      title: "This Side Of Paradise",
      author: "F. Scott Fitzgerald",
      genre: "Classic Literature",
      publisher: "Scribner",
      publish_year: 1925,
      isbn: "0707070707070",
      pages: 180,
      rating: 4.8,
      rental_fee: 0.05
  },
  {
      title: "Dying Of The Light",
      author: "George R. R. Martin",
      genre: "Novel",
      publisher: "Simon & Schuster",
      publish_year: 1977,
      isbn: "3463646576890",
      pages: 365,
      rating: 8.5,
      rental_fee: 0.09
  },
  {
      title: "The Line Of Beauty",
      author: "Alan Hollinghurst",
      genre: "Comedy",
      publisher: "Picador Books",
      publish_year: 1925,
      isbn: "5765765675676",
      pages: 400,
      rating: 5.5,
      rental_fee: 0.10
  },
  {
      title: "A Confederacy Of Dunces",
      author: "John Kennedy Toole",
      genre: "Classic literature",
      publisher: "Scribner",
      publish_year: 1980,
      isbn: "6565656598345",
      pages: 405,
      rating: 8.8,
      rental_fee: 0.11
  },
  {
      title: "The Waste Land",
      author: "T. S. Eliot",
      genre: "Modernist poetry",
      publisher: "Boni & Liveright",
      publish_year: 1922,
      isbn: "2323234545456",
      pages: 64,
      rating: 8.2,
      rental_fee: 0.99
  },
  {
      title: "Vanity Fair",
      author: "William Makepeace Thackeray",
      genre: "Novel",
      publisher: "Bradbury and Evans",
      publish_year: 1848,
      isbn: "5454548668782",
      pages: 624,
      rating: 8.5,
      rental_fee: 0.25
  },
  {
      title: "Of Human Bondage",
      author: "W. Somerset Maugham",
      genre: "Bildungsroman",
      publisher: "George H. Doran Company",
      publish_year: 1915,
      isbn: "9876543768593",
      pages: 648,
      rating: 5.5,
      rental_fee: 0.35
  },
  {
      title: "The Long Dark Tea - Time Of The Soul",
      author: "Douglas Adams",
      genre: "Comedy",
      publisher: "William Heinemann",
      publish_year: 1988,
      isbn: "98674365647321",
      pages: 300,
      rating: 8.5,
      rental_fee: 0.12
  },
]);

// Inserting the rentals data
db.rentals.insertMany([
    {
     rental_date: new Date("2023-01-14"),
     return_date: new Date("2023-01-28"),
     actual_return_date: new Date("2023-02-09"),
     book_isbn: "9780743273565",
     patron_email: "anna@dbs311.com"
    },
    {
     rental_date: new Date("2023-02-10"),
     return_date: new Date("2022-02-24"),
     actual_return_date: new Date("2023-02-28"),
     book_isbn: "9780446310789",
     patron_email: "olha@dbs311.com" },
    {
     rental_date: new Date("2022-03-05"),
     return_date: new Date("2022-03-19"),
     actual_return_date: new Date("2023-03-28"),
     book_isbn: "9780446310789",
     patron_email: "arina@dbs311.com" },
    {
     rental_date: new Date("2022-04-09"),
     return_date: new Date("2022-03-23"),
     actual_return_date: new Date("2023-03-24"),
     book_isbn: "9780451524935",
     patron_email: "eunseo@dbs311.com"},
    {
     rental_date: new Date("2023-02-10"),
     return_date: new Date("2023-02-24"),
     actual_return_date: new Date("2023-02-25"),
     book_isbn: "9780743273565",
     patron_email: "lisa@dbs311.com" },

    {
     rental_date: new Date("2023-02-10"),
     return_date: new Date("2023-02-24"),
     actual_return_date: new Date("2023-02-25"),
     book_isbn: "1111111111111",
     patron_email: "david@dbs311.com"
    },
    {
     rental_date: new Date("2023-01-12"),
     return_date: new Date("2023-01-20"),
     actual_return_date: new Date("2023-01-25"),
     book_isbn: "10101010101010",
     patron_email: "sophia5@dbs311.com"
    },
    {
     rental_date: new Date("2023-01-16"),
     return_date: new Date("2023-01-30"),
     actual_return_date: new Date("2023-01-30"),
     book_isbn: "1234567890123",
     patron_email: "thomasine@dbs311.com"
    },
    {
     rental_date: new Date("2023-05-12"),
     return_date: new Date("2023-05-26"),
     actual_return_date: new Date("2023-05-28"),
     book_isbn: "0987654321098",
     patron_email: "ava@dbs311.com"
    },
    {
     rental_date: new Date("2023-06-01"),
     return_date: new Date("2023-06-15"),
     actual_return_date: new Date("2023-06-18"),
     book_isbn: "12345684693785",
     patron_email: "jacob@dbs311.com"
    },
    {
     rental_date: new Date("2023-07-01"),
     return_date: new Date("2023-07-15"),
     actual_return_date: new Date("2023-07-16"),
     book_isbn: "24968473859673",
     patron_email: "samantha@dbs311.com"
    },
    {
     rental_date: new Date("2023-08-05"),
     return_date: new Date("2023-08-19"),
     actual_return_date: new Date("2023-08-21"),
     book_isbn: "9876543217643",
     patron_email: "ryan@dbs311.com"
    },
    {
     rental_date: new Date("2023-09-01"),
     return_date: new Date("2023-09-15"),
     actual_return_date: new Date("2023-09-17"),
     book_isbn: "4565737364631",
     patron_email: "michelle@dbs311.com"
    },
    {
     rental_date: new Date("2023-01-11"),
     return_date: new Date("2023-01-12"),
     actual_return_date: new Date("2023-01-26"),
     book_isbn: "2222222222222",
     patron_email: "andrew@dbs311.com"
    },
    {
     rental_date: new Date("2023-07-12"),
     return_date: new Date("2023-07-24"),
     actual_return_date: new Date("2023-07-26"),
     book_isbn: "6748374628945",
     patron_email: "emily@dbs311.com"
    },
    {
     rental_date: new Date("2023-12-07"),
     return_date: new Date("2023-12-31"),
     actual_return_date: new Date("2023-12-31"),
     book_isbn: "8888888888888",
     patron_email: "blaire@dbs311.com"
    },
    {
     rental_date: new Date("2023-10-02"),
     return_date: new Date("2023-10-16"),
     actual_return_date: new Date("2023-10-18"),
     book_isbn: "5665654364567",
     patron_email: "vernor@dbs311.com"
    },
    {
     rental_date: new Date("2023-04-02"),
     return_date: new Date("2023-04-16"),
     actual_return_date: new Date("2023-04-20"),
     book_isbn: "6665778969875",
     patron_email: "avery@dbs311.com"
    },
    {
     rental_date: new Date("2023-05-10"),
     return_date: new Date("2023-05-24"),
     actual_return_date: new Date("2023-05-26"),
     book_isbn: "23457857807576",
     patron_email: "alexandra@dbs311.com"
    },
    {
     rental_date: new Date("2023-06-07"),
     return_date: new Date("2023-06-21"),
     actual_return_date: new Date("2023-06-23"),
     book_isbn: "3456777777777",
     patron_email: "mason@dbs311.com"
    },
    {
     rental_date: new Date("2023-07-03"),
     return_date: new Date("2023-07-17"),
     actual_return_date: new Date("2023-07-19"),
     book_isbn: "0000000000896",
     patron_email: "sophia123@dbs311.com"
    },
    {
     rental_date: new Date("2023-08-05"),
     return_date: new Date("2023-08-19"),
     actual_return_date: new Date("2023-08-20"),
     book_isbn: "3245676849204",
     patron_email: "oliver321@dbs311.com"
    },
    {
     rental_date: new Date("2023-09-10"),
     return_date: new Date("2023-09-24"),
     actual_return_date: new Date("2023-09-25"),
     book_isbn: "34567547586736",
     patron_email: "tessy@dbs311.com"
    },
    {
     rental_date: new Date("2023-10-07"),
     return_date: new Date("2023-10-28"),
     actual_return_date: new Date("2023-10-29"),
     book_isbn: "23456789875432",
     patron_email: "emma1@dbs311.com"
    },
    {
     rental_date: new Date("2023-03-15"),
     return_date: new Date("2023-04-11"),
     actual_return_date: new Date("2023-04-15"),
     book_isbn: "2222222222222",
     patron_email: "oliver123@dbs311.com"
    },
    {
     rental_date: new Date("2023-03-28"),
     return_date: new Date("2023-04-02"),
     actual_return_date: new Date("2023-04-05"),
     book_isbn: "5555555555555",
     patron_email: "sophia123@dbs311.com"
    },
    {
     rental_date: new Date("2023-03-15"),
     return_date: new Date("2023-03-29"),
     actual_return_date: new Date("2023-03-29"),
     book_isbn: "0986746375846",
     patron_email: "aiden@dbs311.com"
    },
    {
     rental_date: new Date("2023-02-04"),
     return_date: new Date("2023-02-14"),
     actual_return_date: new Date("2023-02-16"),
     book_isbn: "34565678654647",
     patron_email: "jay@dbs311.com"
    },
    {
     rental_date: new Date("2023-01-31"),
     return_date: new Date("2023-02-04"),
     actual_return_date: new Date("2023-02-10"),
     book_isbn: "3545456578905",
     patron_email: "john@dbs311.com"
    },
    {
     rental_date: new Date("2023-01-16"),
     return_date: new Date("2023-03-11"),
     actual_return_date: new Date("2023-02-25"),
     book_isbn: "9876758421345",
     patron_email: "jane@dbs311.com"
    },
    {
     rental_date: new Date("2023-02-24"),
     return_date: new Date("2023-02-27"),
     actual_return_date: new Date("2023-02-28"),
     book_isbn: "9684575421753",
     patron_email: "mike@dbs311.com"
    },
    {
     rental_date: new Date("2023-01-27"),
     return_date: new Date("2023-01-30"),
     actual_return_date: new Date("2023-01-30"),
     book_isbn: "9876037463265",
     patron_email: "dorrie@dbs311.com"
    },
    {
     rental_date: new Date("2023-01-17"),
     return_date: new Date("2023-01-27"),
     actual_return_date: new Date("2023-01-28"),
     book_isbn: "5738567483948",
     patron_email: "avery@dbs311.com"
    },
    {
     rental_date: new Date("2023-03-09"),
     return_date: new Date("2023-03-14"),
     actual_return_date: new Date("2023-03-15"),
     book_isbn: "3456865932567",
     patron_email: "olivia@dbs311.com"
    },
    {
     rental_date: new Date("2023-01-13"),
     return_date: new Date("2023-01-29"),
     actual_return_date: new Date("2023-01-30"),
     book_isbn: "2467574675789",
     patron_email: "emma1@dbs311.com"
    },
    {
     rental_date: new Date("2023-03-07"),
     return_date: new Date("2023-04-07"),
     actual_return_date: new Date("2023-04-08"),
     book_isbn: "3578685754938",
     patron_email: "adam@dbs311.com"
    },
    {
     rental_date: new Date("2023-03-16"),
     return_date: new Date("2023-03-25"),
     actual_return_date: new Date("2023-03-27"),
     book_isbn: "4444444444444",
     patron_email: "lisa@dbs311.com"
    },
    {
     rental_date: new Date("2023-03-11"),
     return_date: new Date("2023-03-27"),
     actual_return_date: new Date("2023-03-28"),
     book_isbn: "7777777777777",
     patron_email: "emily@dbs311.com"
    },
    {
     rental_date: new Date("2023-01-29"),
     return_date: new Date("2023-03-29"),
     actual_return_date: new Date("2023-03-30"),
     book_isbn: "5869784768796",
     patron_email: "jenny@dbs311.com"
    },
    {
     rental_date: new Date("2023-03-07"),
     return_date: new Date("2023-03-22"),
     actual_return_date: new Date("2023-03-25"),
     book_isbn: "9875625364713",
     patron_email: "mike123@dbs311.com"
    },
    {
     rental_date: new Date("2023-02-07"),
     return_date: new Date("2023-02-28"),
     actual_return_date: new Date("2023-02-29"),
     book_isbn: "7865947364538",
     patron_email: "emily123@dbs311.com"
    },
    {
     rental_date: new Date("2023-03-10"),
     return_date: new Date("2023-03-29"),
     actual_return_date: new Date("2023-03-30"),
     book_isbn: "5768365836465",
     patron_email: "kevin@dbs311.com"
    },
    {
     rental_date: new Date("2023-01-27"),
     return_date: new Date("2023-01-31"),
     actual_return_date: new Date("2023-01-31"),
     book_isbn: "6589786423547",
     patron_email: "karen@dbs311.com"
    },
    {
     rental_date: new Date("2023-01-11"),
     return_date: new Date("2023-01-19"),
     actual_return_date: new Date("2023-01-25"),
     book_isbn: "6799999999999",
     patron_email: "jennifer@dbs311.com"
    },
    {
     rental_date: new Date("2023-01-19"),
     return_date: new Date("2023-03-24"),
     actual_return_date: new Date("2023-03-25"),
     book_isbn: "6767676767676",
     patron_email: "mikol@dbs311.com"
    },
    {
     rental_date: new Date("2023-01-05"),
     return_date: new Date("2023-02-28"),
     actual_return_date: new Date("2023-02-29"),
     book_isbn: "9999999999999",
     patron_email: "cynthia@dbs311.com"
    },
    {
     rental_date: new Date("2023-02-12"),
     return_date: new Date("2023-02-21"),
     actual_return_date: new Date("2023-02-23"),
     book_isbn: "0707070707070",
     patron_email: "janette@dbs311.com"
    },
    {
     rental_date: new Date("2023-03-18"),
     return_date: new Date("2023-04-09"),
     actual_return_date: new Date("2023-04-11"),
     book_isbn: "3463646576890",
     patron_email: "jennifer123@dbs311.com"
    },
    {
     rental_date: new Date("2023-02-16"),
     return_date: new Date("2023-02-24"),
     actual_return_date: new Date("2023-02-25"),
     book_isbn: "5765765675676",
     patron_email: "kevin@dbs311.com"
    },
    {
     rental_date: new Date("2023-01-27"),
     return_date: new Date("2023-03-27"),
     actual_return_date: new Date("2023-03-29"),
     book_isbn: "6565656598345",
     patron_email: "janava@dbs311.com"
    },
    {
     rental_date: new Date("2023-01-25"),
     return_date: new Date("2023-02-19"),
     actual_return_date: new Date("2023-02-22"),
     book_isbn: "2323234545456",
     patron_email: "nathan@dbs311.com"
    },
    {
     rental_date: new Date("2023-04-03"),
     return_date: new Date("2023-04-07"),
     actual_return_date: new Date("2023-04-11"),
     book_isbn: "5454548668782",
     patron_email: "noads@dbs311.com"
    },
    {
     rental_date: new Date("2023-04-02"),
     return_date: new Date("2023-04-10"),
     actual_return_date: new Date("2023-04-15"),
     book_isbn: "9876543768593",
     patron_email: "sophie@dbs311.com"
    },
    {
     rental_date: new Date("2023-10-10"),
     return_date: new Date("2023-10-22"),
     actual_return_date: new Date("2023-10-25"),
     book_isbn: "98674365647321",
     patron_email: "evyn@dbs311.com"
    },
  ]);

console.log("The data insertion successfully completed.")
console.log("------------------------------------------"); 
console.log("Setup completed successfully.");
