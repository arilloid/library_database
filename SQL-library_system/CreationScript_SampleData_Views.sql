/*DROP TABLE books_borrowed;
DROP TABLE preferences;
DROP TABLE book_items;
DROP TABLE inventory;
DROP TABLE book_details;
DROP TABLE user_details;
DROP TABLE genre;
DROP TABLE author;

DROP VIEW vwAgeGroupPreferences;
DROP VIEW vwGenreChart;
DROP VIEW vwOverdueBooks;
DROP VIEW vwStockControl;*/

PROMPT '*******  Starting Table Creation';

-- AUTHOR Table Structure (DDL)
PROMPT '******* Create author table';
CREATE TABLE author (
authorID VARCHAR(6) NOT NULL PRIMARY KEY,
firstname VARCHAR(25) NOT NULL,
lastname VARCHAR(25) NOT NULL
);
-- Data for the table 'author' (DML)
INSERT ALL
INTO author VALUES ('A1','Sylvia', 'Plath')
INTO author VALUES ('A2','Fydoor', 'Dostoevsky')
INTO author VALUES ('A3','Casteel', 'Joan')
INTO author VALUES ('A4','Virginia', 'Wolf')
INTO author VALUES ('A5','Edgar', 'Allan Poe')
INTO author VALUES ('A6','Sally', 'Rooney')
INTO author VALUES ('A7','George', 'Orwell')
INTO author VALUES ('A8','Leo', 'Tolstoy')
INTO author VALUES ('A9','Milan', 'Kundera')
INTO author VALUES ('A10','Kieron', 'Gillen')
INTO author VALUES ('A11','Neil', 'Gaiman')
INTO author VALUES ('A12','Holly', 'Black')
INTO author VALUES ('A13','Charles', 'Soule')
INTO author VALUES ('A14','Leigh', 'Bardugo')
INTO author VALUES ('A15','Madeline', 'Miller')
INTO author VALUES ('A16','Suzanne', 'Collins')
SELECT * FROM dual;
PROMPT '******* Author data inserted';


-- GENRE Table Structure (DDL)
CREATE TABLE genre (
genreID VARCHAR(6) DEFAULT 'G0' NOT NULL PRIMARY KEY,
genre VARCHAR(25) NOT NULL
);
-- Data for the table 'genre' (DML)
INSERT ALL
INTO genre VALUES ('G0','none')
INTO genre VALUES ('G1','Novel')
INTO genre VALUES ('G2','Literary Fiction ')
INTO genre VALUES ('G3','Non-Fiction')
INTO genre VALUES ('G4','Modernism Novel')
INTO genre VALUES ('G5','Gothic Fiction')
INTO genre VALUES ('G6','Young Adult')
INTO genre VALUES ('G7','Science Fiction')
INTO genre VALUES ('G8','Comic')
INTO genre VALUES ('G9','Young Adult')
INTO genre VALUES ('G10','Dystopian Novel')
INTO genre VALUES ('G11','Detective Fiction')
SELECT * FROM dual;
PROMPT '******* Genre data inserted';


-- USER_DETAILS Table Structure (DDL)
CREATE TABLE user_details (
userID VARCHAR(6) NOT NULL PRIMARY KEY,
email VARCHAR(25) NOT NULL,
username VARCHAR(25) NOT NULL,
userPassword VARCHAR(20) NOT NULL,
age INT NOT NULL,
CONSTRAINT age_chk CHECK (age BETWEEN 12 AND 99),
CONSTRAINT email_chk CHECK (email LIKE '%@%'),
CONSTRAINT uq_email UNIQUE (email)
);
-- Data for the table 'user_details' (DML)
INSERT ALL
INTO user_details VALUES ('US11','landon@mail.com', 'landonreads', 'landon123', 17)
INTO user_details VALUES ('US12','sky@mail.com', 'sky', 'skysky12', 18)
INTO user_details VALUES ('US13','jackson@mail.com', 'jacksbooks', 'jacks211', 19)
INTO user_details VALUES ('US14','luke@mail.com', 'luke', 'lukesaber21', 17)
INTO user_details VALUES ('US15','rob@mail.com', 'robertpat', 'robrobrob', 20)
INTO user_details VALUES ('US16','alina@mail.com', 'alinaaa', 'alina313', 23)
INTO user_details VALUES ('US17','rey@mail.com', 'reysky', 'reyforce666', 44)
INTO user_details VALUES ('US18','ewan@mail.com', 'reader1', 'ewanslibrary', 81)
INTO user_details VALUES ('US19','hayden@mail.com', 'hayden', 'haydenhatesreading', 89)
INTO user_details VALUES ('US20','jonah@mail.com', 'booksforjonah', 'books45', 56)
INTO user_details VALUES ('US21','loren@mail.com', 'lorenspastime', 'lorenabigail123', 55)
INTO user_details VALUES ('US22','bruce@mail.com', 'brucew', 'joker666', 29)
INTO user_details VALUES ('US23','selina@mail.com', 'selinalovescats', 'selselina990', 30)
INTO user_details VALUES ('US24','mike@mail.com', 'mikereads', 'qwerty019293', 19)
INTO user_details VALUES ('US25','noah@mail.com', 'noahBook', 'reading345', 19)
INTO user_details VALUES ('US26','justice@mail.com', 'justicemustread', 'justice898', 25)
INTO user_details VALUES ('US27','riles@mail.com', 'rilesriles', 'yuip213', 67)
INTO user_details VALUES ('US28','cardan@mail.com', 'cardanlovesbooks', 'k1#09ng', 65)
INTO user_details VALUES ('US29','jude@mail.com', 'judeD', 'password', 28)
SELECT * FROM dual;
PROMPT '******* User_details data inserted';


