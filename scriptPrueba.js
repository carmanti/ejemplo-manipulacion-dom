// Podemos seleccionar etiquetas
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");
// Podemos mostrar en consola y la tenemos en una variable
console.log(pid);

// Sale vacio el valor
console.log(input);
// Accedemos a lo que ingresamos en el input
console.log(input.value);
console.log({ h1, p, parrafito, pid, input });

// Para agregar etiquetas o cambiar cosas en el html
h1.innerHTML = "NUevo titulito <br> Feo";

// Se puede modificar atributos
// console.log(h1.getAttribute("class")); leemos
// h1.setAttribute("class", "movi"); modificamos

// Para seleccionar clases
// Agregamos y retiramos clases
h1.classList.add("rojo");
h1.classList.remove("rojo");

// Agregar un elemento desde cero
const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://www.bing.com/images/search?view=detailV2&ccid=CIAvvK4n&id=14DAE90FC28FD4050BB713B18917F3B8EEE8F76B&thid=OIP.CIAvvK4nmoofzv7_yAtxgQHaHp&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.08802fbcae279a8a1fcefeffc80b7181%3frik%3da%252ffo7rjzF4mxEw%26riu%3dhttp%253a%252f%252fstatic.zerochan.net%252fNARUTO.full.1721982.jpg%26ehk%3d3zOT63RZEz02vTcs3X7p1ZAyou4i%252f9e0Wx9Ti4FPAok%253d%26risl%3d1%26pid%3dImgRaw%26r%3d0&exph=4337&expw=4200&q=naruto&simid=607992285278315698&FORM=IRPRST&ck=3D5C04399BDFD72855EAA0464F5B6949&selectedIndex=1&ajaxhist=0&ajaxserp=0"
);

pid.innerHTML = img;
