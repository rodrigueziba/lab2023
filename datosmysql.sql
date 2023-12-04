USE lab2023;

-- Insertar datos en la tabla users
INSERT INTO users (nombre, apellido, email, password, rol, created_at, update_at) 
VALUES 
  ('John', 'Doe', 'john.doe@example.com', 'password123', 'Administrador', NOW(), NOW()),
  ('Jane', 'Doe', 'jane.doe@example.com', 'password456', 'Prestador', NOW(), NOW());

-- Insertar datos en la tabla permisos
INSERT INTO permisos (nombre, descripcion, link, creado_por, created_at, update_at) 
VALUES 
  ('Permiso1', 'Descripción de Permiso1', '/ruta1', 1, NOW(), NOW()),
  ('Permiso2', 'Descripción de Permiso2', '/ruta2', 1, NOW(), NOW());

-- Insertar datos en la tabla locaciones
INSERT INTO locaciones (nombre, descripcion, ciudad, jurisdiccion, direccion, instagram, facebook, sitio_web, telefono, email, imagen_perfil, direccion_latitud, direccion_longitud, categoria_id, creado_por, created_at, update_at) 
VALUES 
  ('Locacion1', 'Descripción de Locacion1', 'Ushuaia', 'estatal', 'Dirección1', 'instagram1', 'facebook1', 'sitio_web1', 123456789, 'email1@example.com', 1, -54.801912, -68.302951, 1, 1, NOW(), NOW()),
  ('Locacion2', 'Descripción de Locacion2', 'Tolhuin', 'privado', 'Dirección2', 'instagram2', 'facebook2', 'sitio_web2', 987654321, 'email2@example.com', 2, -54.489827, -67.044378, 2, 1, NOW(), NOW());

-- Insertar datos en la tabla categoria_locaciones
INSERT INTO categoria_locaciones (nombre, categoria_padre_id, locacion_id, creado_por, created_at, update_at) 
VALUES 
  ('Categoria1', NULL, 1, 1, NOW(), NOW()),
  ('Categoria2', NULL, 2, 1, NOW(), NOW());

-- Insertar datos en la tabla imagenes_locaciones
INSERT INTO imagenes_locaciones (nombre, descripcion, link, locacion_id, creado_por, created_at, update_at) 
VALUES 
  ('Imagen1', 'Descripción de Imagen1', '/imagen1.jpg', 1, 1, NOW(), NOW()),
  ('Imagen2', 'Descripción de Imagen2', '/imagen2.jpg', 2, 1, NOW(), NOW());

-- Insertar datos en la tabla imagenes_prestadores
INSERT INTO imagenes_prestadores (nombre, descripcion, link, perfil_id, creado_por, created_at, update_at) 
VALUES 
  ('ImagenPrestador1', 'Descripción de ImagenPrestador1', '/imagen_prestador1.jpg', 1, 1, NOW(), NOW()),
  ('ImagenPrestador2', 'Descripción de ImagenPrestador2', '/imagen_prestador2.jpg', 2, 1, NOW(), NOW());

-- Insertar datos en la tabla perfil
INSERT INTO perfil (perfil, descripcion, user_id, nombre_entidad, imagen_perfil, experiencia_laboral, area_cobertura, email, telefono, instagram, facebook, sitio_web, tipo_productora_id, areas_desempenio_id, tipo_servicio_id, tipo_actividad_id, idioma, created_at, update_at) 
VALUES 
  ('Profesional', 'Descripción de Profesional', 1, 'Entidad1', 1, 'Experiencia1', 'Ushuaia', 'email1@example.com', 123456789, 'instagram1', 'facebook1', 'sitio_web1', 1, 1, 1, 1, 'Inglés', NOW(), NOW()),
  ('Productora Audiovisual', 'Descripción de Productora Audiovisual', 2, 'Entidad2', 2, 'Experiencia2', 'Tolhuin', 'email2@example.com', 987654321, 'instagram2', 'facebook2', 'sitio_web2', 2, 2, 2, 2, 'Lenguaje de señas', NOW(), NOW());

-- Insertar datos en la tabla tipo_productora
INSERT INTO tipo_productora (nombre, tipo_padre_id, perfil_id, creado_por, created_at, update_at) 
VALUES 
  ('TipoProductora1', NULL, 1, 1, NOW(), NOW()),
  ('TipoProductora2', NULL, 2, 1, NOW(), NOW());

-- Insertar datos en la tabla areas_desempenio
INSERT INTO areas_desempenio (nombre, area_padre_id, perfil_id, creado_por, created_at, update_at) 
VALUES 
  ('Area1', NULL, 1, 1, NOW(), NOW()),
  ('Area2', NULL, 2, 1, NOW(), NOW());

-- Insertar datos en la tabla tipo_servicio
INSERT INTO tipo_servicio (nombre, tipo_padre_id, perfil_id, creado_por, created_at, update_at) 
VALUES 
  ('TipoServicio1', NULL, 1, 1, NOW(), NOW()),
  ('TipoServicio2', NULL, 2, 1, NOW(), NOW());

-- Insertar datos en la tabla tipo_actividad
INSERT INTO tipo_actividad (nombre, tipo_padre_id, perfil_id, creado_por, created_at, update_at) 
VALUES 
  ('TipoActividad1', NULL, 1, 1, NOW(), NOW()),
  ('TipoActividad2', NULL, 2, 1, NOW(), NOW());
