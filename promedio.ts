function promedio(...valores: number[]): number {
    let total = 0
    let cant = 0

    for (const valor of valores) {
        total += valor
        cant += 1
    }

    total = total / cant
    return total

}


function compararPromedio(promedio: number, valor: number): string {

    if (promedio > valor) {
        return "mayor"
    } else {

        return "menor o igual"
    }

}

function promedioMayorMenor (valor:number,...numeros: number[]): string{

    let prom = promedio(...numeros);

    let comparacion = compararPromedio(prom, valor);

return comparacion
}

console.log(promedioMayorMenor(2000, 80, 3, 40, 500, 9, 20,200));