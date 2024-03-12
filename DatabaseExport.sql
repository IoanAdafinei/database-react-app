-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_project
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `autori`
--

DROP TABLE IF EXISTS `autori`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autori` (
  `IDAutor` int NOT NULL AUTO_INCREMENT,
  `NumeAutor` varchar(20) NOT NULL,
  `PrenumeAutor` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `DataNasteriiAutor` datetime DEFAULT NULL,
  `Tara` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`IDAutor`),
  UNIQUE KEY `IDAutor_UNIQUE` (`IDAutor`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autori`
--

LOCK TABLES `autori` WRITE;
/*!40000 ALTER TABLE `autori` DISABLE KEYS */;
INSERT INTO `autori` VALUES (1,'Smith','John','2023-10-17 20:46:00','France'),(2,'Johnson','Emily','1985-08-20 00:00:00','UK'),(3,'Garcia','Carlos','1990-03-10 00:00:00','Spain'),(7,'Liviu','Rebreanu','1885-11-27 00:00:00','Romania'),(9,'Brawn','Black','2023-11-01 19:23:00','Italy'),(10,'Brown','Sarah','1980-12-03 00:00:00','USA'),(11,'Smith','Michael','1975-07-18 00:00:00','Canada'),(12,'Martinez','Isabella','1992-06-25 00:00:00','Mexico'),(13,'Chen','Wei','1988-02-10 00:00:00','China'),(14,'Muller','Andreas','1982-04-30 00:00:00','Germany'),(15,'Lopez','Sofia','1995-11-15 00:00:00','Spain'),(16,'Kim','Ji-hoon','1987-09-08 00:00:00','South Korea'),(17,'Gonzalez','Juan','1978-03-22 00:00:00','Argentina'),(18,'Bianchi','Paola','1986-08-05 00:00:00','Italy'),(19,'Ali','Mohammed','1973-01-14 00:00:00','Pakistan'),(20,'O`Connor','Liam','1984-05-27 00:00:00','Ireland'),(21,'Sato','Yuki','1990-10-12 00:00:00','Japan'),(22,'Kowalski','Alicja','1983-06-07 00:00:00','Poland'),(23,'Vasquez','Maria','1981-07-29 00:00:00','Chile'),(24,'Nguyen','Minh','1989-12-19 00:00:00','Vietnam'),(25,'Gupta','Raj','1974-09-01 00:00:00','India'),(26,'White','Sophie','1993-03-13 00:00:00','UK'),(27,'Wu','Xin','1976-08-22 00:00:00','China'),(28,'Hernandez','Carlos','1997-04-05 00:00:00','Mexico'),(29,'Jansen','Hans','1985-11-28 00:00:00','Netherlands'),(30,'Ahn','Seung-ho','1989-02-17 00:00:00','South Korea'),(31,'Silva','Ana','1983-06-30 00:00:00','Portugal'),(32,'Santos','Andres','1987-01-09 00:00:00','Brazil'),(33,'Bouvier','Claire','1986-10-24 00:00:00','France'),(34,'Zhang','Yan','1994-07-03 00:00:00','China'),(35,'Ortega','Luis','1976-12-15 00:00:00','Spain'),(36,'Wang','Hui','1980-05-08 00:00:00','China'),(37,'Lee','Seo-yeon','1991-03-18 00:00:00','South Korea'),(38,'Kowalczyk','Jan','1979-08-02 00:00:00','Poland'),(39,'Anthony','Reynolds','1974-07-03 15:38:00','USA');
/*!40000 ALTER TABLE `autori` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `autori_carti`
--

DROP TABLE IF EXISTS `autori_carti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autori_carti` (
  `IDCarte` int NOT NULL,
  `IDAutor` int NOT NULL,
  PRIMARY KEY (`IDCarte`,`IDAutor`),
  KEY `IDAutor_idx` (`IDAutor`),
  CONSTRAINT `IDAutor` FOREIGN KEY (`IDAutor`) REFERENCES `autori` (`IDAutor`),
  CONSTRAINT `IDCarte` FOREIGN KEY (`IDCarte`) REFERENCES `carti` (`IDCarte`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autori_carti`
--

LOCK TABLES `autori_carti` WRITE;
/*!40000 ALTER TABLE `autori_carti` DISABLE KEYS */;
INSERT INTO `autori_carti` VALUES (1,1),(1,2),(2,2),(3,3),(85,10),(88,10),(91,10),(97,10),(106,10),(124,11),(86,12),(100,12),(105,12),(85,13),(87,13),(90,13),(99,13),(101,13),(87,15),(102,15),(90,16),(89,17),(98,17),(104,17),(91,20),(103,20),(92,21),(107,21),(93,22),(108,22),(94,23),(109,23),(94,24),(110,24),(95,25),(96,26),(121,39);
/*!40000 ALTER TABLE `autori_carti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carti`
--

DROP TABLE IF EXISTS `carti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carti` (
  `IDCarte` int NOT NULL AUTO_INCREMENT,
  `Titlu` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `AnPublicare` datetime DEFAULT NULL,
  `Limba` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `IDGen` int NOT NULL,
  `PretCarte` float NOT NULL,
  PRIMARY KEY (`IDCarte`),
  UNIQUE KEY `IDCarte_UNIQUE` (`IDCarte`),
  KEY `IDGen_idx` (`IDGen`),
  CONSTRAINT `IDGen` FOREIGN KEY (`IDGen`) REFERENCES `gen` (`IDGen`)
) ENGINE=InnoDB AUTO_INCREMENT=125 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carti`
--

LOCK TABLES `carti` WRITE;
/*!40000 ALTER TABLE `carti` DISABLE KEYS */;
INSERT INTO `carti` VALUES (1,'The Great Novel','2010-01-01 00:00:00','English',1,12.1),(2,'Mystery Unveiled','2015-05-20 00:00:00','English',2,69.69),(3,'Historical Perspective','2005-11-12 00:00:00','Spanish',3,19.25),(85,'Epic Adventure','2008-07-10 00:00:00','English',1,7.29),(86,'Secrets Unveiled','2016-02-05 00:00:00','English',2,58.57),(87,'The Art of War','2000-09-23 00:00:00','Chinese',4,32.96),(88,'The Alchemist','1988-12-01 00:00:00','Portuguese',5,67.09),(89,'Science Explained','2010-03-14 00:00:00','English',3,77.56),(90,'Mysteries of the Universe','2017-08-29 00:00:00','English',3,27.52),(91,'A Tale of Two Cities','1859-01-01 00:00:00','English',5,61.94),(92,'Love and Romance','1995-06-07 00:00:00','English',1,68.15),(93,'History of Philosophy','2003-04-18 00:00:00','English',3,74.92),(94,'The Odyssey','1753-01-01 00:00:00','Ancient Greek',6,11.14),(95,'The Iliad','1754-01-01 00:00:00','Ancient Greek',6,66.94),(96,'The Lord of the Rings','1954-07-29 00:00:00','English',1,63.28),(97,'Crime and Punishment','1866-01-01 00:00:00','Russian',2,35.58),(98,'War and Peace','1869-01-01 00:00:00','Russian',2,66.05),(99,'The Great Gatsby','1925-04-10 00:00:00','English',1,64.51),(100,'The Catcher in the Rye','1951-07-16 00:00:00','English',1,44.41),(101,'One Hundred Years of Solitude','1967-05-30 00:00:00','Spanish',5,27.51),(102,'The Da Vinci Code','2003-03-18 00:00:00','English',2,3.3),(103,'The Hunger Games','2008-09-14 00:00:00','English',1,12),(104,'The Hobbit','1937-09-21 00:00:00','English',1,49.11),(105,'To Kill a Mockingbird','1960-07-11 00:00:00','English',1,50.53),(106,'Pride and Prejudice','1813-01-28 00:00:00','English',1,25.32),(107,'1984','1949-06-08 00:00:00','English',1,53.03),(108,'Brave New World','1932-01-01 00:00:00','English',1,30.18),(109,'The Art of War','2009-11-12 00:00:00','English',1,69.82),(110,'The Hitchhiker\'s Guide to the Galaxy','1979-10-12 00:00:00','English',1,20.53),(121,'Ruination','1989-05-16 00:20:00','English',1,15.45),(124,'testBook','2023-11-08 15:05:00','gsdf',8,15.4);
/*!40000 ALTER TABLE `carti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carti_comenzi`
--

DROP TABLE IF EXISTS `carti_comenzi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carti_comenzi` (
  `IDComanda` int NOT NULL,
  `IDCarte` int NOT NULL,
  `Cantitate` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`IDComanda`,`IDCarte`),
  KEY `IDCarte_com_idx` (`IDCarte`),
  CONSTRAINT `IDCarte_cc` FOREIGN KEY (`IDCarte`) REFERENCES `carti` (`IDCarte`),
  CONSTRAINT `IDComanda_cc` FOREIGN KEY (`IDComanda`) REFERENCES `comenzi` (`IDComanda`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carti_comenzi`
--

LOCK TABLES `carti_comenzi` WRITE;
/*!40000 ALTER TABLE `carti_comenzi` DISABLE KEYS */;
INSERT INTO `carti_comenzi` VALUES (1,1,2),(1,2,3),(1,89,2),(1,96,1),(2,2,1),(2,96,2),(2,100,3),(3,3,4),(3,98,1),(3,106,4),(4,96,3),(4,99,2),(5,95,1),(5,96,2),(6,101,4),(6,110,1),(7,85,2),(7,106,3),(8,87,1),(8,96,3),(9,108,2),(9,109,1),(10,93,2),(10,99,3),(11,86,1),(11,97,4),(12,107,2),(12,108,2),(13,98,1),(13,99,3),(14,85,1),(14,108,3),(15,85,1),(15,98,2);
/*!40000 ALTER TABLE `carti_comenzi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clienti`
--

DROP TABLE IF EXISTS `clienti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clienti` (
  `IDClient` int NOT NULL AUTO_INCREMENT,
  `NumeClient` varchar(20) NOT NULL,
  `PrenumeClient` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `EmailClient` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `NumarTelefonClient` char(12) NOT NULL,
  PRIMARY KEY (`IDClient`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clienti`
--

LOCK TABLES `clienti` WRITE;
/*!40000 ALTER TABLE `clienti` DISABLE KEYS */;
INSERT INTO `clienti` VALUES (1,'Smith','Alice','alice@example.com','123-456-7890'),(2,'Johnson','Bob','bob@example.com','987-654-3210'),(3,'Garcia','Eva','eva@example.com','555-123-4567'),(4,'Brown','David','david@example.com','555-987-1234'),(5,'Taylor','Sophia','sophia@example.com','123-555-7890'),(6,'Smith','Oliver','oliver@example.com','987-123-5555'),(7,'Johnson','Ava','ava@example.com','123-555-9876'),(8,'Lee','Jack','jack@example.com','555-123-9876'),(9,'Wong','Emily','emily@example.com','555-987-1234'),(10,'Cohen','Ella','ella@example.com','123-987-5555'),(11,'Gomez','Luis','luis@example.com','987-123-5555'),(12,'Brown','Grace','grace@example.com','123-987-5555'),(13,'Chen','Lucas','lucas@example.com','555-123-9876'),(14,'Kim','Emma','emma@example.com','123-555-9876'),(15,'Ali','Noor','noor@example.com','555-123-9876'),(16,'Santos','Lucia','lucia@example.com','987-555-1234'),(17,'Olsen','Nina','nina@example.com','555-987-1234'),(18,'Gupta','Rajesh','rajesh@example.com','987-555-1234'),(19,'White','Liam','liam@example.com','123-987-5555'),(20,'Martinez','Elena','elena@example.com','555-987-1234'),(21,'Johnson','Mia','mia@example.com','123-555-9876'),(22,'Wang','Hao','hao@example.com','555-987-1234'),(23,'Garcia','Sofia','sofia@example.com','555-987-1234'),(24,'Sato','Haruki','haruki@example.com','123-555-9876'),(25,'Zhang','Chen','chen@example.com','123-555-9876'),(26,'Ortega','Isabel','isabel@example.com','123-555-9876'),(27,'Nguyen','Thi','thi@example.com','555-987-1234'),(28,'Silva','Joao','joao@example.com','555-987-1234'),(29,'Kowalski','Wojciech','wojciech@example.com','987-555-1234'),(30,'Hernandez','Maria','maria@example.com','555-987-1234'),(31,'Wu','Cheng','cheng@example.com','555-987-1234');
/*!40000 ALTER TABLE `clienti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comenzi`
--

DROP TABLE IF EXISTS `comenzi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comenzi` (
  `IDComanda` int NOT NULL AUTO_INCREMENT,
  `IDClient` int NOT NULL,
  `DataComanda` timestamp NOT NULL,
  `PretComanda` float NOT NULL,
  PRIMARY KEY (`IDComanda`),
  KEY `IDClient_idx` (`IDClient`),
  CONSTRAINT `IDClient` FOREIGN KEY (`IDClient`) REFERENCES `clienti` (`IDClient`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comenzi`
--

LOCK TABLES `comenzi` WRITE;
/*!40000 ALTER TABLE `comenzi` DISABLE KEYS */;
INSERT INTO `comenzi` VALUES (1,1,'2023-10-15 05:30:00',75.5),(2,2,'2023-10-20 11:45:00',120),(3,3,'2023-10-25 08:15:00',50.75),(4,4,'2023-10-01 07:15:00',45.25),(5,7,'2023-10-05 11:30:00',88.75),(6,10,'2023-10-08 06:45:00',32.5),(7,2,'2023-10-12 08:00:00',55.75),(8,3,'2023-10-16 13:15:00',70),(9,9,'2023-10-20 10:30:00',42.25),(10,5,'2023-10-24 05:45:00',95.5),(11,8,'2023-10-28 09:00:00',60.75),(12,1,'2023-11-01 12:15:00',75.25),(13,6,'2023-11-05 08:30:00',48),(14,4,'2023-11-09 13:45:00',92.75),(15,7,'2023-11-13 07:00:00',37.5),(16,10,'2023-11-17 09:15:00',55.25),(17,2,'2023-11-21 14:30:00',78),(18,3,'2023-11-25 10:45:00',40.75),(19,4,'2023-10-01 07:15:00',45.25),(20,7,'2023-10-05 11:30:00',88.75),(21,10,'2023-10-08 06:45:00',32.5),(22,2,'2023-10-12 08:00:00',55.75),(23,3,'2023-10-16 13:15:00',70),(24,9,'2023-10-20 10:30:00',42.25),(25,5,'2023-10-24 05:45:00',95.5),(26,8,'2023-10-28 09:00:00',60.75),(27,1,'2023-11-01 12:15:00',75.25),(28,6,'2023-11-05 08:30:00',48),(29,4,'2023-11-09 13:45:00',92.75),(30,7,'2023-11-13 07:00:00',37.5),(31,10,'2023-11-17 09:15:00',55.25),(32,2,'2023-11-21 14:30:00',78),(33,3,'2023-11-25 10:45:00',40.75);
/*!40000 ALTER TABLE `comenzi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gen`
--

DROP TABLE IF EXISTS `gen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gen` (
  `IDGen` int NOT NULL AUTO_INCREMENT,
  `NumeGen` varchar(20) NOT NULL,
  PRIMARY KEY (`IDGen`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gen`
--

LOCK TABLES `gen` WRITE;
/*!40000 ALTER TABLE `gen` DISABLE KEYS */;
INSERT INTO `gen` VALUES (1,'Fiction'),(2,'Mystery'),(3,'History'),(4,'Science Fiction'),(5,'Fantasy'),(6,'Philosophy'),(7,'Self-Help'),(8,'Classics'),(9,'Adventure'),(10,'Romance'),(11,'Mystery'),(12,'History'),(13,'Non-Fiction'),(14,'Science'),(15,'Biography');
/*!40000 ALTER TABLE `gen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recenzii`
--

DROP TABLE IF EXISTS `recenzii`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recenzii` (
  `IDRecenzie` int NOT NULL AUTO_INCREMENT,
  `IDCarte` int NOT NULL,
  `IDClient` int DEFAULT NULL,
  `TextRecenzie` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `NotaRecenzie` int NOT NULL,
  PRIMARY KEY (`IDRecenzie`),
  KEY `IDClient_recenzii_idx` (`IDClient`),
  KEY `IDCarte_recenzii_idx` (`IDCarte`),
  CONSTRAINT `IDCarte_recenzii` FOREIGN KEY (`IDCarte`) REFERENCES `carti` (`IDCarte`),
  CONSTRAINT `IDClient_recenzii` FOREIGN KEY (`IDClient`) REFERENCES `clienti` (`IDClient`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recenzii`
--

LOCK TABLES `recenzii` WRITE;
/*!40000 ALTER TABLE `recenzii` DISABLE KEYS */;
INSERT INTO `recenzii` VALUES (1,1,1,'Great book!',5),(2,2,2,'A page-turner',4),(3,3,3,'Informative and well-written',5),(4,85,1,'One of my all-time favorite books!',5),(5,86,2,'A thrilling mystery with unexpected twists.',4),(6,87,3,'An insightful book on philosophy.',4),(7,88,4,'This book changed my life!',5),(8,89,5,'A fascinating exploration of the universe.',4),(9,90,6,'Mysterious and captivating.',4),(10,91,7,'A timeless classic that everyone should read.',5),(11,92,8,'A heartwarming love story.',4),(12,93,9,'A journey through history.',4),(13,94,10,'Inspirational and practical.',5),(14,95,11,'A mind-bending science fiction masterpiece.',5),(15,96,12,'A compelling biography of a great leader.',4),(16,97,13,'A great mystery novel.',4),(17,98,14,'A well-researched history book.',3),(18,99,15,'A thought-provoking philosophical work.',4),(19,100,16,'Couldn`t put it down!',5),(20,101,17,'Kept me guessing until the end.',4),(21,102,18,'A deep dive into the world of ideas.',4),(22,103,19,'Highly recommended for personal growth.',5),(23,104,20,'Explains complex concepts in a simple way.',4),(24,105,21,'A thrilling adventure with a twist.',4),(25,106,22,'A timeless classic that never gets old.',5),(26,107,23,'A beautiful love story that touched my heart.',4),(27,108,24,'An engaging history lesson.',4),(28,109,25,'Practical advice for self-improvement.',5),(29,110,26,'A mind-bending journey into the unknown.',5),(30,1,1,'Could have been better',2),(31,1,2,'interesting enough',3),(32,3,3,'An insightful book',2),(33,2,4,'This book changed my life!',1),(34,2,5,'A fascinating exploration of the universe.',2),(35,3,6,'Mysterious and captivating.',3),(36,1,7,'A timeless classic that everyone should read.',3),(37,2,8,'A heartwarming love story.',2);
/*!40000 ALTER TABLE `recenzii` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-18 22:15:32
