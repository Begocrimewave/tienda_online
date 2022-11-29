# Recuperar todos los productos

- URL: GET /api/products
  - Responder con status 200 X
  - Respuesta debe tener formato JSON X
  - Respuesta debe ser un array de productos

# Crear un producto

- URL: POST /api/products
  - Responde con status 200
  - Respuesta debe tener formato JSON
  - Comprobar si tiene \_id
  - Comprobar si el producto en la BD tiene el mismo nombre con el que lo hemos insertado

# Actualizar un producto

- OBJETIVO: Lanzar una peticon pasandole el ID del producto a editar y los datos que quiero editar
- PREVIO: Necesito crear un objeto para poder editarlo despues
- FINAL: Borraremos ese objeto

- URL: /api/products/:productId
- Status 200 y Content-Type application/json
- Comprobamos que los campos que modificamos, se modifican en la BD

- CREAR LA URL /api/products/:productId
- Metodo findbyIdAndUpdate(ID, OBJ para editar)
  - De donde saco el ID?
  - De donde saco el objeto para editar?
- Responder con un JSON con lo que devuelva el metodo anterior
- La ultima prueba FALLA

# Borrar un producto

- Una url que me permita borrar un producto
- ULR: /api/products/:productID
  - PREVIO: Creamos un producto en la BD
  - FINAL: Borramos el prod creado por si no funciona la prueba
- Comprobamos si la URL existe
- Comprobamos si el producto sgue en la BD
