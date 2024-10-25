# Taller de Desarrollo en Angular

El objetivo es con Angular 18 utilizando PrimeNG. realizar las siguientes tareas teniendo en cuenta las siguientes indicaciones:

- Aplicar buenas prácticas de desarrollo.
- Utilizar todos los patrones de desarrollo que consideren necesarios.
- Manejo de Excepciones.

## Ejercicio

El ejercicio consiste en desarrollar las siguientes capacidades:

1. **Crear un formulario para registrar clientes**
   - Simular el endpoint del backend en caso de ser necesario.

2. **Crear un formulario para consultar clientes**
   - Permitir buscar por cualquier coincidencia de nombre o apellido (opcional).
   - Mostrar la consulta en un componente que permita paginar de 10 registros y ordenar.
   - Simular el endpoint del backend en caso de ser necesario.

3. **Crear las pruebas unitarias**
   - Utilizar Jasmine y Karma.
   - Lograr una cobertura del 90% (simular el endpoint del backend en caso de ser necesario).

## Datos del Cliente

Los datos que se registran son los siguientes:

- Identificación
- Nombre
- Apellidos
- Email
- Celular
- Dirección

## Pasos para Compilar y Ejecutar la Aplicación

1. **Clonar el repositorio**:
```bash
git clone https://github.com/Alberto-Arias-x64/q-vision.git
cd ./q-vision/
```
2. **Instalar las dependencias**:
```bash
npm install
```
3.  **Compilar la aplicación**:
```bash
npm run build
```
4. **Ejecutar la aplicación**:
```bash
npm start
```

5. **Acceder a la aplicación**: Abrir un navegador y visitar http://localhost:4200.

## Buenas Prácticas

- Uso de código descriptivo y en ingles
- Aplicación de principios solid
- manejo de errores
