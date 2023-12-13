## <0.0.1> - <08/11/2023 - 15/11/2023>

### Sprint learnings

# Configuración de react/typescript desde consola.
# Aprendí a realizar interacciones en figma, terminando así el prototipo de alta fidelidad.
# Estuve leyendo de cómo usar HTML y CSS con REACT
# Configuré ESLint para REACT/Typescript
# Cree/configuré package.json
# Configuré jest
# Definí jerarquías de componentes
# Leí documentación de PROPS

### Added

# Se creo archivo CHANGELOG.md
# Se crearon los archivos necesarios para usar react y typescript
# Archivos de:
# home.jsx
# home.css
# jest.config.js
# .eslintrc.json
# Archivos en carpeta assets (background, buttonBack, palmolita, palmolitas, palmolita)

### Changed

### Fixed

### Removed


## <0.0.2> - <15/11/2023 - 22/11/2023>

### Sprint learnings

# Creación de componentes de vista 1
# Diseño de CSS de vista 1
# Se hizo la conexion a la API, de forma exitosa (comprobando por console.log la informacion recibida)
# Uso de interface para definir los tipos de props a recibir
# Pude presentar el componente de PosterMovie y el GridMovies, me marca un error que no entiendo bien, pero presenta imágenes e información
# Diferencias entre tsx y ts
# Cambié paleta de colores
# Resolví el error que me marcaba de los componentes
# Diseño de CSS para el poster de la pelicula
# Empezando a ver la manera de paginar

### Added

# Archivos de componentes (menuBar, gridMovies, navBar) 
# Archivos de CSS de los componentes
# Archivo de conexión a la API

### Changed

# Archivo App.tsx
# Archivo de imagen del logo

### Fixed

### Removed

# Borré archivo de app.css 

## <0.0.3> - <22/11/2023 - 29/11/2023>

### Sprint learnings

# Se agregó la función para paginar, por alguna razón ya no agarro el archivo de CSS
# Se instaló testing-library/react
# Se arreglo lo del CSS de los botones
# Se configuro de nuevo JEST, ya se puede hacer testing

### Added

# Archivo pagination.tsx
# Carpeta para almacenar los archivos de testing
# Se agrego el archivo movieGrid.test.ts de testing

### Changed

# Cambié la función de conexión a la API, para ocultar mi API KEY (connectAPI.ts)
# Cambié a App.tsx el llamado a la función de paginación (inicialmente estaba en GridMovies.tsx) para dejar solo la lógica de presentar los posters ahí

### Fixed

### Removed


## <0.0.3> - <29/11/2023 - 06/12/2023>

### Sprint learnings

# Mas sobre estados y hooks
# Funciona ahora los filtros por genero, se respeta junto con la paginación el filtro aplicado.
# Funciona ahora el ordenamiento alfabetico en base al título de la película

### Added

# Archivo barStyle.css (para los estilos de las barras de menu y navegacion)
# Archivo movieStyle.css (para los estilos del grid y poster)

### Changed

# Cambio el archivo App.tsx (aqui va el reconocimiento de cambio de estado para el menu de filtro)
# Cambio el archivo MenuBar.tsx se agrego la interfaz para el cambio en el menu
# Cambio el archivo GridMovies.tsx ya que de aqui se manda llamar la funcion de conectividad a la API para enviar los parametros de los generos escogidos.
# Cambio el archivo connectAPI, ahora recibe el parametro del genero escogido (se hace una combinación del genero por default, que son las animadas, y  el genero del cual se quiere filtrar)
# Cambio el archivo connectAPI, ahora recibe el parametro del orden escogido alfabeticamente

### Fixed

# No se ha arreglado para realizar testing

### Removed

# Archivos de css (footer, navBar, menuBar, posterMovie y gridMovie)(unifique archivos)
# footerInfo.tsx (era muy poco codigo)

## <0.0.4> - <07/12/2023 - 13/12/2023>

### Sprint learnings

# Se creo segunda vista del detalle de película

### Added

# Archivo DetailMovie.tsx, contiene el componente del detalle de la pelicula y la función para traer la información de la API
# Se instaló ReactRouter para hacer el enrutamiento entre las vistas

### Changed

# Cambio el archivo movieStyle.css se agregaron los estilos para detailMovie


### Fixed

# No se ha arreglado para realizar testing

### Removed
