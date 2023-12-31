-- CreateTable
CREATE TABLE `areas_desempenio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(180) NOT NULL,
    `area_padre_id` INTEGER NULL,
    `perfil_id` INTEGER NULL,
    `creado_por` INTEGER NULL,
    `created_at` TIMESTAMP(0) NULL,
    `update_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `nombre`(`nombre`),
    INDEX `area_padre_id`(`area_padre_id`),
    INDEX `creado_por`(`creado_por`),
    INDEX `perfil_id`(`perfil_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoria_locaciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(180) NOT NULL,
    `categoria_padre_id` INTEGER NULL,
    `locacion_id` INTEGER NULL,
    `creado_por` INTEGER NULL,
    `created_at` TIMESTAMP(0) NULL,
    `update_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `nombre`(`nombre`),
    INDEX `categoria_padre_id`(`categoria_padre_id`),
    INDEX `creado_por`(`creado_por`),
    INDEX `locacion_id`(`locacion_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `imagenes_locaciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NULL,
    `descripcion` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `locacion_id` INTEGER NULL,
    `creado_por` INTEGER NULL,
    `created_at` TIMESTAMP(0) NULL,
    `update_at` TIMESTAMP(0) NULL,

    INDEX `creado_por`(`creado_por`),
    INDEX `locacion_id`(`locacion_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `imagenes_prestadores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NULL,
    `descripcion` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `perfil_id` INTEGER NULL,
    `creado_por` INTEGER NULL,
    `created_at` TIMESTAMP(0) NULL,
    `update_at` TIMESTAMP(0) NULL,

    INDEX `creado_por`(`creado_por`),
    INDEX `perfil_id`(`perfil_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `locaciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(180) NOT NULL,
    `descripcion` TEXT NULL,
    `ciudad` ENUM('Ushuaia', 'Tolhuin', 'Rio Grande') NULL,
    `jurisdiccion` ENUM('estatal', 'privado') NULL,
    `direccion` VARCHAR(255) NULL,
    `instagram` VARCHAR(255) NULL,
    `facebook` VARCHAR(255) NULL,
    `sitio_web` VARCHAR(255) NULL,
    `telefono` INTEGER NULL,
    `email` VARCHAR(255) NULL,
    `imagen_perfil` INTEGER NULL,
    `direccion_latitud` DOUBLE NULL,
    `direccion_longitud` DOUBLE NULL,
    `categoria_id` INTEGER NULL,
    `creado_por` INTEGER NULL,
    `created_at` TIMESTAMP(0) NULL,
    `update_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `nombre`(`nombre`),
    INDEX `categoria_id`(`categoria_id`),
    INDEX `creado_por`(`creado_por`),
    INDEX `imagen_perfil`(`imagen_perfil`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `perfil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `perfil` ENUM('Profesional', 'Productora Audiovisual', 'Comercio o Empresa Audiovisual', 'Comercio o empresa af├¡n') NULL,
    `descripcion` TEXT NULL,
    `user_id` INTEGER NULL,
    `nombre_entidad` VARCHAR(180) NOT NULL,
    `imagen_perfil` INTEGER NULL,
    `experiencia_laboral` TEXT NULL,
    `area_cobertura` ENUM('Ushuaia', 'Tolhuin', 'Rio Grande') NULL,
    `email` VARCHAR(255) NULL,
    `telefono` INTEGER NULL,
    `instagram` VARCHAR(255) NULL,
    `facebook` VARCHAR(255) NULL,
    `sitio_web` VARCHAR(255) NULL,
    `tipo_productora_id` INTEGER NULL,
    `areas_desempenio_id` INTEGER NULL,
    `tipo_servicio_id` INTEGER NULL,
    `tipo_actividad_id` INTEGER NULL,
    `idioma` ENUM('Ingl├®s', 'Lenguaje de se├▒as', 'Portugu├®s', 'Alem├ín', 'Franc├®s', 'Chino', 'Japon├®s') NULL,
    `created_at` TIMESTAMP(0) NULL,
    `update_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `nombre_entidad`(`nombre_entidad`),
    INDEX `areas_desempenio_id`(`areas_desempenio_id`),
    INDEX `imagen_perfil`(`imagen_perfil`),
    INDEX `tipo_actividad_id`(`tipo_actividad_id`),
    INDEX `tipo_productora_id`(`tipo_productora_id`),
    INDEX `tipo_servicio_id`(`tipo_servicio_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permisos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(180) NOT NULL,
    `descripcion` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `creado_por` INTEGER NULL,
    `created_at` TIMESTAMP(0) NULL,
    `update_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `nombre`(`nombre`),
    INDEX `creado_por`(`creado_por`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo_actividad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(180) NOT NULL,
    `tipo_padre_id` INTEGER NULL,
    `perfil_id` INTEGER NULL,
    `creado_por` INTEGER NULL,
    `created_at` TIMESTAMP(0) NULL,
    `update_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `nombre`(`nombre`),
    INDEX `creado_por`(`creado_por`),
    INDEX `perfil_id`(`perfil_id`),
    INDEX `tipo_padre_id`(`tipo_padre_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo_productora` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(180) NOT NULL,
    `tipo_padre_id` INTEGER NULL,
    `perfil_id` INTEGER NULL,
    `creado_por` INTEGER NULL,
    `created_at` TIMESTAMP(0) NULL,
    `update_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `nombre`(`nombre`),
    INDEX `creado_por`(`creado_por`),
    INDEX `perfil_id`(`perfil_id`),
    INDEX `tipo_padre_id`(`tipo_padre_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo_servicio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(180) NOT NULL,
    `tipo_padre_id` INTEGER NULL,
    `perfil_id` INTEGER NULL,
    `creado_por` INTEGER NULL,
    `created_at` TIMESTAMP(0) NULL,
    `update_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `nombre`(`nombre`),
    INDEX `creado_por`(`creado_por`),
    INDEX `perfil_id`(`perfil_id`),
    INDEX `tipo_padre_id`(`tipo_padre_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    `apellido` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `rol` ENUM('Administrador', 'Prestador', 'Contratante', 'Prestador Secundario') NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `update_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NULL,
    `apellido` VARCHAR(255) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(255) NULL,
    `rol` ENUM('Administrador', 'Prestador', 'Contratante', 'Prestador Secundario') NULL,
    `created_at` TIMESTAMP(0) NULL,
    `update_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