-- BOOK_DETAILS Table Structure (DDL)
CREATE TABLE book_details (
ISBN VARCHAR(6) NOT NULL PRIMARY KEY,
bookTitle VARCHAR(40) NOT NULL,
authorID VARCHAR(25) NOT NULL,
genreID VARCHAR(6) DEFAULT 'G0' NOT NULL,
yearPublished INT NOT NULL,
rating DECIMAL(2,1) NOT NULL,
pageCount INT NOT NULL,
CONSTRAINT authorID_fk FOREIGN KEY(authorID) REFERENCES author(authorID),
CONSTRAINT ratings_chk CHECK (rating BETWEEN 0 AND 5.0),
CONSTRAINT genreID_bd_fk FOREIGN KEY(genreID) REFERENCES genre(genreID)
);
-- Data for the table 'book_details' (DML)
INSERT ALL
INTO book_details VALUES ('AB21','The Bell Jar', 'A1', 'G1', 1963, 4.4, 244)
INTO book_details VALUES ('AB22','Crime and Punishment', 'A2', 'G2', 1866, 4.2, 448)
INTO book_details VALUES ('AB23','Oracle 12c: SQL', 'A3', 'G3', 2015, 4.3, 608)
INTO book_details VALUES ('AB24','To the Lighthouse', 'A4', 'G4', 1927, 3.8, 224)
INTO book_details VALUES ('AB25','The Black Cat', 'A5', 'G5', 1843, 4.0, 32)
INTO book_details VALUES ('AB26','Normal People', 'A6', 'G6', 2018, 3.8, 266)
INTO book_details VALUES ('AB27','Nineteen Eighty-Four', 'A7', 'G7', 1949, 4.2, 328)
INTO book_details VALUES ('AB28','War and Peace', 'A8', 'G1', 1867, 4.1, 1225)
INTO book_details VALUES ('AB29','The Unbearable Lightness Of Being', 'A9', 'G4', 1984, 4.1, 393)
INTO book_details VALUES ('AB30','Star Wars: Darth Vader Vol. 1: Vader', 'A10', 'G8', 2015, 4.2, 160)
INTO book_details VALUES ('AB31','The Sandman: Book One', 'A11', 'G8', 2020, 4.7, 560)
INTO book_details VALUES ('AB32','The Cruel Prince', 'A12', 'G6', 2018, 4.9, 416)
INTO book_details VALUES ('AB33','Star Wars: Obi-Wan and Anakin', 'A13', 'G8', 2016, 3.7, 120)
INTO book_details VALUES ('AB34','Six of Crows', 'A14', 'G9', 2015, 4.5, 496)
INTO book_details VALUES ('AB35','The Queen of Nothing', 'A12', 'G9', 2019, 4.3, 336)
INTO book_details VALUES ('AB36','The Wicked King', 'A12', 'G9', 2019, 4.7, 368)
INTO book_details VALUES ('AB37','The Song of Achilles', 'A15', 'G1', 2011, 4.4, 416)
INTO book_details VALUES ('AB38','The Hunger Games', 'A16', 'G10', 2008, 4.3, 374)
INTO book_details VALUES ('AB39','Catching Fire', 'A16', 'G10', 2009, 4.2, 400)
INTO book_details VALUES ('AB40','Mockingjay', 'A16', 'G10', 2010, 4.1, 390)
SELECT * FROM dual;
PROMPT '******* Book_details data inserted';


