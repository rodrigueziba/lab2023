drop DATABASE lab2023;
create DATABASE lab2023;
CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255),
  `apellido` varchar(255),
  `email` varchar(191) UNIQUE NOT NULL,
  `password` varchar(255),
  `rol` ENUM ('Administrador', 'Prestador', 'Contratante', 'Prestador Secundario'),
  `created_at` timestamp,
  `update_at` timestamp
);

CREATE TABLE `permisos` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(180) UNIQUE NOT NULL,
  `descripcion` varchar(255),
  `link` varchar(255),
  `creado_por` int,
  `created_at` timestamp,
  `update_at` timestamp
);

CREATE TABLE `locaciones` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(180) UNIQUE NOT NULL,
  `descripcion` text,
  `ciudad` ENUM ('Ushuaia', 'Tolhuin', 'Rio Grande'),
  `jurisdiccion` ENUM ('estatal', 'privado'),
  `direccion` varchar(255),
  `instagram` varchar(255),
  `facebook` varchar(255),
  `sitio_web` varchar(255),
  `telefono` int,
  `email` varchar(255),
  `imagen_perfil` int,
  `direccion_latitud` double,
  `direccion_longitud` double,
  `categoria_id` int,
  `creado_por` int,
  `created_at` timestamp,
  `update_at` timestamp
);

CREATE TABLE `categoria_locaciones` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(180) UNIQUE NOT NULL,
  `categoria_padre_id` int,
  `locacion_id` int,
  `creado_por` int,
  `created_at` timestamp,
  `update_at` timestamp
);

CREATE TABLE `imagenes_locaciones` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255),
  `descripcion` varchar(255),
  `link` varchar(255),
  `locacion_id` int,
  `creado_por` int,
  `created_at` timestamp,
  `update_at` timestamp
);

CREATE TABLE `imagenes_prestadores` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255),
  `descripcion` varchar(255),
  `link` varchar(255),
  `perfil_id` int,
  `creado_por` int,
  `created_at` timestamp,
  `update_at` timestamp
);

CREATE TABLE `perfil` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `perfil` ENUM ('Profesional', 'Productora Audiovisual', 'Comercio o Empresa Audiovisual', 'Comercio o empresa afín'),
  `descripcion` text,
  `user_id` int,
  `nombre_entidad` varchar(180) UNIQUE NOT NULL,
  `imagen_perfil` int,
  `experiencia_laboral` text,
  `area_cobertura` ENUM ('Ushuaia', 'Tolhuin', 'Rio Grande'),
  `email` varchar(255),
  `telefono` int,
  `instagram` varchar(255),
  `facebook` varchar(255),
  `sitio_web` varchar(255),
  `tipo_productora_id` int,
  `areas_desempenio_id` int,
  `tipo_servicio_id` int,
  `tipo_actividad_id` int,
  `idioma` ENUM ('Ingles', 'Lenguaje de senias', 'Portugues', 'Aleman', 'Frances', 'Chino', 'Japones'),
  `created_at` timestamp,
  `update_at` timestamp
);

CREATE TABLE `tipo_productora` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(180) UNIQUE NOT NULL,
  `tipo_padre_id` int,
  `perfil_id` int,
  `creado_por` int,
  `created_at` timestamp,
  `update_at` timestamp
);

CREATE TABLE `areas_desempenio` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(180) UNIQUE NOT NULL,
  `area_padre_id` int,
  `perfil_id` int,
  `creado_por` int,
  `created_at` timestamp,
  `update_at` timestamp
);

CREATE TABLE `tipo_servicio` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(180) UNIQUE NOT NULL,
  `tipo_padre_id` int,
  `perfil_id` int,
  `creado_por` int,
  `created_at` timestamp,
  `update_at` timestamp
);

CREATE TABLE `tipo_actividad` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(180) UNIQUE NOT NULL,
  `tipo_padre_id` int,
  `perfil_id` int,
  `creado_por` int,
  `created_at` timestamp,
  `update_at` timestamp
);

