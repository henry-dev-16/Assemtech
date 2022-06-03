function create_Card(a,imagen,nombre,cualidad_1,cualidad_2, cualidad_3, cualidad_4, price){
    // Llamo el elemento para clonarlo y el padre para ingresar el clon
    let c = document.getElementById("card-1");
    let d = document.getElementById("card-container");
    let clon = c.cloneNode(true);
    clon.removeAttribute('class');
    clon.setAttribute("class",a + " tarjeta-producto");
    d.appendChild(clon);

    // llamo los hijo de que cumplan con lo dado 
    let imge = document.querySelectorAll("."+a+" > img")
    imge = imge.item(0)
    imge.removeAttribute("src")
    imge.setAttribute("src",imagen)


    let name = document.querySelectorAll("."+a+" > div > h4 ");
    name = name.item(0);
    name.textContent=nombre

    let c1_0 = document.querySelectorAll("."+a+" > div > ul > li ");
    c1_0 = c1_0.item(0);
    c_a = "<b>"+cualidad_1[0]+"</b>"+cualidad_1[1];
    c1_0.innerHTML=c_a;

    let c2 = document.querySelectorAll("."+a+" > div > ul .li_2 ");
    c2 = c2.item(0);
    c_a = "<b>"+cualidad_2[0]+"</b>"+cualidad_2[1];
    c2.innerHTML=c_a;

    let c3 = document.querySelectorAll("."+a+" > div > ul .li_3 ");
    c3 = c3.item(0);
    c_a = "<b>"+cualidad_3[0]+"</b>"+cualidad_3[1];
    c3.innerHTML=c_a;

    let c4 = document.querySelectorAll("."+a+" > div > ul .li_4 ");
    c4 = c4.item(0)
    c_a = "<b>"+cualidad_4[0]+"</b>"+cualidad_4[1];
    c4.innerHTML=c_a;

    let pric = document.querySelectorAll("."+a+" > div > .btn-productos > h3")
    pric = pric.item(0);
    pric.innerHTML = "$"+ price;

    
    
    

}


create_Card("card-2",
"./assets/logo-AssemTech1.png",
"Procesador Intel Pentium 4",
["Modelo:","SL6S2 MALAY"],
["Frecuencia:","2.53ghz"],
["Cache:","512kb"],
["Núcleos:","1"],
"55.00");

create_Card("card-3",
"./assets/logo-AssemTech1.png",
"Procesador Intel Pentium Dual-Core",
["Modelo:","SLAT7 MALAY"],
["Frecuencia:","2.52ghz"],
["Cache:","800kb"],
["Núcleos:","2"],"53.09");

create_Card("card-4",
"./assets/logo-AssemTech1.png",
"Procesador Intel Pentium 4",
["Modelo:","SL6PN COSTA RICA"],
["Frecuencia:","2.50ghz"],
["Cache:","512kb"],
["Núcleos:","2"],"51.49");

create_Card("card-5",
"./assets/logo-AssemTech1.png",
"Procesador Intel Pentium E5800",
["Modelo:","SLGTG COSTA RICA"],
["Frecuencia:","3.2Oghz"],
["Cache:","800kb"],
["Núcleos:","2"],"80.00");

create_Card("card-6",
"./assets/logo-AssemTech1.png",
"Procesador Intel Pentium 4",
["Modelo:","SL88S MALAY"],
["Frecuencia:","3.0ghz"],
["Cache:","800kb"],
["Núcleos:","2"],"75.49");

create_Card("card-7",
"./assets/logo-AssemTech1.png",
"Disco Duro Wéstern Digital ",
["Modelo:","WD800JD-08MSA1"],
["Capacidad:","80gb"],
["Formato:","HDD"],
["Compatibilidad:","PC"],"10.99");


create_Card("card-8",
"./assets/logo-AssemTech1.png",
"Disco Duro Seagate Barracuda",
["Modelo:","ATA IV"],
["Capacidad:","20gb"],
["Formato:","HDD"],
["Compatibilidad:","PC"],"4.99");

