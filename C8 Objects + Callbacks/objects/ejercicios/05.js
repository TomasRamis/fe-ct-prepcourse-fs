const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:
  objeto.nuevaPropiedad = { tamaño: "grande", color: "rojo", gusto: "amargo", 
  info: function () {console.log(prop);}}
  var todasPropiedades = Object.keys(objeto);

  console.log(todasPropiedades);
  return todasPropiedades;
}

module.exports = listarPropiedades;
 