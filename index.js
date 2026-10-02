console.log('Fetching products from Fake Store API');

console.log(process.argv);
const args = process.argv.slice(2);

async function obtenerProductos() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return(data)
  } catch (error) {
    console.log(error)
  }
}

async function crearProducto(producto) {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify(producto)
      })
    if(response.ok) {
      console.log("Producto creado");
    }
  } catch (error) {
    console.log(error)
  }
}

switch (args[0]) {
  case "GET":
    console.log(args[0]);
    if(args[1].includes("/")) {
      
    }
    else if(args[1] === "products") {
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => console.log(data));
    }else {
      console.log("Comando incorrecto");
    }
    break;
  case "POST":
    console.log(args[0]);
    if(args[1] && args[2] && args[3] && args[4] && args[1].startsWith("products")) { 
    
    }else {
      console.log("Comando incompleto");
    }
    break;

}