-- BOOK_ITEMS Table Structure (DDL)
CREATE TABLE book_items (
bookID VARCHAR(6)NOT NULL PRIMARY KEY,
ISBN VARCHAR(6) NOT NULL,
CONSTRAINT ISBN_bookItems_fk FOREIGN KEY(ISBN) REFERENCES book_details (ISBN)
);
-- Data for the table 'book_items' (DML)
INSERT ALL 
 INTO book_items VALUES ('N12345', 'AB21')
 INTO book_items VALUES ('N12346', 'AB21')
 INTO book_items VALUES ('N12347', 'AB21')
 INTO book_items VALUES ('N12348', 'AB22')
 INTO book_items VALUES ('N12349', 'AB22')
 INTO book_items VALUES ('N12350', 'AB23')
 INTO book_items VALUES ('N12351', 'AB24')
 INTO book_items VALUES ('N12352', 'AB25')
 INTO book_items VALUES ('N12353', 'AB26')
 INTO book_items VALUES ('N12354', 'AB26')
 INTO book_items VALUES ('N12355', 'AB26')
 INTO book_items VALUES ('N12356', 'AB26')
 INTO book_items VALUES ('N12357', 'AB27')
 INTO book_items VALUES ('N12358', 'AB35')
 INTO book_items VALUES ('N12359', 'AB35')
 INTO book_items VALUES ('N12360', 'AB36')
 INTO book_items VALUES ('N12361', 'AB37')
 INTO book_items VALUES ('N12362', 'AB38')
 INTO book_items VALUES ('N12363', 'AB40')
 INTO book_items VALUES ('N12364', 'AB40')
 INTO book_items VALUES ('N12365', 'AB40')
 INTO book_items VALUES ('N12366', 'AB40')
 INTO book_items VALUES ('N12367', 'AB40')
 INTO book_items VALUES ('N12368', 'AB40')
 INTO book_items VALUES ('N12369', 'AB28')
 INTO book_items VALUES ('N12370', 'AB28')
 INTO book_items VALUES ('N12371', 'AB28')
 INTO book_items VALUES ('N12372', 'AB29')
 INTO book_items VALUES ('N12373', 'AB29')
 INTO book_items VALUES ('N12374', 'AB29')
 INTO book_items VALUES ('N12375', 'AB29')
 INTO book_items VALUES ('N12376', 'AB29')
 INTO book_items VALUES ('N12377', 'AB29')
 INTO book_items VALUES ('N12378', 'AB29')
 INTO book_items VALUES ('N12379', 'AB30')
 INTO book_items VALUES ('N12380', 'AB30')
 INTO book_items VALUES ('N12381', 'AB30')
 INTO book_items VALUES ('N12382', 'AB30')
 INTO book_items VALUES ('N12383', 'AB30')
 INTO book_items VALUES ('N12384', 'AB30')
 INTO book_items VALUES ('N12385', 'AB30')
 INTO book_items VALUES ('N12386', 'AB30')
 INTO book_items VALUES ('N12387', 'AB31')
 INTO book_items VALUES ('N12388', 'AB31')
 INTO book_items VALUES ('N12389', 'AB31')
 INTO book_items VALUES ('N12390', 'AB31')
 INTO book_items VALUES ('N12391', 'AB31')
 INTO book_items VALUES ('N12392', 'AB32')
 INTO book_items VALUES ('N12393', 'AB32')
 INTO book_items VALUES ('N12394', 'AB32')
 INTO book_items VALUES ('N12395', 'AB32')
 INTO book_items VALUES ('N12396', 'AB32')
 INTO book_items VALUES ('N12397', 'AB32')
 INTO book_items VALUES ('N12398', 'AB32')
 INTO book_items VALUES ('N12399', 'AB33')
 INTO book_items VALUES ('N12400', 'AB33')
 INTO book_items VALUES ('N12401', 'AB33')
 INTO book_items VALUES ('N12402', 'AB33')
 INTO book_items VALUES ('N12403', 'AB33')
 INTO book_items VALUES ('N12404', 'AB33')
 INTO book_items VALUES ('N12405', 'AB33')
 INTO book_items VALUES ('N12406', 'AB34')
 INTO book_items VALUES ('N12407', 'AB34')
 INTO book_items VALUES ('N12408', 'AB34')
 INTO book_items VALUES ('N12409', 'AB34')
 INTO book_items VALUES ('N12410', 'AB34')
 INTO book_items VALUES ('N12411', 'AB34')
 INTO book_items VALUES ('N12412', 'AB21')
 INTO book_items VALUES ('N12413', 'AB21')
 INTO book_items VALUES ('N12414', 'AB21')
 INTO book_items VALUES ('N12415', 'AB21')
 INTO book_items VALUES ('N12420', 'AB21')
 INTO book_items VALUES ('N12421', 'AB21')
 INTO book_items VALUES ('N12422', 'AB21')
 INTO book_items VALUES ('N12423', 'AB21')
 INTO book_items VALUES ('N12424', 'AB21')
 INTO book_items VALUES ('N12426', 'AB22')
 INTO book_items VALUES ('N12427', 'AB22')
 INTO book_items VALUES ('N12429', 'AB22')
 INTO book_items VALUES ('N12430', 'AB22')
 INTO book_items VALUES ('N12431', 'AB22')
 INTO book_items VALUES ('N12432', 'AB22')
 INTO book_items VALUES ('N12433', 'AB22')
 INTO book_items VALUES ('N12434', 'AB22')
 INTO book_items VALUES ('N12436', 'AB23')
 INTO book_items VALUES ('N12437', 'AB23')
 INTO book_items VALUES ('N12438', 'AB23')
 INTO book_items VALUES ('N12439', 'AB23')
 INTO book_items VALUES ('N12440', 'AB23')
 INTO book_items VALUES ('N12441', 'AB24')
 INTO book_items VALUES ('N12442', 'AB24')
 INTO book_items VALUES ('N12443', 'AB24')
 INTO book_items VALUES ('N12444', 'AB24')
 INTO book_items VALUES ('N12445', 'AB24')
 INTO book_items VALUES ('N12446', 'AB24')
 INTO book_items VALUES ('N12447', 'AB24')
 INTO book_items VALUES ('N12448', 'AB24')
 INTO book_items VALUES ('N12449', 'AB24')
 INTO book_items VALUES ('N12450', 'AB24')
 INTO book_items VALUES ('N12451', 'AB24')
 INTO book_items VALUES ('N12452', 'AB24')
 INTO book_items VALUES ('N12453', 'AB25')
 INTO book_items VALUES ('N12454', 'AB25')
 INTO book_items VALUES ('N12455', 'AB25')
 INTO book_items VALUES ('N12456', 'AB25')
 INTO book_items VALUES ('N12457', 'AB25')
 INTO book_items VALUES ('N12458', 'AB25')
 INTO book_items VALUES ('N12459', 'AB25')
 INTO book_items VALUES ('N12460', 'AB25')
 INTO book_items VALUES ('N12461', 'AB25')
 INTO book_items VALUES ('N12462', 'AB25')
 INTO book_items VALUES ('N12463', 'AB26')
 INTO book_items VALUES ('N12464', 'AB26')
 INTO book_items VALUES ('N12465', 'AB26')
 INTO book_items VALUES ('N12466', 'AB26')
 INTO book_items VALUES ('N12467', 'AB26')
 INTO book_items VALUES ('N12468', 'AB26')
 INTO book_items VALUES ('N12469', 'AB27')
 INTO book_items VALUES ('N12470', 'AB27')
 INTO book_items VALUES ('N12471', 'AB27')
 INTO book_items VALUES ('N12472', 'AB27')
 INTO book_items VALUES ('N12473', 'AB27')
 INTO book_items VALUES ('N12474', 'AB27')
 INTO book_items VALUES ('N12475', 'AB27')
 INTO book_items VALUES ('N12476', 'AB27')
 INTO book_items VALUES ('N12478', 'AB27')
 INTO book_items VALUES ('N12479', 'AB27')
 INTO book_items VALUES ('N12480', 'AB27')
 INTO book_items VALUES ('N12481', 'AB28')
 INTO book_items VALUES ('N12482', 'AB28')
 INTO book_items VALUES ('N12483', 'AB28')
 INTO book_items VALUES ('N12484', 'AB28')
 INTO book_items VALUES ('N12485', 'AB28')
 INTO book_items VALUES ('N12486', 'AB28')
 INTO book_items VALUES ('N12487', 'AB28')
 INTO book_items VALUES ('N12488', 'AB28')
 INTO book_items VALUES ('N12489', 'AB28')
 INTO book_items VALUES ('N12490', 'AB28')
 INTO book_items VALUES ('N12491', 'AB28')
 INTO book_items VALUES ('N12492', 'AB28')
 INTO book_items VALUES ('N12493', 'AB28')
 INTO book_items VALUES ('N12494', 'AB28')
 INTO book_items VALUES ('N12495', 'AB28')
 INTO book_items VALUES ('N12496', 'AB28')
 INTO book_items VALUES ('N12497', 'AB29')
 INTO book_items VALUES ('N12498', 'AB29')
 INTO book_items VALUES ('N12499', 'AB29')
 INTO book_items VALUES ('N12500', 'AB29')
 INTO book_items VALUES ('N12501', 'AB29')
 INTO book_items VALUES ('N12502', 'AB29')
 INTO book_items VALUES ('N12503', 'AB29')
 INTO book_items VALUES ('N12504', 'AB29')
 INTO book_items VALUES ('N12505', 'AB30')
 INTO book_items VALUES ('N12506', 'AB30')
 INTO book_items VALUES ('N12507', 'AB30')
 INTO book_items VALUES ('N12508', 'AB30')
 INTO book_items VALUES ('N12509', 'AB30')
 INTO book_items VALUES ('N12510', 'AB30')
 INTO book_items VALUES ('N12511', 'AB30')
 INTO book_items VALUES ('N12512', 'AB30')
 INTO book_items VALUES ('N12513', 'AB30')
 INTO book_items VALUES ('N12514', 'AB30')
 INTO book_items VALUES ('N12515', 'AB30')
 INTO book_items VALUES ('N12516', 'AB30')
 INTO book_items VALUES ('N12517', 'AB31')
 INTO book_items VALUES ('N12518', 'AB31')
 INTO book_items VALUES ('N12519', 'AB31')
 INTO book_items VALUES ('N12520', 'AB31')
 INTO book_items VALUES ('N12521', 'AB31')
 INTO book_items VALUES ('N12522', 'AB31')
 INTO book_items VALUES ('N12523', 'AB31')
 INTO book_items VALUES ('N12524', 'AB31')
 INTO book_items VALUES ('N12525', 'AB31')
 INTO book_items VALUES ('N12526', 'AB31')
 INTO book_items VALUES ('N12527', 'AB31')
 INTO book_items VALUES ('N12528', 'AB31')
 INTO book_items VALUES ('N12529', 'AB31')
 INTO book_items VALUES ('N12530', 'AB31')
 INTO book_items VALUES ('N12531', 'AB31')
 INTO book_items VALUES ('N12532', 'AB31')
 INTO book_items VALUES ('N12533', 'AB31')
 INTO book_items VALUES ('N12534', 'AB32')
 INTO book_items VALUES ('N12535', 'AB32')
 INTO book_items VALUES ('N12536', 'AB32')
 INTO book_items VALUES ('N12537', 'AB32')
 INTO book_items VALUES ('N12538', 'AB32')
 INTO book_items VALUES ('N12539', 'AB32')
 INTO book_items VALUES ('N12540', 'AB32')
 INTO book_items VALUES ('N12541', 'AB33')
 INTO book_items VALUES ('N12542', 'AB33')
 INTO book_items VALUES ('N12543', 'AB33')
 INTO book_items VALUES ('N12544', 'AB33')
 INTO book_items VALUES ('N12545', 'AB33')
 INTO book_items VALUES ('N12546', 'AB33')
 INTO book_items VALUES ('N12547', 'AB33')
 INTO book_items VALUES ('N12548', 'AB33')
 INTO book_items VALUES ('N12549', 'AB33')
 INTO book_items VALUES ('N12550', 'AB33')
 INTO book_items VALUES ('N12551', 'AB33')
 INTO book_items VALUES ('N12552', 'AB33')
 INTO book_items VALUES ('N12553', 'AB33')
 INTO book_items VALUES ('N12554', 'AB34')
 INTO book_items VALUES ('N12555', 'AB34')
 INTO book_items VALUES ('N12556', 'AB34')
 INTO book_items VALUES ('N12557', 'AB34')
 INTO book_items VALUES ('N12558', 'AB35')
 INTO book_items VALUES ('N12559', 'AB35')
 INTO book_items VALUES ('N12560', 'AB35')
 INTO book_items VALUES ('N12561', 'AB35')
 INTO book_items VALUES ('N12562', 'AB35')
 INTO book_items VALUES ('N12563', 'AB35')
 INTO book_items VALUES ('N12564', 'AB35')
 INTO book_items VALUES ('N12565', 'AB35')
 INTO book_items VALUES ('N12566', 'AB35')
 INTO book_items VALUES ('N12567', 'AB35')
 INTO book_items VALUES ('N12568', 'AB36')
 INTO book_items VALUES ('N12569', 'AB36')
 INTO book_items VALUES ('N12570', 'AB36')
 INTO book_items VALUES ('N12571', 'AB36')
 INTO book_items VALUES ('N12572', 'AB36')
 INTO book_items VALUES ('N12573', 'AB36')
 INTO book_items VALUES ('N12574', 'AB36')
 INTO book_items VALUES ('N12575', 'AB36')
 INTO book_items VALUES ('N12576', 'AB36')
 INTO book_items VALUES ('N12577', 'AB36')
 INTO book_items VALUES ('N12578', 'AB36')
 INTO book_items VALUES ('N12579', 'AB36')
 INTO book_items VALUES ('N12580', 'AB36')
 INTO book_items VALUES ('N12581', 'AB36')
 INTO book_items VALUES ('N12582', 'AB36')
 INTO book_items VALUES ('N12583', 'AB36')
 INTO book_items VALUES ('N12584', 'AB36')
 INTO book_items VALUES ('N12585', 'AB36')
 INTO book_items VALUES ('N12586', 'AB36')
 INTO book_items VALUES ('N12587', 'AB36')
 INTO book_items VALUES ('N12589', 'AB37')
 INTO book_items VALUES ('N12590', 'AB37')
 INTO book_items VALUES ('N12591', 'AB37')
 INTO book_items VALUES ('N12592', 'AB37')
 INTO book_items VALUES ('N12593', 'AB37')
 INTO book_items VALUES ('N12594', 'AB38')
 INTO book_items VALUES ('N12595', 'AB38')
 INTO book_items VALUES ('N12596', 'AB38')
 INTO book_items VALUES ('N12597', 'AB38')
 INTO book_items VALUES ('N12598', 'AB38')
 INTO book_items VALUES ('N12599', 'AB38')
 INTO book_items VALUES ('N12600', 'AB38')
 INTO book_items VALUES ('N12601', 'AB38')
 INTO book_items VALUES ('N12602', 'AB38')
 INTO book_items VALUES ('N12603', 'AB38')
 INTO book_items VALUES ('N12604', 'AB38')
 INTO book_items VALUES ('N12605', 'AB40')
 INTO book_items VALUES ('N12606', 'AB40')
 INTO book_items VALUES ('N12607', 'AB40')
 INTO book_items VALUES ('N12608', 'AB40')
 INTO book_items VALUES ('N12609', 'AB40')
 INTO book_items VALUES ('N12610', 'AB40')
 INTO book_items VALUES ('N12611', 'AB40')
 INTO book_items VALUES ('N12612', 'AB40')
 INTO book_items VALUES ('N12613', 'AB40')
 INTO book_items VALUES ('N12614', 'AB40')
 INTO book_items VALUES ('N12615', 'AB40')
 INTO book_items VALUES ('N12616', 'AB40')
 INTO book_items VALUES ('N12617', 'AB40')
 INTO book_items VALUES ('N12618', 'AB40')
 SELECT * FROM DUAL;
