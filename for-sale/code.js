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
    c_a = "<b>"+cualidad_4[0]+"</b>"+cualidad_4[1];
    c4.innerHTML=c_a;

    let pric = document.querySelectorAll("."+a+" > div > .btn-productos > h3")
    pric = pric.item(0);
    pric.innerHTML = "$"+ price;

    
    
    

}


create_Card("card-2",
"./assets/logo-AssemTech1.png",
"Intel Pentium 4",
["Modelo:","SL6S2 MALAY"],
["Frecuencia:","2.53ghz"],
["Cache:","512kb"],
["Núcleos:","1"],"35.00");

create_Card("card-3",
"./assets/logo-AssemTech1.png",
"Intel Pentium Dual-Core",
["Modelo:","SLAT7 MALAY"],
["Frecuencia:","2.52ghz"],
["Cache:","800kb"],
["Núcleos:","2"],"35.00");


create_Card("card-2",
"./assets/logo-AssemTech1.png",
"Intel Pentium 4",
["Modelo:","SL6S2 MALAY"],
["Frecuencia:","2.53ghz"],
["Cache:","512kb"],
["Núcleos:","1"],"35.00");


create_Card("card-2",
"./assets/logo-AssemTech1.png",
"Intel Pentium 4",
["Modelo:","SL6S2 MALAY"],
["Frecuencia:","2.53ghz"],
["Cache:","512kb"],
["Núcleos:","1"],"35.00");


create_Card("card-2",
"./assets/logo-AssemTech1.png",
"Intel Pentium 4",
["Modelo:","SL6S2 MALAY"],
["Frecuencia:","2.53ghz"],
["Cache:","512kb"],
["Núcleos:","1"],"35.00");


create_Card("card-2",
"./assets/logo-AssemTech1.png",
"Intel Pentium 4",
["Modelo:","SL6S2 MALAY"],
["Frecuencia:","2.53ghz"],
["Cache:","512kb"],
["Núcleos:","1"],"35.00");






