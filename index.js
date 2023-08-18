class ProductManager{
    constructor(){
        this.products = [];
    };

    addProduct=(code, title, thumbnail, description, price, stock ) => {
        const codeExists = this.products?.forEach(product => product.code === code?true:false);
        const id = (Object.keys(this.products).length === 0)?1:this.products[this.products.length-1].id + 1;
        if (codeExists){
            return 'El producto ya existe';
        }else{
            if(code === null || title === null || thumbnail === null || description === null || price === null || stock === null ){return 'Debe proporcionar los datos solicitados'}
            else if(!code || !title || !thumbnail || !description || !price || !stock ){return 'Los datos no pueden venir vacios'}
            else{
                const newProduct={
                    id : id,
                    code ,title,thumbnail,description,price,stock
                };
                this.products.push(newProduct)
            }
        }
    };

    getProducts = () => this.products;

    getProductById = (id) => {
        const productSearched = this.products.find(product => product.id === id);
        if(productSearched) return productSearched
        else return 'Not Found';
    }
}

//Creacion de productManager
const productManagerA = new ProductManager();
const productManagerB = new ProductManager();

console.log("primer productManager: ",productManagerA);
console.log("segundo productManager: ",productManagerB);

//se agregan productos
console.log(productManagerA.addProduct());
console.log(productManagerB.addProduct("","","","","",""));
console.log(productManagerA.addProduct(123,"primer producto","ruta imagen","descripcion",123123123,10));
console.log(productManagerB.addProduct(987,"primer producto B","ruta imagen B","descripcion B",987987987,20));
console.log(productManagerA.addProduct(456,"segundo producto","ruta imagen dos","descripcion dos",456456456,100));
console.log(productManagerB.addProduct(789,"segundo producto B","ruta imagen B dos","descripcion B dos",789789789,200));

//se obtienen productos
console.log(productManagerA.getProducts());
console.log(productManagerB.getProducts());

//se obtiene producto por id
console.log('productManagerA: ',productManagerA.getProductById(5));
console.log('productManagerA: ',productManagerA.getProductById(2));