PROMPT '******* Book_items data inserted';


-- INVENTORY Table Structure (DDL)
CREATE TABLE inventory(
    ISBN VARCHAR(6) NOT NULL PRIMARY KEY,
    initialInventory INT NOT NULL,
    CONSTRAINT ISBN_inv_fk FOREIGN KEY(ISBN) REFERENCES book_details(ISBN),
    CONSTRAINT initialInventory_chk CHECK(initialInventory BETWEEN 1 AND 100)
);
-- Data for the table 'inventory' (DML)
INSERT ALL
 INTO inventory VALUES('AB21', 12)
 INTO inventory VALUES('AB22', 10)
 INTO inventory VALUES('AB23', 6)
 INTO inventory VALUES('AB24', 13)
 INTO inventory VALUES('AB25', 11)
 INTO inventory VALUES('AB26', 10)
 INTO inventory VALUES('AB27', 12)
 INTO inventory VALUES('AB28', 19)
 INTO inventory VALUES('AB29', 15)
 INTO inventory VALUES('AB30', 20)
 INTO inventory VALUES('AB31', 22)
 INTO inventory VALUES('AB32', 14)
 INTO inventory VALUES('AB33', 20)
 INTO inventory VALUES('AB34', 10)
 INTO inventory VALUES('AB35', 12)
 INTO inventory VALUES('AB36', 21)
 INTO inventory VALUES('AB37', 6)
 INTO inventory VALUES('AB38', 12)
 INTO inventory VALUES('AB39', 20)
 INTO inventory VALUES('AB40', 20)
