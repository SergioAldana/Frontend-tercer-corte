export class Pelea {
    id:number;
    ganador:boolean;
    ubicacion:string;

    constructor(id:number, ganador:boolean, ubicacion:string){
        this.id = id;
        this.ganador = ganador;
        this.ubicacion = ubicacion;
    }

}