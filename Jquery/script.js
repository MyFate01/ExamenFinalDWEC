$("document").ready(function(){
    $("button").click(function(){
        añadirFilas("Mugre King","23456781F","La mia");
        setTimeout('cargaDatosJSON(distribuidores)',3000);
    });

  
}); 

function añadirFilas(empresa,cif,direccion){
    $("#reinol").append("<td>"+empresa+"</td><td>"+cif+"</td><td>"+direccion+"</td>");
};

function cargaDatosJSON(eljson){
    var division = JSON.parse(eljson);
    for(var i = 0; i < division.length; i++){
        $("table").append("<tr><td>"+division[i].empresa+"</td><td>"+division[i].cif+"</td><td>"+division[i].direccion+"</td></tr>");
    };
    
};


var distribuidores = [
    {"empresa":"una de tantas","cif":"8976213G","direccion":"otra"},
    {"empresa":"otra de muchas","cif":"2187392S","direccion":"cualquiera"},
    {"empresa":"como una de tantas","cif":"89478121J","direccion":"la suya"}
]
