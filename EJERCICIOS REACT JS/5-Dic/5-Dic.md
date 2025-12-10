# Día 4 – Formularios + useEffect + Comunicación Padre-Hijo

## Ejercicio 1 – Inputs controlados en `registroUsuarioExercise`

Ahora mismo los ```<input>``` solo usan onChange, pero no tienen value.
El objetivo es convertirlos en inputs controlados.

Pasos:
1. Abre src/App.jsx de registroUsuarioExercise.
2. Añade value={username}, value={password}, value={repassword} en los inputs.
3. No cambies la lógica de useState ni onChange.

---

## Ejercicio 2 – Mensajes de error más claros en `userRegister`

Actualmente la validación de loc campos de los inputs muestra un mensaje genérico.
Queremos mensajes personalizados según el fallo detectado.

Pasos:
1. Modificar checkFields() para comprobar:
   - username < 3 no está permitido
   - username con espacios no esta permitido
   - password < 8 no está permitido
   - password !== secondPassword
   - si todo ok → “Todo correcto”

---

## Ejercicio 3 – Mensaje cuando no hay invitados en `useEffectProject`

Cuando la búsqueda no devuelva resultados, mostrar el texto:
"No hay invitados que coincidan con la búsqueda"
en lugar de un listado vacío.

---

## Ejercicio 4 – Input controlado + botón “Limpiar búsqueda”

1. Añadir value={searchLive} al input.
2. Añadir botón “Limpiar búsqueda” que ponga searchLive en ''.
3. liveSearch() ya gestiona el reinicio de la lista.

---

## Ejercicio 5 – Mostrar más datos y confirmar borrado (`useEffectProjectHijoPadre`)

1. Mostrar `fechaHormiguero` y `fechaRevuelta` además del nombre.  
2. Antes de eliminar, confirmar con `window.confirm('¿Seguro que quieres eliminar este invitado?')`. Esto devolverá un booleano true o false.  
3. Si se confirma, llamar a `deleteInvitado(invitado.id)`.
