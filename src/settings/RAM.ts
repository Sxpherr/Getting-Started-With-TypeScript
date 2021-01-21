class RAM {
    private _ram: number = Math.floor(Math.random() * 100)

    public constructor() { }

    get ram() {
        return(
            `Storage: ${this._ram}`
        )
    }
}

const r = new RAM()

console.log(`
|| RAM Information ||

${r.ram}%`)

export { RAM }
