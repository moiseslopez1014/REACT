# Ejercicio: Gestión básica de un usuario en React

En este ejercicio deberás implementar un componente **`HomePage.jsx`** que gestione el registro, visualización, edición y eliminación de un único usuario. La aplicación tendrá **tres estados principales**, cada uno con un comportamiento específico.

---

## Estado 1. Sin usuario registrado

Cuando la aplicación se inicia **no existe ningún usuario**, por lo que la vista debe mostrar:

### **Formulario de creación de usuario**

Con los siguientes campos:

- `username`
- `password`
- `email`

Un botón inferior:

- **Crear usuario**

### **Bloque de información**

Debajo del formulario debe mostrarse el mensaje:

> **No hay usuario registrado**

### **Acción al crear usuario**

Al pulsar **Crear usuario**:

- Se guardan los datos en el estado.
- La vista cambia al **Estado de información del usuario**. (**Estado 2**)

---

## Estado 2. Información del usuario — Vista en modo lectura

Cuando ya existe un usuario registrado, debe mostrarse:

### **Datos del usuario**

En modo solo lectura (texto, no inputs):

- username
- password
- email

### **Botón disponible**

- **Editar**

### **Acción al pulsar “Editar”**

La vista cambia al **Estado de edición del usuario**. (**Estado 3**)

---

## Estado 3. Edición del usuario — Vista editable

En este estado, los datos del usuario deben mostrarse en **inputs editables**:

- `username`
- `password`
- `email`

### **Botones disponibles**

- **Guardar**
  - Actualiza los datos del usuario con los valores editados.
  - Vuelve al modo lectura.(**Estado 2**)
- **Cancelar**
  - Descarta los cambios.
  - Vuelve al modo lectura mostrando los datos previos.(**Estado 2**)
- **Eliminar**
  - Borra el usuario del estado.
  - Devuelve la vista al **Estado inicial** (formulario + mensaje “No hay usuario registrado”). (**Estado 1**)

---

## Requisitos

- Implementar el comportamiento en **React** usando **hooks** (`useState`).
- Los tres estados pueden gestionarse con:
  - un booleano,
  - varios estados,
  - o una variable `status` (por ejemplo: `"initial"`, `"info"`, `"edit"`).
- El componente principal debe llamarse **`HomePage.jsx`**.
