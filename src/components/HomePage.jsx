export default function HomePage() {
    const nombreTienda = "Mi tienda online";
    const cantidadProductos = 24;

    return (
        <div>
            <h1>Bienvenido a {nombreTienda}</h1>
            <p>Tenemos {cantidadProductos} productos disponibles.</p>
        </div>
    );
}
