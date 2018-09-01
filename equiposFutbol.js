var dataEquipos=[

  {
    estrellitas: "🌟🌟🌟🌟🌟",
    nombre: "Nacional",
    urlimage: "imagenes/logoNacional.png",
    dt: "Almidon Nacional",
    juegadores: ["matias","carebata","panseroti","carroLoco","yucaFrita"],
    reseña: "El ",
    estadio: "Estadio Atanasio Girardot",
    estrellas: "imagenes/eNacional.png",
  },
  {
    estrellitas: "🌟🌟🌟",
    nombre: "America",
    urlimage: "imagenes/logoAmerica.png",
    dt: "Americanito DT",
    juegadores: ["Caballon","Arepudo","Salchipapa","Mazamorra","Rosconsito"],
    reseña: "El americano",
    estadio: "Estadio Pascual Guerrero",
    estrellas: "imagenes/eAmerica.png",
  },
  {
    estrellitas: "🌟",
    nombre: "Millonarios",
    urlimage: "imagenes/logoMillonarios.png",
    dt: "Millonariesito DT",
    juegadores: ["Millonariesito1","Millonariesito2","Millonariesito3","Millonariesito4","Millonariesito5"],
    reseña: "El americano",
    estadio: "Estadio El Campín",
    estrellas: "imagenes/eMillonarios.png",
  },
  {
    estrellitas: "🌟🌟🌟🌟🌟🌟🌟🌟",
    nombre: "Tolima",
    urlimage: "imagenes/logoTolima.png",
    dt: "Tolimita DT",
    juegadores: ["Tolimon","Tolimudo","Tolinsote","Totoludo","Tokimon"],
    reseña: "El americano",
    estadio: "Estadio Manuel Murillo Toro",
    estrellas: "imagenes/eTolima.png",
  }
  ,
  {
    estrellitas: "🌟🌟🌟🌟",
    nombre: "Medellin",
    urlimage: "imagenes/logoMedellin.png",
    dt: "Medellinsito DT",
    juegadores: ["Medellino","Medilludo","Medillunsote","Medillinito","Medillonote"],
    reseña: "El americano",
    estadio: "El medillinsito Estadio Atanasio Girardot",
    estrellas: "imagenes/eMedellin.png",
  }
  ,
  {
    estrellitas: "🌟🌟",
    nombre: "Pasto",
    urlimage: "imagenes/logoPasto.png",
    dt: "Pastusito DT",
    juegadores: ["Paston","Pastusin","Pastico","Pastisal","Pastote"],
    reseña: "El americano",
    estadio: "Estadio Departamental Libertad",
    estrellas: "imagenes/ePasto.png",
  }



]


var selEquipos = document.getElementById("equipos");
var nomEquipo = document.getElementById("nombre");
var imagenEquipo = document.getElementById("imgEquipo");
var imagenesEquipos = []
var dt=document.getElementById("dt");
var jugadores=document.getElementById("jugadores");
var estadio=document.getElementById("estadio");
var estrellas=document.getElementById("estrellasEquipo");
var estrellitas=document.getElementById("estrellitas");

selEquipos.onchange = function ()
{
 //document.getElementById("nombre").innerHTML = this.value;
//console.log();
nomEquipo.innerHTML= this.options[this.selectedIndex].text;
imagenEquipo.setAttribute("src",dataEquipos[this.selectedIndex].urlimage);
dt.innerHTML=dataEquipos[this.selectedIndex].dt;
jugadores.innerHTML=dataEquipos[this.selectedIndex].juegadores;
estadio.innerHTML=dataEquipos[this.selectedIndex].estadio;
estrellitas.innerHTML=dataEquipos[this.selectedIndex].estrellitas;

}

var recorrer = function(item){
  console.log(item.dt);
}

function recorrer2 (item){
  console.log(item.estadio);
}

//dataEquipos.forEach(recorrer);
//dataEquipos.forEach(recorrer2);
console.log(dataEquipos);

dataEquipos.push({
  estrellitas: "🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟",
  nombre: "Popayan",
    urlimage: "imagenes/logoPopayan.jpg",
    dt: "Pastusito DT",
    juegadores: ["Paston","Pastusin","Pastico","Pastisal","Pastote"],
    reseña: "El americano",
    estadio: "Estadio Departamental Libertad",
    estrellas: "imagenes/ePasto.png",
 });

 