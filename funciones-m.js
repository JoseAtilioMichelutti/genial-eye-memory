/*Primer bloque*/
legendpersonales = document.getElementById('personales');
uldatos = document.getElementById('datos');

/*Muestra los datos personales*/
legendpersonales.addEventListener('click', function(){
    mostrar(uldatos, legendpersonales, 'datos personales');
});

/*Oculta los datos personales*/
uldatos.addEventListener('click', function(){
    ocultar(uldatos, legendpersonales, 'datos personales');
});

/*Segundo bloque*/
legendexperiencia = document.getElementById('experiencia');
ulpuestos = document.getElementById('puestos');

/*Muestra la experiencia laboral.*/
legendexperiencia.addEventListener('click', function(){
    mostrar(ulpuestos, legendexperiencia, 'experiencia laboral');
});

/*Oculta la experiencia laboral.*/
ulpuestos.addEventListener('click', function(){
    ocultar(ulpuestos, legendexperiencia, 'experiencia laboral');
});

/*Tercer bloque*/
legendestudios = document.getElementById('estudios');
ulformacion = document.getElementById('formacion');

/*Muestra los estudios.*/
legendestudios.addEventListener('click', function(){
    mostrar(ulformacion, legendestudios, 'estudios');
});
/*Oculta los estudios*/
ulformacion.addEventListener('click', function(){
    ocultar(ulformacion, legendestudios, 'estudios');
});

/*Definicion de funciones*/
/*Haciendo click sobre la etiqueta, se muestra el contenido del ul*/
function mostrar(ul, legend, categoria){
    ul.style.display = 'block';
    legend.innerHTML = categoria + ":(ocultar)";
};
/*Haciendo click sobre el ul, éste se oculta*/
function ocultar(ul, legend, categoria){
    ul.style.display = 'none';
    legend.innerHTML = categoria + ":(mostrar)";
};