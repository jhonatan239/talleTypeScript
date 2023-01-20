interface FiguraGeometricas {

    calcularArea(): void;
    calcularPerimetro(): void;

}

abstract class Figura implements FiguraGeometricas {

    abstract calcularArea(): void;
    abstract calcularPerimetro(): void;

    protected nombre: string;

    constructor(nom: string) {
        this.nombre = nom;
    }



}

class Circulo extends Figura {

    private radio: number;

    constructor(nombre: string, radio: number) {
        super(nombre);
        this.radio = radio;
    }

    calcularArea(): void {
        let area :number;
        area = Math.PI * Math.pow(this.radio, 2)
    }
    calcularPerimetro(): void {
        let perimetro: number;
        perimetro= 2 * Math.PI * this.radio

    }

}


class Cuadrado extends Figura{

    calcularArea():void{

    }
    calcularPerimetro():void{
        
    }
    
}