
class Producto{
    constructor(title,description,price,thumbnail, code, stock){
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = null
    }
}

class ProductManager {

    constructor(){
        this.arrayProductos = []
        this.id = 0
    }
    addProduct(produ){
        if(!(this.arrayProductos.some(producto => producto.code == code))){
            produ.id = this.id
            this.arrayProductos.push(produ)
            this.id += 1
        return true
    }else
        return false
    }
    codeEqual(code){
        //retorna verdadero si el id coincide con el producto
        return this.arrayProductos.some(producto => producto.code == code)
    }
    getProducts (){
        return this.arrayProductos
    }
}

controlador = new ProductManager()
controlador.getProducts()

controlador.addProduct("producto prueba", "es un producto de prueba", 200, "sin imagen", "abc123", 25) 
console.log(controlador.getProducts())