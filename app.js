let ciudad = [
{
    nombre: "Cali",
    habitantes: 2300000,
    metrosSobreNivelMar: 1018,
    temperaturaPromedio: 25,
    coordenadas: [3.4516, -76.5320],
    sitiosInteres: {
        "01": "Parque del Perro",
        "02": "Zoológico de Cali"
    }
},
{
    nombre: "Bogotá",
    habitantes: 8000000,
    metrosSobreNivelMar: 2640,
    temperaturaPromedio: 14,
    coordenadas: [4.7110, -74.0721],
    sitiosInteres: {
        "01": "Monserrate",
        "02": "Jardín Botánico"
    }
},
{
    nombre: "Medellín",
    habitantes: 2600000,
    metrosSobreNivelMar: 1495,
    temperaturaPromedio: 22,
    coordenadas: [6.2442, -75.5812],
    sitiosInteres: {
        "01": "Plaza Botero",
        "02": "Parque Arví"
    }
}
];
const resultado = document.getElementById("resultado");
function mostrarCiudad(lista = ciudad){
resultado.innerHTML = "";
for (let i =0;i<lista.length;i++)
{
resultado.innerHTML += `
<tr>
    <td>${lista[i].nombre}</td>
    <td>${lista[i].habitantes}</td>
    <td>${lista[i].metrosSobreNivelMar}</td>
    <td>${lista[i].temperaturaPromedio}</td>
    <td>${lista[i].coordenadas}</td>
    <td>${Object.values(lista[i].sitiosInteres).join("<br>")}</td>
</tr>`
}
};
mostrarCiudad();