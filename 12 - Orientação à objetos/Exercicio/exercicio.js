const LimitError = new Error("Saque mais alto que o limite. Impossível sacar.");

class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() { return this._saldo };
    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) return 'operação invalida.';
        this.saldo -= valor;
        console.log("Saldo atual: R$" + this._saldo.toFixed(2));
    }
    depositar(valor) {
        this.saldo += valor;
        console.log("Saldo atual: R$" + this._saldo.toFixed(2));
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoDeCredito) {
        super(agencia, numero);
        this._cartaoDeCredito = cartaoDeCredito;
        this.tipo = 'corrente';
    }

    get cartaoDeCredito() {
        return this._cartaoDeCredito;
    }
    set cartaoDeCredito(value) {
        this._cartaoDeCredito = value;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }
   
    sacar(value) {
        try {
            if (value > 500) {
                throw LimitError;
            };
            super.sacar(value);
        }
        catch (e) {
            console.log(e.message);
        }
    }
}