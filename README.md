# Pasos

## Crear los bounded context public y norris

### En la carpeta norris: 
  - Crear la carpeta components y el componente components/cards
  - Crear la carpeta model y el Entity (son los valores del API: id, description, etc)
  - Crear la carpeta services y los servicios services/norris-api}

  
### En la carpeta public:
  - Crear el componente footer-content
  - Crear el componente toolbar-content


### Carpeta norris/services

- .ts:
  - se encarga de hacer las llamadas al API
  - se usa el HttpClient
  - se usa el Observable
  - se definen los metodos que seran usados posteriormmente en el componente cards

## Carpeta norris/components/cards

- .ts:
  - se encarga de hacer las llamadas al servicio y de recibir los datos
  - se usa el OnInit
  - se usa el servicio norris-api

## Carpeta public/components/footer-content

- .html:
  - se encarga de mostrar el footer
  
- .css:
  - se encarga de darle estilo al footer
  
## Carpeta public/components/toolbar-content

- .html:
  - se encarga de mostrar el toolbar

- .css:
  - se encarga de darle estilo al toolbar.

## Para ejecutar:

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


