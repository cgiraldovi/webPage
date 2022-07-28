const ingresos = [
    new Ingreso("salario", 2100.00),
    new Ingreso("venta coche", 1500),
    new Ingreso("nuevo ingreso", 200)
];

const egresos = [
    new Egreso("venta departamento", 100),
    new Egreso("Ropa", 500),
    new Egreso("nuevo egreso", 100)
]

function cargarApp(){
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

function totalIngresos(){
    let totalIngresos = 0;
    for (let ingreso of ingresos){
        console.log(ingreso)
        totalIngresos += ingreso.valor;
    }

    return totalIngresos;
}

function totalEgresos(){
    let totalEgresos = 0;
    for (let egreso of egresos){
        totalEgresos += egreso.valor;
    }

    return totalEgresos;
}

function cargarCabecero(){
    let presupuesto = totalIngresos() - totalEgresos();
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("ingreso").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egreso").innerHTML = formatoMoneda(totalEgresos());
}

function formatoMoneda(valor){
    return valor.toLocaleString('en-US', {style:'currency', currency: "COP", minimumFractionDigits:2});
}

function cargarIngresos(){
    let ingresosHTML = "";
    for (let ingreso of ingresos){
        ingresosHTML += crearIngresos(ingreso);
    }
    document.getElementById("listaIngresos").innerHTML = ingresosHTML;
}

function crearIngresos(ingreso){
    let ingresoHTML = `
    <div class="elementoIngresos">
    <p>${formatoMoneda(ingreso.descripcion)}</p>
    <p>${formatoMoneda(ingreso.valor)}</p>
    <button class="botonEliminar"><ion-icon name="close-circle-outline" 
        onclick="eliminarIngreso(${ingreso.id})"></ion-icon></button>
    </div>
      `;
    return ingresoHTML;
}

function eliminarIngreso(id){
    let indicieEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indicieEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}


function cargarEgresos(){
    let egresosHTML = "";
    for (let egreso of egresos){
        egresosHTML += crearEgresos(egreso);
    }
    document.getElementById("listaEgresos").innerHTML = egresosHTML;
}

function crearEgresos(egreso){
    let egresoHTML = `
    <div class="elementoEgresos">
    <p>${formatoMoneda(egreso.descripcion)}</p>
    <p>${formatoMoneda(egreso.valor)}</p>
    <button class="botonEliminar"><ion-icon name="close-circle-outline"
        onclick="eliminarEgreso(${egreso.id})"></ion-icon></button>
    </div>
      `;
    return egresoHTML;
}

function eliminarEgreso(id){
    let indicieEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indicieEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

cargarApp()