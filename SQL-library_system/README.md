## Project Overview

Libraries need to keep track of what books they have and who has borrowed them, therefore, this database 
would be helpful for users who are looking to check the availability and variety of libraries. In addition to that, 
our application will help to make the experience more personalized with the simple implementation of the preferece
adjustment.


## ERD Diagram

<img width="530" alt="image" src="https://github.com/arilloid/library_database/assets/105298302/55821944-b808-4e84-9fcd-e312feaa555a">

## Data dictionary

</br>

#### Table : Author

| Column    | Data Type | Size, precision | PK/FK | Required | Sample Data |
|-----------|-----------|-----------------|-------|----------|-------------|
| AuthorID  | VARCHAR   | 6               | PK    | Y        | "A1"        |
| Firtsname | VARCHAR   | 25              |       | Y        | "Sylvia"    |
| Lastname  | VARCHAR   | 25              |       | Y        | "Plath"     |

</br>

#### Table : Genre

| Column  | Data Type | Size, precision | Default | PK/FK | Required | Sample Data       |
|---------|-----------|-----------------|---------|-------|----------|-------------------|
| GenreID | VARCHAR   | 6               | "G0"    | PK    | Y        | "G1"              |
| Genre   | VARCHAR   | 25              |         |       | Y        | "Modernism Novel" |

</br>

#### Table : User Details

| Column       | Data Type | Size, precision | PK/FK | Required | Range | Sample Data          | Notes                                              |
|--------------|-----------|-----------------|-------|----------|-------|----------------------|----------------------------------------------------|
| UserID       | VARCHAR   | 6               | PK    | Y        |       | "US11"               |                                                    |
| Email        | VARCHAR   | 25              |       | Y        |       | "example@mail.com"   | LIKE to check with wildcards and UNIQUE constraint |
| Username     | VARCHAR   | 25              |       | Y        |       | "exampleuser"        |                                                    |
| userPassword | VARCHAR   | 20              |       | Y        |       | "Examplepassword123" |                                                    |
| Age          | INTEGER   |                 |       | Y        | 12-99 |                      | CheckRange constraint                              |

</br>

#### Table : Book Details 

| Column        | Data Type | Size, precision | Default | PK/FK | Required | Range | Sample Data       | Notes                 |
|---------------|-----------|-----------------|---------|-------|----------|-------|-------------------|-----------------------|
| ISBN          | VARCHAR   | 6               |         | PK    | Y        |       | "AB21"            |                       |
| BookTitle     | VARCHAR   | 40              |         |       | Y        |       | "The Wicked King" |                       |
| AuthorID      | VARCHAR   | 25              |         | FK    | Y        |       | "A1"              |                       |
| GenreID       | VARCHAR   | 6               | "G0"    | FK    | Y        |       | "G1"              |                       |
| YearPublished | INTEGER   |                 |         |       | Y        |       | 2000              |                       |
| Rating        | DECIMAL   | 2,1             |         |       | Y        | 0-5   | 4.2               | CheckRange Constraint |
| PageCount     | INTEGER   |                 |         |       | Y        |       | 256               |                       |

</br>

#### Table: Book Items

| Column | Data Type | Size, precision | PK/FK | Required | Sample Data |
|--------|-----------|-----------------|-------|----------|-------------|
| BookID | VARCHAR   | 6               | PK    | Y        | "N21345"    |
| ISBN   | VARCHAR   | 6               | FK    | Y        | "AB21"      |

</br>

#### Table: Inventory

| Column           | Data Type | Size, precision | PK/FK | Required | Range | Sample Data | Notes                 |
|------------------|-----------|-----------------|-------|----------|-------|-------------|-----------------------|
| ISBN             | VARCHAR   | 6               | PK    | Y        |       | "AB21"      |                       |
| InitialInventory | INTEGER   |                 |       | Y        | 1-100 | 20          | CheckRange Constraint |

</br>

#### Table: Preferences

| Column  | Data Type | Size, precision | Default | PK/FK | Required | Sample Data | Notes                 |
|---------|-----------|-----------------|---------|-------|----------|-------------|-----------------------|
| UserID  | VARCHAR   | 6               |         | FK    | Y        | "US11"      | Comp Key with GenreID |
| GenreID | VARCHAR   | 6               | "G0"    | FK    | N        | "G11"       | Comp Key with UserID  |

</br>

#### Table: Books Borrowed

| Column       | Data Type | Size, precision | PK/FK | Required | Sample Data |
|--------------|-----------|-----------------|-------|----------|-------------|
| BorrowID     | VARCHAR   | 6               | PK    | Y        | "AB21"      |
| UserID       | VARCHAR   | 6               | FK    | Y        | "US11"      |
| BookID       | VARCHAR   | 6               | FK    | Y        | "N12345"    |
| DateBorrowed | DATE      |                 |       | Y        | 1/10/2022   |
| DateReturned | DATE      |                 |       | N        | 11/10/2022  |

## The Views for the Business Reports

- User Preference View:
>	This view lists all the preferences/genres available in the library. It counts how many users prefer each genre. This will help the library understand which preference/genre is the most popular among users. Using this data, decisions on what books to carry, and how many copies should be ordered can be made. 

![image](https://github.com/arilloid/library_database/assets/105298302/65eb27ad-b481-42fb-8f08-c0968ca9138d)

- Preference by Age View
> This view lists all the genres/preferences the library carries and shows what each age group prefers in terms of genre. This view will help the library understand what each age group prefers. This view will also show which age group uses the library most frequently and find out the reading habits of each age demographic. This can help our library give relevant recommendations to each age group of users.

![image](https://github.com/arilloid/library_database/assets/105298302/806bc7a2-c9f5-4b72-b581-15c356aadfbe)

- Overdue Books
> This view will allow the library to track what books are overdue, how long they are overdue, and what user has borrowed from what book.

![image](https://github.com/arilloid/library_database/assets/105298302/465a66e3-d031-477d-b7d8-8a5c40dc796f)

- Stock Control View
> Helps the library know what number of books were initially ordered, how many there are currently in the system, how many have been borrowed and how many are in the library.

![image](https://github.com/arilloid/library_database/assets/105298302/1676c6cd-b3ca-465b-9140-26a2ebd2e116)




