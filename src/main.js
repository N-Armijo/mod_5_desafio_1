import Cliente from './Cliente.js';
import Impuesto from './Impuesto.js';

const impuesto = new Impuesto(100_000, 20_000); // Ejemplo: 100.000 de monto bruto anual y 20.000 de deducciones
const cliente = new Cliente('Jhon Doe', impuesto);

console.log(`El impuesto a pagar por ${cliente.nombre} es: $${cliente.calcularImpuesto()}`);