SELECT * FROM DUAL;
PROMPT '******* Inventory data inserted';


-- PREFERENCES Table Structure (DDL)
CREATE TABLE preferences (
userID VARCHAR(6) NOT NULL,
genreID VARCHAR(6) DEFAULT 'G0' NOT NULL,
CONSTRAINT userid_fk FOREIGN KEY(userID) REFERENCES user_details(userID),
CONSTRAINT genreid_prf_fk FOREIGN KEY(genreID) REFERENCES genre(genreID),
CONSTRAINT user_genre_pk PRIMARY KEY(userID, genreID) 
);
-- Data for the table 'preferences' (DML)
INSERT ALL 
 INTO preferences VALUES('US11', 'G1')
 INTO preferences VALUES('US12', 'G4')
 INTO preferences VALUES('US13', 'G6')
 INTO preferences VALUES('US14', 'G7')
 INTO preferences VALUES('US15', 'G10')
 INTO preferences VALUES('US16', 'G8')
 INTO preferences VALUES('US17', 'G11')
 INTO preferences VALUES('US18', 'G0')
 INTO preferences VALUES('US19', 'G11')
 INTO preferences VALUES('US20', 'G4')
 INTO preferences VALUES('US21', 'G6')
 INTO preferences VALUES('US22', 'G10')
 INTO preferences VALUES('US23', 'G3')
 INTO preferences VALUES('US24', 'G5')
 INTO preferences VALUES('US25', 'G5')
 INTO preferences VALUES('US26', 'G0')
 INTO preferences VALUES('US27', 'G2')
 INTO preferences VALUES('US28', 'G2')
 INTO preferences VALUES('US29', 'G0')
