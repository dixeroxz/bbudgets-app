export default function HomePage() {
    const nombreTienda = "BBudgets";
    const cantidadProductos = 20;

    return (
        <div>
            <h1>Bienvenido a {nombreTienda}</h1>
            <p>Tenemos {cantidadProductos} productos disponibles.</p>
        </div>
    );
}
