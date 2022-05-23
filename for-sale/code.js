function create_Card(a,imagen,nombre,cualidad_1,cualidad_2, cualidad_3, cualidad_4){
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
    console.log(c2)
    c_a = "<b>"+cualidad_2[0]+"</b>"+cualidad_2[1];
    c2.innerHTML=c_a;

    let c3 = document.querySelectorAll("."+a+" > div > ul .li_3 ");
    c3 = c3.item(0);
    console.log(c3)
    c_a = "<b>"+cualidad_3[0]+"</b>"+cualidad_3[1];
    c3.innerHTML=c_a;

    let c4 = document.querySelectorAll("."+a+" > div > ul .li_4 ");
    c4 = c4.item(0);
    console.log(c4)
    c_a = "<b>"+cualidad_4[0]+"</b>"+cualidad_4[1];
    c4.innerHTML=c_a;

}
create_Card("card-2",
"./assets/logo-AssemTech1.png",
"El pepe con juan",
["Frecuencia:","2.6ghz"],
["Pepino:","jabon"],
["cocote:","habichuela"],
["ajonjolee:","bruslee"]);
create_Card("card-3",
"./assets/pexels-it-services-eu-7596370.jpg",
"ok diego ta feo",
["color:","negro"],
["sabor:","pupu"],
["brocolee:","chaquichan"],
["ajonjolee:","bruslee"]);

for (let i = 0 ; i <=10 ; i++){
    create_Card("card-"+i,
"./assets/pexels-it-services-eu-7596370.jpg",
"ok diego ta feo",
["color:","negro"],
["sabor:","pupu"],
["brocolee:","chaquichan"],
["ajonjolee:","bruslee"]);
}