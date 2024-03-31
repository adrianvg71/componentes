-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: componentes
-- ------------------------------------------------------
-- Server version	8.1.0

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
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idproducto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `img` longtext,
  `categoria` int DEFAULT NULL,
  PRIMARY KEY (`idproducto`),
  KEY `fk_prod_cat_idx` (`categoria`),
  CONSTRAINT `fk_prod_cat` FOREIGN KEY (`categoria`) REFERENCES `categorias` (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Intel I5 12400F',136,'https://img.pccomponentes.com/articles/83/834922/1636-intel-core-i5-12400f-44-ghz.jpg',2),(2,'MSI Geforce RTX 4080 SUPER 16GB',1150,'https://img.pccomponentes.com/articles/1081/10811513/1776-msi-geforce-rtx-4080-super-ventus-3x-oc-16gb-gddr6x-dlss3.jpg',3),(5,'Corsair RMe Series RM750e 750W 80 Plus Gold Modular',124,'https://i.ibb.co/cFfp38Q/2712-corsair-rme-series-rm750e-750w-80-plus-gold-modular-comprar.webp',6),(6,'MSI B760 GAMING PLUS WIFI',155,'https://i.ibb.co/8Ddnc4p/1502-msi-b760-gaming-plus-wifi.jpg',1),(7,'Kingston FURY Beast DDR4 3200 MHz 32GB 2x16GB CL16 ',79,'https://i.ibb.co/5BC2mBx/1325-kingston-fury-beast-ddr4-3200-mhz-32gb-2x16gb-cl16.webp',5),(8,'Kioxia Exceria G2 Unidad SSD 1TB NVMe M.2 2280',60,'https://i.ibb.co/S66tsZs/ssd.webp',4),(9,'AMD Ryzen 7 7800X3D 4.2 GHz/5 GHz ',406,'https://i.ibb.co/xYWw6j5/procesador-1.webp',2),(10,'XFX Speedster QICK 319 Radeon RX 7800 XT Core Edition 16GB GDDR6 ',650,'https://i.ibb.co/S7dbygc/grafica-1.webp',3),(11,'MSI MAG A750GL PCIE5 750W 80 PLUS Gold Modular ',120,'https://i.ibb.co/vhGKLpT/fuente-alimentacion-1.webp',6),(12,'ASUS ROG STRIX B760-F GAMING WIFI ',255,'https://i.ibb.co/HdHPzSG/placa-base-1.webp',1),(13,'Acer Predator Vesta II RGB DDR5 6000MHz 32GB 2x16GB CL30',130,'https://i.ibb.co/QCL6sPk/memoria-ram-1.webp',5),(14,'Acer Predator GM7 2TB SSD M.2 PCI Express 4.0 NVMe ',140,'https://i.ibb.co/b5xHxYJ/ssd-1.webp',4),(15,'AMD Ryzen 5 7600X 4.7 GHz Box sin Ventilador',234,'https://i.ibb.co/DL7m9r9/procesador.webp',2),(16,'Gigabyte GeForce RTX 4060 EAGLE OC 8GB GDDR6 DLSS3 Reacondicionado',320,'https://i.ibb.co/TwjgLK7/grafica.webp',3),(17,'Mars Gaming MPIII750 Fuente Alimentación PC 750W ATX 85% Eficiencia ',50,'https://i.ibb.co/f0WYCc4/alimentacion.webp',6),(18,'Gigabyte B550M Aorus Elite ',105,'https://i.ibb.co/9ckrj4Z/placa-base.webp',1),(19,'Corsair Vengeance RGB DDR5 6000MHz PC5-48000 32GB 2x16GB CL36 Negra ',130,'https://i.ibb.co/WzcqWFm/ram.webp',5),(20,'Kioxia EXCERIA 480GB SSD SATA ',36,'https://i.ibb.co/z4kq9P1/ssd.webp',4),(21,'AMD Ryzen 5 8500G 3.5/5GHz Box',193,'https://i.ibb.co/16QxXVH/procesador-1.webp',2),(22,'AMD Ryzen 5 8600G 4.3/5GHz Box ',250,'https://i.ibb.co/16QxXVH/procesador-1.webp',2),(23,'Intel Core i9-14900F 2.1/5.8GHz Box  ',620,'https://i.ibb.co/54kyV6g/procesador-3.webp',2),(24,'ASUS PRIME Z790-P ',210,'https://i.ibb.co/BG0CPJy/placa-base-1.webp',1),(25,'MSI X670E GAMING PLUS WIFI ',270,'https://i.ibb.co/cbSgCPy/base-2.webp',1),(26,'Gigabyte B550 AORUS ELITE V2',135,'https://i.ibb.co/X4nbgjQ/base-3.webp',1),(27,'PowerColor Hellhound AMD Radeon RX 7800 XT 16GB GDDR6 ',550,'https://i.ibb.co/4M1pbxW/grafica-1.webp',3),(28,'PNY GeForce RTX 4060 Ti XLR8 Gaming VERTO 16GB GDDR6 DLSS3 ',486,'https://i.ibb.co/Sc1Tr1T/grafica-2.webp',3),(29,'MSI GeForce RTX 4090 GAMING X SLIM 24GB GDDR6X DLSS3 ',2000,'https://i.ibb.co/87gJJP0/grafica-3.webp',3),(30,'Seagate BarraCuda 3.5\" 2TB SATA 3 ',66,'https://i.ibb.co/WVZtsQR/ssd1.webp',4),(31,'WD Black SN850X SSD 1TB M.2 2280 PCIe Gen4 NVMe',92,'https://i.ibb.co/9YhjYZd/ssd2.webp',4),(32,'Toshiba Canvio Basics 2022 2.5\" 2TB USB 3.2 Negro',64,'https://i.ibb.co/nDgCCxm/ssd3.jpg',4),(33,'Corsair Vengeance DDR5 6000MHz 32GB 2x16GB CL36 Negra ',125,'https://i.ibb.co/Sys9J1z/ram1.webp',5),(34,'Kingston FURY Beast RGB DDR4 3200MHz 16GB 2x8GB CL16 ',53,'https://i.ibb.co/Lhq0Xt8/ram2.webp',5),(35,'Corsair Dominator Platinum RGB DDR5 6600MHz 64GB 2x32GB CL32 Negra ',342,'https://i.ibb.co/Bfv6Nq5/ram3.webp',5),(36,'MSI MAG A750GL PCIE5 750W 80 PLUS Gold Modular ',120,'https://i.ibb.co/ySD2Qyc/1.webp',6),(37,'MSI MPG A850G PCIE5 850W 80 Plus Gold Full Modular',137,'https://i.ibb.co/qNKRm6Y/2.webp',6),(38,'Inter-Tech A80 SFF Caja Rack ITX USB 3.2 + Fuente Alimentación 60W ',80,'https://i.ibb.co/j3thrtv/3.webp',6);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-31 16:49:11