SELECT * FROM DUAL;
PROMPT '******* Preferences data inserted';


-- BOOKS_BORROWED Table Structure (DDL)
CREATE TABLE books_borrowed(
borrowID VARCHAR(6) NOT NULL PRIMARY KEY,
userID VARCHAR(6) NOT NULL,
bookID VARCHAR(6) NOT NULL,
dateBorrowed DATE NOT NULL,
dateReturned DATE,
CONSTRAINT userid_bb_fk FOREIGN KEY(userID) REFERENCES user_details(userID),
CONSTRAINT bookid_fk FOREIGN KEY(bookID) REFERENCES book_items(bookID)
);
-- Data for the table 'books_borrowed' (DML)
INSERT ALL
 INTO books_borrowed VALUES('B11', 'US12', 'N12346', TO_DATE('01/08/2022', 'DD/MM/YYYY'), TO_DATE('11/08/2022', 'DD/MM/YYYY'))
 INTO books_borrowed VALUES('B12', 'US21', 'N12347', TO_DATE('02/08/2022', 'DD/MM/YYYY'), TO_DATE('09/08/2022', 'DD/MM/YYYY'))
 INTO books_borrowed VALUES('B13', 'US29', 'N12348', TO_DATE('03/08/2022', 'DD/MM/YYYY'), TO_DATE('15/08/2022', 'DD/MM/YYYY'))
 INTO books_borrowed VALUES('B14', 'US17', 'N12349', TO_DATE('12/08/2022', 'DD/MM/YYYY'), TO_DATE('11/08/2022', 'DD/MM/YYYY'))
 INTO books_borrowed VALUES('B15', 'US13', 'N12350', TO_DATE('14/08/2022', 'DD/MM/YYYY'), TO_DATE('12/08/2022', 'DD/MM/YYYY'))
 INTO books_borrowed VALUES('B16', 'US15', 'N12351', TO_DATE('05/08/2022', 'DD/MM/YYYY'), TO_DATE('10/08/2022', 'DD/MM/YYYY'))
 INTO books_borrowed VALUES('B17', 'US16', 'N12352', TO_DATE('01/08/2022', 'DD/MM/YYYY'), NULL)
 INTO books_borrowed VALUES('B18', 'US20', 'N12353', TO_DATE('05/08/2022', 'DD/MM/YYYY'), NULL)
 INTO books_borrowed VALUES('B19', 'US22', 'N12354', TO_DATE('11/08/2022', 'DD/MM/YYYY'), TO_DATE('12/08/2022', 'DD/MM/YYYY'))
 INTO books_borrowed VALUES('B20', 'US24', 'N12355', TO_DATE('09/08/2022', 'DD/MM/YYYY'), TO_DATE('10/08/2022', 'DD/MM/YYYY'))
 INTO books_borrowed VALUES('B21', 'US11', 'N12356', TO_DATE('05/08/2022', 'DD/MM/YYYY'), TO_DATE('13/08/2022', 'DD/MM/YYYY'))
 INTO books_borrowed VALUES('B22', 'US14', 'N12357', TO_DATE('04/08/2022', 'DD/MM/YYYY'), TO_DATE('07/08/2022', 'DD/MM/YYYY'))
 INTO books_borrowed VALUES('B23', 'US27', 'N12358', TO_DATE('03/08/2022', 'DD/MM/YYYY'), TO_DATE('04/08/2022', 'DD/MM/YYYY'))
 INTO books_borrowed VALUES('B24', 'US26', 'N12359', TO_DATE('01/08/2022', 'DD/MM/YYYY'), NULL)
 INTO books_borrowed VALUES('B25', 'US25', 'N12360', TO_DATE('02/08/2022', 'DD/MM/YYYY'), NULL)
