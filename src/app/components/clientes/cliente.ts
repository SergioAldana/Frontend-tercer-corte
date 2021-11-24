export class Cliente {
    id:number;
    parte:string;
    estado:string;

    constructor(id:number, parte:string, estado:string){
        this.id = id;
        this.parte = parte;
        this.estado = estado;
    }
}