create_Card("card-9",
"./assets/logo-AssemTech1.png",
"Disco Duro Wéstern Digital Blue",
["Modelo:","WD5000LPCX-21VHAT0"],
["Capacidad:","500gb"],
["Formato:","HDD"],
["Compatibilidad:","Portatil"],"149.99");


create_Card("card-10",
"./assets/logo-AssemTech1.png",
"Motherboard ASrock",
["Modelo:","G41M-VS3"],
["Ranuras de RAM:","x2"],
["Capacidad de RAM:","DDR3 1333(OC)"],
["Procesador:","Intel"],"119.59");

create_Card("card-11",
"./assets/logo-AssemTech1.png",
"Motherboard Foxconn",
["Modelo:","650 M02-G-6L"],
["Ranuras de RAM:","x2"],
["Capacidad de RAM:","DDR"],
["Procesador:","Intel"],"84.99");

create_Card("card-12",
"./assets/logo-AssemTech1.png",
"Motherboard Dell E93839",
["Modelo:","KA0120 D28YY"],
["Ranuras de RAM:","x4"],
["Capacidad de RAM:","DDR3"],
["Procesador:","Intel"],"149.99");

create_Card("card-13",
"./assets/logo-AssemTech1.png",
"Memoria Ram Genérica",
["Capacidad:","2gb"],
["Tecnología:","DDR3"],
["Frecuencia:","1800mhz"],
["Compatibilidad:","PC"],"20.00");

create_Card("card-14",
"./assets/logo-AssemTech1.png",
"Memoria Ram Samsung",
["Capacidad:","2gb"],
["Tecnología:","DDR"],
["Frecuencia:","800mhz"],
["Compatibilidad:","PC"],"10.00");

create_Card("card-15",
"./assets/logo-AssemTech1.png",
"Memoria Ram ProMOS",
["Capacidad:","1gb"],
["Tecnología:","DDR2"],
["Frecuencia:","1200mhz"],
["Compatibilidad:","PC"],"15.00");

create_Card("card-16",
"./assets/logo-AssemTech1.png",
"Memoria Ram ADATA",
["Capacidad:","4gb"],
["Tecnología:","DDR3"],
["Frecuencia:","1800mhz"],
["Compatibilidad:","Portatil"],"20.00");

create_Card("card-17",
"./assets/logo-AssemTech1.png",
"Memoria Ram HP",
["Capacidad:","512mb"],
["Tecnología:","DDR"],
["Frecuencia:","600mhz"],
["Compatibilidad:","PC"],"7.99");



create_Card("card-18",
"./assets/logo-AssemTech1.png",
"Memoria Ram HP",
["Capacidad:","256mb"],
["Tecnología:","DDR"],
["Frecuencia:","600mhz"],
["Compatibilidad:","PC"],"5.99");

create_Card("card-19",
"./assets/logo-AssemTech1.png",
"Memoria Ram Crucial",
["Capacidad:","256mb"],
["Tecnología:","DDR"],
["Frecuencia:","600mhz"],
["Compatibilidad:","PC"],"5.99");

create_Card("card-20",
"./assets/logo-AssemTech1.png",
"Unidad Multimedia Samsung",
["Modelo:","SC-148"],
["Reproductor:","CD"],
["Año de fabricación:","2002"],
["Color:","Negro"],"40.99");

create_Card("card-21",
"./assets/logo-AssemTech1.png",
"Unidad Multimedia Sony",
["Modelo:","AD-7200S"],
["reproductor","DVD y CD"],
["Año de fabricación:","2007"],
["Color:","Negra"],"70.99");

create_Card("card-22",
"./assets/logo-AssemTech1.png",
"Unidad Multimedia BENQ",
["Modelo:","CB523C"],
["Reproductor:","DVD y CD"],
["Año de fabricación:","2005"],
["Color:","Blanco"],"54.99");

create_Card("card-23",
"./assets/logo-AssemTech1.png",
"Unidad Multimedia LG",
["Modelo:","GSA-4167B"],
["Reproductor:","DVD y CD"],
["Año de fabricación:","2005"],
["Color:","Blanco"],"55.99");












