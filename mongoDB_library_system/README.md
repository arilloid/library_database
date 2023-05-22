# Library Database System

Maintaining a library can be daunting, as there is a constant need to keep the patron and book records relevant. 
A MongoDB-based management system can allow us to implement book-tracking functionality in an efficient and optimized way. 

###  > Organization of the collections in MongoDB

| Collection name | Stored information                                                                           |
|-----------------|----------------------------------------------------------------------------------------------|
| Books           | title, author, genre, publisher, publish year, ISBN, number of pages, rating, the rental fee |
| Patrons         | full name, email address, phone number, address, and date of birth                           |
| Rentals         | the dates of borrowing and repayment and overdue payments                                    |

###  > Requirements and rules

To relate these collections, the rental information includes both: the book's ISBN and the patron's email address, allowing 
for easy querying and joining of the data between collections. It is possible to obtain information such as: which books have 
been rented by a specific patron or which patrons have rented a particular book. The rental fee is also present in both the rentals 
and books collections, indicating the amount paid for renting a particular book.

</br>
</br>
</br>

# Instructions for setting up the database with the use of the scripts.

### Running MongoDB:

For executing the scripts, you have to run the MongoDB engine at the background on your machine.
It can be done by going to the directory that contains the MongoDB executable files  and running them using the command prompt. 
(It is important to make sure that the engine starts without any errors.)

### > cd C:\Program Files\MongoDB\Server\6.0\bin

### > mongod

![image](https://github.com/arilloid/library_database/assets/105298302/99f06105-e5e6-4358-8dfc-5c9b65a51c43)

### Running mongosh:
After starting the MongoDB engine, you are required to run a CLI shell for MongoDB (e. g. mongosh) to connect to the database engine 
and be able to manage the databases and collections and execute database operations using the command-line interface.
 
 ![image](https://github.com/arilloid/library_database/assets/105298302/d69cd37b-8a76-4776-9c8f-713512f62d3a)
 
### Executing the scripts:

To execute the scripts using mongosh you will have to use the load() method providing the path to the script you are willing to execute 
as an argument. You can provide a path that is relative to the current working  directory, or the absolute path to the JSON file. 
(This is applicable to every script in the project.) 

### Important ! : 
### Before executing the scripts you should make sure to issue the following command:
### > use library 

This is needed to make sure that all of the following operations are perfomred on the “library” database.
 
 ![image](https://github.com/arilloid/library_database/assets/105298302/07e487d5-761d-4d82-9c75-9e277a349550)

In the image above, we can see how the setup script is executed using the “load()” method.

### > load('C:/Users/Arina Kolodeznikova/Desktop/Scripts/setup.js'); 

'C:/Users/Arina Kolodeznikova/Desktop/Scripts/setup.js' – is an absolute path to the “setup.js” file that contains the script 
for creating the required collection and inserting the sample data. 

(“true” after the command’s output denotes that the script was run successfully.)

The order of execution of the scripts is critical because the database needs to be properly set up in order to perform queries, 
aggregations, and CRUD commands on it.

Running the “setup.js” script will help you to create the library database, with all of the necessary collections and sample data inserted, 
on your machine. The “queries.js” is useful for testing the queries and aggregations. The “updates.js” will help you to test the provided 
update commands.

### The created database on MongoDB Compass: 
 
 ![image](https://github.com/arilloid/library_database/assets/105298302/bf2a518a-6d78-448b-a615-5fe96dfd6fdc)
 
### The result of executing the “queries.js” file:
 
 ![image](https://github.com/arilloid/library_database/assets/105298302/318f914b-ecbc-4829-a621-db1590f70668)

### The output of the “update.js” script:
 
![image](https://github.com/arilloid/library_database/assets/105298302/56a0c4b7-b2af-47b4-bb3f-7e117fa35f27)



