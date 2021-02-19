const modo = 'DESARROLLO';

const datos_desarrollo = {
    modo: "DESARROLLO",
    url_imagenes: "https://adcontur.com"
};

const datos_produccion = {
    modo: "PRODUCCION",
    url_imagenes: "https://adcontur.com"
};



const datos = modo == 'DESARROLLO' ? datos_desarrollo : modo == 'PRODUCCION' ? datos_produccion : {};
module.exports = datos;