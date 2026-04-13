export function convertToNumber(valor: string | number): number {
    if (typeof valor === 'number') {
        return valor;
    }
    return parseInt(valor, 10);
}