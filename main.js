let postres =[
    {
        name: "Tiramisu",
        ingredientes: "Azucar, Crema de leche, Mascarpone, Huevos, Cafe, Vainilla, Cacao amargo, Chocolate semiamargo",
        precio: 2300
    },{
        name: "Chocotorta",
        ingredientes: "Dulce de leche, Crema de leche, Galletias de chocolate, cafe, Cacao en polvo, Chocolate semiamargo ",
        precio: 2000
    },{
        name: "Lemosn Pie",
        ingredientes: "Galletitas de vainilla, Manteca, Huevos, Leche condensada, Limon, Azucar",
        precio: 2000
    },{
        name: "Pasta Flora",
        ingredientes:"Huevo, Harina leudante, Azucar, Manteca, Esencia de Vainilla, Sal, Dulce de batata o membrillo",
        precio: 1500
    },{
        name: "brownie",
        ingredientes:"Manteca, Chocolate, Huevo, Azucar, Nueces, Harina",
        precio: 2200
    },{
        name: "Tarata de Frutilla",
        ingredientes:"Harina 0000, Manteca, Esencia de Vainilla, Azucar, Huevo, Leche, Limon, Maicena, Crema de leche, Frutillas, Gelatina de frutilla",
        precio: 2600
    },

]


let newProducto = postres.filter( postres => {
    return postres.precio >1800 && postres.precio <3500 && postres.ingredientes.includes("Crema de leche")
})

console.log("postres =>", postres);
console.log("newProducto =>", newProducto);
