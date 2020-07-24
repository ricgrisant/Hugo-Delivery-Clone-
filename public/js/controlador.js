/*
También se incluye un archivo javascript con dos arreglos de JSONs, uno para gestionar usuarios y otro 
para gestionar categorias,analícelo detenidamente, se recomienda verlo directamente en la consola del 
navegador para poder visualizarlos más
comodamente*/

/*1. Verificar si en LocalStorage hay información, en caso de no haber, guardar el arreglo de JSONs de pruebas en un item
llamado categorias (asegurese de que se llame así). Nota: Elimine toda información del LocalStorage de ejercicios anteriores
para evitar confusiones.*/
var categorias =[];
var usuarios = [];
var localStorage = window.localStorage;

if (localStorage.getItem('categorias')==null){
    var categorias = [
        {
            nombreCategoria:"Farmacias",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#F9DC54",
            icono:"fas fa-first-aid",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Restaurantes",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#9BC1E6",
            icono:"fas fa-hamburger",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Salud",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#9582C2",
            icono:"fas fa-heartbeat",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Café",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#9482C4",
            icono:"fas fa-coffee",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Bebidas",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#D98E6E",
            icono:"fas fa-beer",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        }
    ];
    
    localStorage.setItem('categorias',JSON.stringify(categorias));
}
else{
    categorias = JSON.parse(localStorage.getItem('categorias'));
}
/*2. A su vez crear verificar si existe información de usuarios en LocalStorage, en caso de no haber, guardar el arreglo de JSONs
de usuarios en un item con la llave usuarios (asegurese de que se llame así).*/
if (localStorage.getItem('usuarios')==null){
    var usuarios = [
        {
            nombre:"Pedro",
            apellido:"Martinez",
            ordenes:[
                {
                    nombreProducto:"Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                },
                {
                    nombreProducto:"Producto 2",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                }
            ]
        },
        {
            nombre:"Juan",
            apellido:"Perez",
            ordenes:[
                {
                    nombreProducto:"Producto 3",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                },
                {
                    nombreProducto:"",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                }
            ]
        },
        {
            nombre:"Maria",
            apellido:"Rodriguez",
            ordenes:[
                {
                    nombreProducto:"Producto 4",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                },
                {
                    nombreProducto:"Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                }
            ]
        }
    ];

    localStorage.setItem('usuarios',JSON.stringify(usuarios));
}
else{
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
}
/*3. Generar la lista de categorías a partir de la información almacenada en LocalStorage, en el caso de cada una de las
categorías el color de fondo y el icono a visualizar deben ser dinámicos. Los iconos deben ser de font awesome, en el JSON
correspondiente se almacena la clase css del icono de Font Awesome a visualizar.*/
function mostrarCategorias(){
    document.getElementById('categorias').innerHTML = '';
    for(let i=0;i<categorias.length;i++){
        document.getElementById('categorias').innerHTML +=
            `<div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12">
                <div class="card" style="background-color: ${categorias[i].color}">
                    <div class="icono">
                    <i class="${categorias[i].icono} fa-5x"></i>
                    </div>
                <div class="card-body">
                    <h2 style="font-size: 27px;" class="card-title">${categorias[i].nombreCategoria}</h2>
                    <h5>${categorias[i].empresas.length}</h5>
                </div>
                </div>
            </div>`;
    }
}

mostrarCategorias();

/*4. Llenar el select list de usuarios con los almacenados en el LocalStorage, cada vez que se seleccione un usuario diferente
debe cambiar las referencias del usuario donde sea necesario. Recuerde que para eventos relacionados a un select list debe
hacerlo de la siguiente manera:
Evento onchange
<select id="usuarioActual" onchange="cambiarUsuario();">
...
</select>
function cambiarUsuario (){
console.log("Usuario: "+ document.getElementById("usuarioActual").value);
}*/


function mostrarUsuarios(){
    document.getElementById('usuarios').innerHTML = '';
    for(let i=0;i<usuarios.length;i++){
        document.getElementById('usuarios').innerHTML +=
            `<a onclick="usuarioSeleccionado(${i});" class="dropdown-item">${usuarios[i].nombre}</a>`;            
    }
}


/*
5. La funcionalidad del boton ver ordenes debera de tomar el usuario seleccionado para visualizar
 solo las ordenes de dicho usuario
*/
function usuarioSeleccionado(idUsuario){

    var Usuario = usuarios[idUsuario].nombre;
    document.getElementById('bienvedida').innerHTML=
    `<h1 style="font-weight: 900;color: #5c3286;">¡Hola ${Usuario}</h1>
    <h3 style="color: #5c3286;">¿Qué Necesitas?</h3>`; 

    document.getElementById('dropdown01').innerHTML= Usuario; 

    document.getElementById('nombreOrdenes').innerHTML= 
    `<h3 style="font-weight: 600;color: white;">${Usuario}, Estas son tus ordenes</h3>`; 


    for(let i=0;i<usuarios[idUsuario].ordenes.length;i++)
    {
        document.getElementById('usuarios').innerHTML = '';
        document.getElementById('ordenes').innerHTML +=
        `<div class="col-12" style="background-color: rgba(0,0,0,.075);">
        <p>${usuarios[idUsuario].ordenes[i].nombreProducto}</p>
        <p>${usuarios[idUsuario].ordenes[i].descripcion}</p>
        <p>${usuarios[idUsuario].ordenes[i].precio}</p>
    </div>`;          
    }
    
}




console.log ('Usuarios', usuarios);
console.log ('Categorias', categorias);