ALTER TABLE `permisos` ADD FOREIGN KEY (`creado_por`) REFERENCES `users` (`id`);

ALTER TABLE `locaciones` ADD FOREIGN KEY (`imagen_perfil`) REFERENCES `imagenes_locaciones` (`id`);

ALTER TABLE `locaciones` ADD FOREIGN KEY (`categoria_id`) REFERENCES `categoria_locaciones` (`id`);

ALTER TABLE `locaciones` ADD FOREIGN KEY (`creado_por`) REFERENCES `users` (`id`);

ALTER TABLE `categoria_locaciones` ADD FOREIGN KEY (`categoria_padre_id`) REFERENCES `categoria_locaciones` (`id`);

ALTER TABLE `categoria_locaciones` ADD FOREIGN KEY (`locacion_id`) REFERENCES `locaciones` (`id`);

ALTER TABLE `categoria_locaciones` ADD FOREIGN KEY (`creado_por`) REFERENCES `users` (`id`);

ALTER TABLE `imagenes_locaciones` ADD FOREIGN KEY (`locacion_id`) REFERENCES `locaciones` (`id`);

ALTER TABLE `imagenes_locaciones` ADD FOREIGN KEY (`creado_por`) REFERENCES `users` (`id`);

ALTER TABLE `imagenes_prestadores` ADD FOREIGN KEY (`perfil_id`) REFERENCES `perfil` (`id`);

ALTER TABLE `imagenes_prestadores` ADD FOREIGN KEY (`creado_por`) REFERENCES `users` (`id`);

ALTER TABLE `perfil` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `perfil` ADD FOREIGN KEY (`imagen_perfil`) REFERENCES `imagenes_prestadores` (`id`);

ALTER TABLE `perfil` ADD FOREIGN KEY (`tipo_productora_id`) REFERENCES `tipo_productora` (`id`);

ALTER TABLE `perfil` ADD FOREIGN KEY (`areas_desempenio_id`) REFERENCES `areas_desempenio` (`id`);

ALTER TABLE `perfil` ADD FOREIGN KEY (`tipo_servicio_id`) REFERENCES `tipo_servicio` (`id`);

ALTER TABLE `perfil` ADD FOREIGN KEY (`tipo_actividad_id`) REFERENCES `tipo_actividad` (`id`);

ALTER TABLE `tipo_productora` ADD FOREIGN KEY (`tipo_padre_id`) REFERENCES `tipo_productora` (`id`);

ALTER TABLE `tipo_productora` ADD FOREIGN KEY (`perfil_id`) REFERENCES `perfil` (`id`);

ALTER TABLE `tipo_productora` ADD FOREIGN KEY (`creado_por`) REFERENCES `users` (`id`);

ALTER TABLE `areas_desempenio` ADD FOREIGN KEY (`area_padre_id`) REFERENCES `areas_desempenio` (`id`);

ALTER TABLE `areas_desempenio` ADD FOREIGN KEY (`perfil_id`) REFERENCES `perfil` (`id`);

ALTER TABLE `areas_desempenio` ADD FOREIGN KEY (`creado_por`) REFERENCES `users` (`id`);

ALTER TABLE `tipo_servicio` ADD FOREIGN KEY (`tipo_padre_id`) REFERENCES `tipo_servicio` (`id`);

ALTER TABLE `tipo_servicio` ADD FOREIGN KEY (`perfil_id`) REFERENCES `perfil` (`id`);

ALTER TABLE `tipo_servicio` ADD FOREIGN KEY (`creado_por`) REFERENCES `users` (`id`);

ALTER TABLE `tipo_actividad` ADD FOREIGN KEY (`tipo_padre_id`) REFERENCES `tipo_actividad` (`id`);

ALTER TABLE `tipo_actividad` ADD FOREIGN KEY (`perfil_id`) REFERENCES `perfil` (`id`);

ALTER TABLE `tipo_actividad` ADD FOREIGN KEY (`creado_por`) REFERENCES `users` (`id`);
