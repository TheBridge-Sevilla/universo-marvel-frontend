# universo-marvel-front
Repositorio del frontend del proyecto de tripulaciones The Bridge

# [Universo-Marvel-Frontend](http://localhost:3050/) 

Repositorio destinado a frontend development del proyecto de tripulaciones de The Bridge. Proyecto creado conjuntamente por el equipo de The Bridge Part Time Sevilla mayo 22.

### Universo Marvel <img  src="https://cdn.icon-icons.com/icons2/701/PNG/512/Marvel_icon-icons.com_61667.png" width="100" align="center"></img>

# Introducción

La aplicación nos va a permitir explorar los personajes del universo Marvel, tanto su historia, comics en los que aparece ,incluso valorarlos y dejar un comentario sobre él.

Tendrás que resgistrarte para poder hacer valoraciones y comentarios de tus personajes favoritos.

Pon a prueba tus inquietudes por los personajes de Marvel que ni siquiera sabías que existían. Este es tu sitio para saber todo sobre ellos.


Pon a prueba tus conocimientos, disfruta de nuestro entorno gráfico y conoce como nunca antes a tus personajes favoritos.

# Despliegue

###Monta tu primer proyecto Vite:

`npm create vite@latest`

También puedes especificar directamente el nombre del proyecto y la plantilla que deseas usar a través de las opciones de línea de comandos adicionales. Por ejemplo, para montar un proyecto de Vite + React, ejecuta:

`npm create vite@latest my-react-app --template react`

 Plantillas admitida: vanilla, vanilla-ts, vue, vue-ts, react, react-ts, preact, preact-ts, lit, lit-ts, svelte, svelte-ts.

 ### Iniciar

 Para iniciar el proyecto:

`npm run dev`
ó
`npx vite`

### Variables del entorno

Vite usa `dotenv` para cargar variables de entorno adicionales desde los siguientes archivos en su directorio de entorno:
`.env: cargado en todos los casos`
`.env.local: cargado en todos los casos, ignorado por git`
`.env.[mode]:solo se carga en el modo especificado`
`.env.[mode].local: solo se carga en el modo especificado, ignorado por git`

Para evitar la filtración accidental de variables de entorno al cliente, solo las variables con el prefijo `VITE_` se exponen a su código procesado por Vite, por ejemplo, las siguientes variables de entorno:

`console.log(import.meta.env.VITE_SOME_KEY \\ 123`
`console.log(import.meta.env.DB_PASSWORD) \\ undefined`

Ejemplo de para una URL de backend:

`VITE_BACKEND_URL:"url"`



### Tecnologia utilizada.


| Tecnología | Utilidad |
| ------------------------------------ | --------- |
<img align="center" src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" width="100" alt="Jest"></p>|React --- React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.|</p>
<img align="center" src="https://vitejs.dev/logo-with-shadow.png" width="100" alt="Jest"></p>|Vite --- Vite (palabra en francés para "rápido", pronunciado como /vit/ , como "veet") es una herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos.|</p>
<img align="center" src="https://ih1.redbubble.net/image.404023256.1965/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" width="100" alt="Jest"><p>|Marco de prueba de JavaScript |</p>
<img align="center" src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo-700x394.png" width="100" alt="gitHub"><p>|Sistema de control de versiones |</p>
<img align="center" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/eslint/eslint.png" width="100" alt="eslint"><p>|Análisis de código estático |<p>


# Otras fuentes.

### Información.

 Extraida de la APi [Universo Marvel](https://developer.marvel.com/).<img align="center" src="https://cdn.icon-icons.com/icons2/2845/PNG/512/marvel_logo_icon_181411.png" width="100" alt="Api Marvel"> 

### Traducciones.
Traducciones realizadas a través de [DeepL](https://www.deepl.com/es/translator).<img align="center" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/DeepL_logo.svg" width="100" alt="Traductor DeepL">

### Estilos.
Componentes y diseños utilizando [Bootstrap](https://react-bootstrap.github.io/).<img align="center" src="https://i.imgur.com/DRUiMyM.png" width="100" alt="Bootstrap">


Interfaz de usuario desarrollado con [Material-UI](https://mui.com/).<img align="center" src="https://mui.com/static/logo.png" width="50" alt="Bootstrap">
