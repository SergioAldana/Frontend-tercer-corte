export class Pastel {
    id:number;
    nombre:string;
    ubicacion:string;
    estado:string;
    cuerpoId:number;

    constructor(id:number, nombre:string, ubicacion:string, estado:string, cuerpoId:number){
        this.id = id;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.estado = estado;
        this.cuerpoId = cuerpoId;
    }

}