SELECT * FROM DUAL;
PROMPT '******* Books_borrowed data inserted';


-- OVERDUE BOOKS VIEW 
CREATE VIEW vwOverDueBooks AS
SELECT username, email, dateBorrowed, (dateBorrowed + 10) AS dueDate, 
 FLOOR(CURRENT_DATE - (dateBorrowed + 10)) AS overDueBy, bi.bookid, bd.booktitle
FROM user_details us FULL JOIN books_borrowed bk ON us.userID = bk.userID
    LEFT OUTER JOIN book_items bi ON bk.bookid = bi.bookid
    LEFT OUTER JOIN book_details bd ON bi.isbn = bd.isbn
WHERE dateBorrowed IS NOT NULL AND dateReturned IS NULL 
AND (FLOOR(CURRENT_DATE - (dateBorrowed + 10)) > 0);

-- STOCK CONTROL VIEW 
CREATE VIEW vwStockControl AS
SELECT DISTINCT i.isbn, bd.booktitle, i.initialinventory, 
    COUNT(bi.bookid) AS currentinventory,
    -- substracts the number of books that have been returned 
    -- from all of the books that have been borrowed
    -- (possible because count doesn't count the NULL values)
    (COUNT(bb.borrowid) - COUNT(bb.dateReturned)) AS numborrowed,
    (COUNT(bi.bookid) - (COUNT(bb.borrowid) - COUNT(bb.dateReturned))) AS inlibrary
FROM book_details bd INNER JOIN inventory i ON bd.ISBN = i.ISBN
    LEFT OUTER JOIN book_items bi ON i.isbn = bi.isbn
    LEFT OUTER JOIN books_borrowed bb ON bi.bookid = bb.bookid
GROUP BY i.isbn, i.initialinventory, bd.booktitle
ORDER BY i.isbn;

-- GENRE CHART VIEW 
CREATE VIEW vwGenreChart AS
SELECT g.genreId, g.genre, COUNT(p.genreID)AS numOfUsers
FROM genre g LEFT OUTER JOIN preferences p ON p.genreid = g.genreid
WHERE g.genreID != 'G0'
GROUP BY g.genreId, g.genre
ORDER BY COUNT(p.genreID) DESC;

-- AGE GROUP PREFERENCE VIEW
CREATE VIEW vwAgeGroupPreferences AS
SELECT g.genreID, g.genre,
COUNT(CASE WHEN u.age <= 24 THEN 1 END) AS youth,
COUNT(CASE WHEN u.age >= 25 AND u.age <= 64  THEN 1 END) AS adults,
COUNT(CASE WHEN u.age >= 64 THEN 1 END) AS seniors
FROM genre g LEFT OUTER JOIN preferences p ON p.genreid = g.genreid
LEFT OUTER JOIN user_details u ON p.userId = u.userID
WHERE g.genreID != 'G0'
GROUP BY g.genreId, g.genre;
