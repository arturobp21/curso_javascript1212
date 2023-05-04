
//import { Ingreso } from './Ingreso.js';
//import { Egreso } from './Egreso.js';

// arreglo de ingresos
const ingresos = [
  new Ingreso('Salario', 20000),
  new Ingreso('Venta auto', 50000),
  new Ingreso('ropa', 7000)
];

// arreglo de egresos
const egresos = [
  new Egreso('Renta', 4000),
  new Egreso('Ropa', 800),
  new Egreso('Comida', 800)
];

/*let egresos = {
    Renta: 900,
    Ropa: 400
  };
  
  let ingresos = {
    Quincena: 9000,
    Venta: 400
  };*/
  
  /*const totalIngresos = () => {
    let totalIngreso = 0;
    for (const ingreso of Object.values(ingresos)) {
      totalIngreso += ingreso;
    }
    return totalIngreso;
};*/
class totalIngresos {
  static calcularTotalIngresos() {
    let total = 0;
    for (let ingreso of ingresos) {
      total += ingreso.valor;
    }
    return total;
  }
}
 
/*const totalEgresos = () => {
    let totalEgreso = 0;
    for (const egreso of Object.values(egresos)) {
      totalEgreso += egreso;
    }
    return totalEgreso;
  };*/

class totalEgresos {
    static calcularTotalEgresos() {
      let total = 0;
      for (let egreso of egresos) {
        total += egreso.valor;
      }
      return total;
    }
  }
  
  const cargarCabecero1 = () => {
    const presupuesto = totalIngresos.calcularTotalIngresos() - totalEgresos.calcularTotalEgresos();
    const porcentajeEgreso = (totalEgresos.calcularTotalEgresos() /  totalIngresos.calcularTotalIngresos());
    
    const formatoMoneda = (valor) => {
        return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
      };
      
    const formatoPorcentaje = (valor) => {
        return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
    };
    
    console.log('Presupuesto:', formatoMoneda(presupuesto));
    console.log('Porcentaje de Egresos:', formatoPorcentaje(porcentajeEgreso));
    console.log('Total Ingresos:', formatoMoneda(totalIngresos.calcularTotalIngresos()));
    console.log('Total Egresos:', formatoMoneda(totalEgresos.calcularTotalEgresos()));
    console.log(porcentajeEgreso);
  };

  const cargarCabecero = () => {
    const presupuestoValor = document.getElementById('Presupuesto');
    const ingresosValor = document.getElementById('Ingresos');
    const egresosValor = document.getElementById('Egresos');
    const porcentajeValor = document.getElementById('Porcentaje');
    
    const totalIngresosValor = totalIngresos.calcularTotalIngresos();
    const totalEgresosValor = totalEgresos.calcularTotalEgresos();
    const presupuesto = totalIngresosValor - totalEgresosValor;
    const porcentajeEgreso = totalEgresosValor / totalIngresosValor;
    
  const formatoMoneda = (valor) => {
      return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
  };
    
  const formatoPorcentaje = (valor) => {
      return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
  };
  
    presupuestoValor.innerHTML = formatoMoneda(presupuesto);
    porcentajeValor.innerHTML = formatoPorcentaje(porcentajeEgreso);
    ingresosValor.innerHTML = formatoMoneda(totalIngresosValor);
    egresosValor.innerHTML = formatoMoneda(totalEgresosValor);
  };
  
//cargarCabecero();
cargarCabecero1();

//Ingresos

const cargarIngresos = () => {
  let ingresosHTML = '';

  for (const ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }

  const listaIngresos = document.getElementById('lista-ingresos');
  listaIngresos.innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso) => {
  const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
   };
  const ingresoHTML = `
    <div class="elemento limpiarEstilos">
      <div class="elemento-descripcion">${ingreso.descripcion}</div>
      <div class="derecha limpiarEstilos">
        <div class="elemento-valor">${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento-delete">
          <button class="elemento-delete--btn">
            <i class="far fa-trash-alt" onclick="eliminarIngreso(${ingreso.id})"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  return ingresoHTML;
};

// Egresos
const formatoMoneda = (valor) => {
  return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
};

const cargarEgresos = () => {
  let egresosHTML = '';

  for (const egreso of egresos) {
    egresosHTML += crearEgresoHTML(egreso);
  }

  const listaEgresos = document.getElementById('lista-egresos');
  listaEgresos.innerHTML = egresosHTML;
};

const crearEgresoHTML = (egreso) => {
  const egresoHTML = `
    <div class="elemento limpiarEstilos">
      <div class="elemento-descripcion">${egreso.descripcion}</div>
      <div class="derecha limpiarEstilos">
        <div class="elemento-valor">${formatoMoneda(egreso.valor)}</div>
        <div class="elemento-delete">
          <button class="elemento-delete--btn">
            <i class="far fa-trash-alt" onclick="eliminarEgreso(${egreso.id})"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  return egresoHTML;
};

const eliminarEgreso = (id) => {
  const indiceEliminar = egresos.findIndex((egreso) => egreso.id === id);
  egresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarEgresos();
}

const agregarDato = () => {
  const forma = document.getElementById("forma");
  console.log(forma)
  const tipo = forma.tipo.value;
  const descripcion = forma.descripcion.value;
  const valor = forma.valor.value;
  

  if (descripcion !== "" && valor !== "") {
    if (tipo === "ingreso") {
      ingresos.push(new Ingreso(descripcion, valor));
      cargarCabecero();
      cargarIngresos();
    } else if (tipo === "egreso") {
      egresos.push(new Egreso(descripcion, valor));
      cargarCabecero();
      cargarEgresos();
    }
  }

  forma.reset();
  return false;
};


function cargarApp() {
  cargarIngresos();
  cargarEgresos();
  cargarCabecero();
  
  
}


