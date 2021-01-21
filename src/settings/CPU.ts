class CPU {
    private _cpu: string = "Ryzen 3900x"
    private storage: number = Math.floor(Math.random() * 100)

    public constructor() { }

    get cpu() {
        return(
            `Device: ${this._cpu}
Storage: ${this.storage}%`
        )
    }
}

const c = new CPU()

console.log(`|| PC Information ||

${c.cpu}`)

export { CPU }
