
class ProductManager {

    constructor(){
        this.arrayProductos = []
        this.id = 0
    }
    getProducts (){
        return this.arrayProductos
    }
    addProduct (title, description, price, thumbnail, code, stock){
        if(!this.validarCode(code)){
        const producto ={
            id: this.id,
            title,
            description, 
            price, 
            thumbnail, 
            code, 
            stock
            }
        this.id += 1
        this.arrayProductos.push(producto)
        }
        else{
            console.log("Error: codigo repetido, no se puede añadir")
            return 
        }
    }
    validarCode(code){
        return this.arrayProductos.some(elem => elem.code === code);
    }
    getProductById(id) {
        const product = this.arrayProductos.find((elem) => elem.id === id);
        if (product) {
          return product;
        } else {
          console.log("Error: Product not found");
          return null;
        }
    }
}

controlador = new ProductManager()
controlador.getProducts()
controlador.addProduct("producto prueba", "es un producto de prueba", 200, "sin imagen", "abc123", 25) 
controlador.addProduct("producto prueba", "es un producto de prueba", 200, "sin imagen", "abc123", 25) 
console.log(controlador.getProducts())
controlador.getProductById(0)
controlador.getProductById(1)
