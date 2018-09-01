var dataEquipos=[

  {
    nombre: "Nacional",
    urlimage: "",
    dt: "Almidon",
    juegadores: ["matias","carebata","panseroti","carroLoco","yucaFrita"],
    reseña: "El ",
    estadio: "",
    estrellas: "4",
  },
  {
    nombre: "America",
    urlimage: "",
    dt: "Americanito",
    juegadores: ["Caballon","Arepudo","Salchipapa","Mazamorra","Rosconsito"],
    reseña: "El americano",
    estadio: "",
    estrellas: "2",
  }



]


var selEquipos = document.getElementById("equipos");
var nomEquipo = document.getElementById("nombre");
var imagenEquipo = document.getElementById("imgEquipo");
var imagenesEquipos = ["logoNacional.png","logoAmerica.png","logoMillonarios.png"]

selEquipos.onchange = function ()
{
 //document.getElementById("nombre").innerHTML = this.value;
//console.log();
nomEquipo.innerHTML= this.options[this.selectedIndex].text;
imagenEquipo.setAttribute("src",imagenesEquipos[this.selectedIndex]);

}