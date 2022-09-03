// metodo Push se utiliza para agregar elementos en un arreglo
const arreglo1 = [1, 2, 3, 4, 5];
arreglo1.push("Hola");
arreglo1;

//metodo unshift para agregar elementos al principio del arreglo
const arreglo2 = [1, 2, 3, 4, 5];
arreglo2.unshift("Hola");
arreglo2;

//metodo Splice sirve parar añadir, remover y reemplazar elementos index, 0 indica no borrar, valor arreglo.splice(index,0,valor)

const arreglo3 = [1, 2, 3, 4, 5];
arreglo3.splice(2, 0, "hola");
arreglo3;

let superHeroes = ["Ironman", "Superman", "Hawkeye"];

//agregar al final
superHeroes.push("wanda");
superHeroes.unshift("Capitan America");
superHeroes.splice(2, 0, "Hulk");
superHeroes;

//eliminar datos arreglo, Existen 3 formas shift. pop, splice

//shift borra el primer elemento
const arreglo4 = [1, 2, 3, 4, 5];
arreglo4.shift();
arreglo4;

// pop borar el ultimo elemento
const arreglo5 = [1, 2, 3, 4, 5];
arreglo5.pop();
arreglo5;

//splice
const arreglo6 = [1, 2, 3, 4, 5];
arreglo6.splice(2, 1);
arreglo6;

//agregando y borrando elementos
const usuarios = ["Erick", "Cristian", "Max", "Claudia"];

//sacar el ultimo elemento
usuarios.pop();
//Agregar maria al principio
usuarios.unshift("maria");
usuarios;

//remueve a cristian usando splice
usuarios.splice(2, 1);
usuarios;

//membrecias es saber si un elemento esta dentro de un arreglo con el metodo .includes()

const usuarios2 = ["Erick", "Cristian", "Max", "Claudia"];

usuarios2.includes("Cristian");

//usualmente se usa con un if
if (usuarios.includes("Cristian")) {
}

//contar elementos
usuarios.length;

// findIndex nos permite identificar el inidice de un elemento arreglo.finIndex((elemento)=> elemento == valor)

const apellidos = ["Aniston", "Cox", "Buffay", "Perry", "LeBlanc", "Schwimmer"];

const indiceCox = apellidos.findIndex((apellido) => apellido === "Cox");

indiceCox;
//ejemplo de como eliminar un dato en un arreglo usando el metodo findIdex y aplice
apellidos.splice(indiceCox, 1);
apellidos;

//findIndex en un arreglo con objetos

let actores = [
  { id: 431, nombre: "Jhonny Depp" },
  { id: 124, nombre: "Brad Pitt" },
  { id: 541, nombre: "Leonardo DiCaprio" },
  { id: 664, nombre: "Morgan Freeman" },
];
actores;

//eliminar el actor id=541
let idEliminar = actores.findIndex((actor) => actor.id === 541);

actores.splice(idEliminar, 1);
actores;

//Eliminar Pelicula
const peliculas = [
  { id: 1, nombre: "Thor" },
  { id: 2, nombre: "Ant-Man" },
  { id: 3, nombre: "Terminator" },
  { id: 4, nombre: "Ip Man" },
  { id: 5, nombre: "Rocky" },
];

let idPelicula = peliculas.findIndex(
  (pelicula) => pelicula.nombre === "Terminator"
);

peliculas.splice(idPelicula, 1);
peliculas;

//forEach() realiza una acccion por cada elemento del arreglo esta accion puede ser una funcion

const estaciones = ["Verano", "Otoño", "Invierno", "Primavera"];
estaciones.forEach((x) => console.log(x));

//.map() nos permite generar un arreglonuevo a partir de aplicar luna funcion a cada elemento
const valores = [100, 200, 300];
const nuevosValores = valores.map((x) => 2 * x);
valores;
nuevosValores;

//cuado utilizar .forEach cuando queramos utilizar los datos del arreglo iterados,

//cuando utilizar .map cuando queramos trasnformar los datos para seguir utilizandolos

