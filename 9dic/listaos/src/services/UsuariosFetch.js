export const usuario = [];

export const addUsuario = (userData) => {
    usuario.push(userData);
    return getUsuario();
}

export const getUsuario = () => {
    return usuario[0];
}

export const editUser = (userData) => {
    usuario.pop();
    usuario.push(userData);
    return getUsuario;
}