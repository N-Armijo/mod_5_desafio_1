import Cliente from './Cliente.js';
import Impuesto from './Impuesto.js';
var impuesto = new Impuesto(100000, 20000); // Ejemplo: 100.000 de monto bruto anual y 20.000 de deducciones
var cliente = new Cliente('Jhon Doe', impuesto);
console.log("El impuesto a pagar por ".concat(cliente.nombre, " es: $").concat(cliente.calcularImpuesto()));