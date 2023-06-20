class ProductManager {
    products;
    static correlatavoId = 0;
    constructor() {
        this.product = []
    }
}


 const addProduct = (code, title, description, price, thumbnail, stock) => {

    let existe = this.products.find((item) => item.code === code)
    if (existe) {
        console.log("el codigo ya existe")
    } else {
        ProductManager.correlatavoId++;
        const newProduct = {
            code: ProductManager.correlatavoId,
            title,
            description,
            price,
            thumbnail,
            stock
        }

        this.products.push(newProduct)
    }
}

const getProduct = () => {
    return this.products;
}


const getProductById = (id) => {
    let product = this.products.find((item) => item.id === id )

    if(product !== undefined){
        return product
    } else{
        return "“Not found"
    }
}