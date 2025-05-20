function Stats({ products }) {
  if (products.length === 0) return null;

  let max = products[0];
  let min = products[0];
  let totalPrecio = 0;
  let sumaDescuento = 0;
  let titulosLargos = 0;

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    if (p.price > max.price) max = p;
    if (p.price < min.price) min = p;
    totalPrecio += p.price;
    sumaDescuento += p.discountPercentage;
    if (p.title.length > 20) titulosLargos++;
  }

  const promedioDescuento = sumaDescuento / products.length;

  return (
    <div>
      <h2>Estadísticas</h2>
      <p>Productos mostrados: {products.length}</p>
      <p>
        Más caro: {max.title} (${max.price})
      </p>
      <p>
        Más barato: {min.title} (${min.price})
      </p>
      <p>Títulos largos: {titulosLargos}</p>
      <p>Suma precios: ${totalPrecio}</p>
      <p>Promedio descuento: {promedioDescuento.toFixed(2)}%</p>
    </div>
  );
}

export default Stats;
