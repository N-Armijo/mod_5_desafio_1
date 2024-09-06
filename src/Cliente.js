import Impuesto from './Impuesto.js';

class Cliente {
    #nombre;
    #impuesto;

    constructor(nombre, impuesto) {
        this.#nombre = nombre;
        this.#impuesto = impuesto;
    }

    // Métodos get y set para nombre
    get nombre() {
        return this.#nombre;
    }

    set nombre(value) {
        this.#nombre = value;
    }

    // Métodos get y set para impuesto
    get impuesto() {
        return this.#impuesto;
    }

    set impuesto(value) {
        this.#impuesto = value;
    }

    // Método para calcular el impuesto
    calcularImpuesto() {
        return (this.#impuesto.montoBrutoAnual - this.#impuesto.deducciones) * 0.21;
    }
}

export default Cliente;