//filtrar elementos dentro de un arreglo a partir de una condicion utilizando .filter
const estudiantes = [
  { nombre: "Juan", nota: 3.4 },
  { nombre: "Laura", nota: 6 },
  { nombre: "Katherine", nota: 4.3 },
  { nombre: "Jonathan", nota: 5.4 },
];

const estudiantesFiltrados = estudiantes.filter(
  (estudiante) => estudiante.nota >= 5
);

console.table(estudiantesFiltrados);

//filtrar y contar
let trabajadores = [
  { nombre: "Contanza", cargo: "Chef" },
  { nombre: "Luis", cargo: "garzón" },
  { nombre: "Estefany", cargo: "Administradora" },
  { nombre: "Andrés", cargo: "Recepcionista" },
  { nombre: "Pedro", cargo: "garzón" },
  { nombre: "Felipe", cargo: "Aseo" },
  { nombre: "Maria", cargo: "garzón" },
  { nombre: "Diego", cargo: "garzón" },
];

//Usar el método filter para crear un nuevo arreglo con arreglo de trabajadores creando un nuevo arreglo llamado garzones

const garzones = trabajadores.filter(
  (trabajador) => (trabajador.cargo = "garzón")
);

console.table(garzones);
garzones.length;

//juntar arreglos con el metodo concat podemos unir dos arreglos en uno solo

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
arr3;

//spread operator
const arr4 = [...arr1, ...arr2];
arr4;

//tambien podemos juntar arreglos de objetos

const autosCompactos = [
  { marca: "Toyota", modelo: "Corolla", combustible: "Gasolina" },
  { marca: "Mazda", modelo: "3", combustible: "Gasolina" },
  { marca: "Honda", modelo: "Civic", combustible: "Gasolina" },
  { marca: "Bmw", modelo: "116d", combustible: "Diesel" },
];
const autosDeportivos = [
  { marca: "Opel", modelo: "Astra OPC", combustible: "Gasolina" },
  { marca: "Renault", modelo: "Megane RS", combustible: "Gasolina" },
  { marca: "Mitsubishi", modelo: "Lancer Evo", combustible: "Gasolina" },
];

const autos = [...autosCompactos, ...autosDeportivos];
autosCompactos.length;
autosDeportivos.length;
autos.length;

//ordenar Elementos utilizando .sort()
//ordenar de forma acendente
const arr = [4, 1, 2, 3];
const ordenado = arr.sort();
ordenado;

//ordenar desendente
const arr12 = [4, 1, 2, 3];
const ordenDecendente = arr12.sort((x, y) => y - x);
ordenDecendente;

//orden ascendente
const arr32 = [7, 4, 6, 2, 1, 6, 4, 18];
const ordenado2 = arr32.sort((x, y) => x - y);
ordenado2;

//ordenar lista de estudiantes por notas
const estudiantes2 = [
  { nombre: "Juan", nota: 3.4 },
  { nombre: "Laura", nota: 6 },
  { nombre: "Katherine", nota: 4.3 },
  { nombre: "Jonathan", nota: 5.4 },
];

const estudiantesOrdenados = estudiantes2.sort((x, y) => y.nota - x.nota);

estudiantesOrdenados;

//Resumen
/*
Arreglos Javascript 
1.Agregar elementos :
	inicio 				: arreglo.unshift(dato)
  final					: arreglo.push(dato)
  otra posicion : arreglo.splice(index,0,dato)
  
2.Eliminar elementos:
	inicio				: arreglo.pop(dato)
  final					: arreglo.shift(dato)
  otra posicion : arreglo.splice(index,1)

3.Membrecia
	se incluye		: arreglo.includes("")
  
4.Iterar elementos 
								: arreglo.forEach(funcion())

5.Trasnformar Elementos 
								: arreglo.map(funcion())

6.Filtrar Elementos 
								: arreglo.filter(funcion())

7.Buscar indice de un elemento 
								: arreglo.findIndex(funcion())

8.Juntar Arreglos 
	concatenar		: arreglo.concat(otroArreglo)
  nuevoArreglo 	: [...arreglo, ...arreglo2]
  
9.Ordenar Elementos 
	normal				: arreglo.sort()
  ascendente		: arreglo.sort((x,y) => x - y)
  desendente		: arreglo.sort((x,y) => y - x)
*/

//Buena Suerte !!
