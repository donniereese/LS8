class MEMORY {
    constructor() {
        this.bank = new Array(255);
        this.bank.fill(0b00000000);
    }

    read(addr) {
        return this.bank[addr];
    }

    write(addr, data) {
        this.bank[addr] = data;
    }
}

module.exports = MEMORY;
