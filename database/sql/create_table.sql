CREATE DATABASE `amt`
/*!40100 DEFAULT CHARACTER SET utf8mb4 */
;

-- amt.products definition
CREATE TABLE `products` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(200) DEFAULT NULL,
    `price` double DEFAULT NULL,
    `createdAt` date DEFAULT NULL,
    `updatedAt` date DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4;

-- amt.users definition
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;