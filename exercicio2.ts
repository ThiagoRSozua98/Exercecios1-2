let Ncompetidores: number = 10;
let  QtdeFolhas: number = 90;
let FolhasPcompetidor: number = 10;

let totalfolhas: number = Ncompetidores*FolhasPcompetidor;

if (totalfolhas > QtdeFolhas) {
    console.log("Qtde de Folhas insuficiente")
}
else{
    console.log("Qtde de Folhas Suficiente")
}