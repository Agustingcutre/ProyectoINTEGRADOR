-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 04-06-2020 a las 01:06:52
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Volti-Database`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resenas`
--

CREATE TABLE `resenas` (
  `id` int(11) NOT NULL,
  `peliculaID` varchar(45) NOT NULL,
  `usuarioID` int(11) NOT NULL,
  `resena` varchar(45) NOT NULL,
  `fechaDeCreacion` date NOT NULL,
  `fechaDeActualizacion` date NOT NULL,
  `puntaje` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `resenas`
--

INSERT INTO `resenas` (`id`, `peliculaID`, `usuarioID`, `resena`, `fechaDeCreacion`, `fechaDeActualizacion`, `puntaje`) VALUES
(1, '456', 1, 'No me gusto nada', '2020-05-30', '2020-05-30', 3),
(2, '60735', 1, 'No me gusto tanto', '2020-05-30', '2020-05-30', 5),
(3, '456', 1, 'Me encanto', '2020-05-30', '2020-05-30', 10),
(4, '1434', 1, 'La serie mas viertida que vi en mi vida', '2020-05-31', '2020-05-31', 8),
(5, '655', 1, 'Me hizo acordar mucho a star wars. Increible.', '2020-05-31', '2020-05-31', 10),
(6, '4614', 1, 'Una serie de pelos!', '2020-05-31', '2020-05-31', 8),
(7, '502', 7, 'Muy bueno para ver el familia', '2020-05-31', '2020-05-31', 7),
(8, '2224', 7, 'Hasta ahi...', '2020-05-31', '2020-05-31', 5),
(9, '1412', 7, 'Emocionante como pocas.', '2020-05-31', '2020-05-31', 8),
(10, '1403', 4, 'Asusta demasiado!', '2020-05-31', '2020-05-31', 5),
(11, '1396', 4, 'Aguante la quimica!', '2020-05-31', '2020-05-31', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombreCompleto` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fechaNacimiento` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombreCompleto`, `email`, `password`, `fechaNacimiento`) VALUES
(1, 'Diego Maradona', 'elDiego@gmail.com', 'Napoli10', '1960-10-30 00:00:00'),
(2, 'Michael Jordan', 'MJ@gmail.com', 'Bulls23', '1963-02-17 00:00:00'),
(3, 'Tomas Lopez Saavedra ', 'tlopezsaavedra@udesa.edu.ar', 'Waitless123', '1999-08-23 00:00:00'),
(4, 'Manu Firpo', 'mfirpo@udesa.edu.ar', 'VendoVinos77', '1997-08-29 00:00:00'),
(5, 'Agustin Cutre', 'acutre@udesa.edu.ar', 'Tobogan8', '2000-10-03 00:00:00'),
(6, 'Maria Jacobe', 'mariajacobe@gmail.com', 'Sillon11', '2009-08-27 00:00:00'),
(7, 'Agustin Blaquier', 'm', 'matiheber', '2014-10-28 00:00:00'),
(8, 'Joaco Fernandez', 'joacofernandez@gmail.com', '$2a$10$98QhNaPjuU.lfgh9zgSgb.lT4aB4MU3UIVxJ5lZh9qxOo1hW7B0d6', '2012-06-29 00:00:00'),
(9, 'Cacu Luppi', 'cluppi@fibertel.com', '$2a$10$M/2u7IX5yfO5NN3ksZUql.tEwGPXmseyPrnmHLE.3UdQSjJkQCar6', '1992-08-13 00:00:00'),
(10, 'Tomi Lopez', 'tomas@lopezsaavedra.com', '$2a$10$AJqjmF4MOaoOjFn3s6kPeOQJ4SrNpu2LEAGRbN.1bngeGaHtMM8Tm', '2016-07-29 00:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `resenas`
--
ALTER TABLE `resenas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `resenas_FK` (`usuarioID`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `resenas`
--
ALTER TABLE `resenas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `resenas`
--
ALTER TABLE `resenas`
  ADD CONSTRAINT `resenas_FK` FOREIGN KEY (`usuarioID`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
