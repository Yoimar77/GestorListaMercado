// src/components/product/MonthlyExpenseSummary.jsx
import { useProduct } from "../../context/ProductContext";

const MonthlyExpenseSummary = () => {
  const { products } = useProduct();

  // Se agrupan los gastos usando la fecha del primer registro en el historial (cuando se agregó el producto)
  const expensesByMonth = products.reduce((acc, product) => {
    const month = new Date(product.history[0].date).toISOString().slice(0, 7);
    const price = Number(product.price);
    if (!acc[month]) {
      acc[month] = price;
    } else {
      acc[month] += price;
    }
    return acc;
  }, {});

  return (
    <div className="p-4 bg-white shadow rounded-lg mb-4">
      <h3 className="font-medium mb-2">Resumen de Gastos Mensuales</h3>
      <ul className="list-disc pl-5">
        {Object.entries(expensesByMonth).map(([month, total]) => (
          <li key={month}>
            {month}: ${total.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthlyExpenseSummary;
