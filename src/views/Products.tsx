import { ActionFunctionArgs, Link, useLoaderData } from "react-router-dom";
import { getProducts, updateProductAvailability} from "../services/ProductService";
import ProductDetails from "../components/ProductDetails";
import { Product } from "../types";

export async function loader() {
  const products = await getProducts();
  return products;
}

export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  console.log(data);
  await updateProductAvailability(+data.id);
  return {};
}

export default function Products() {
  const products = useLoaderData() as Product[];

  return (
    <>
  <div className="flex justify-between items-center mb-10">
  <h2 className="text-4xl font-bold text-slate-700">Productos</h2>

  <Link
    to="/productos/nuevo"
    className="bg-lime-700 hover:bg-lime-600 transition-colors text-white px-5 py-3 rounded-lg uppercase font-semibold text-sm shadow-md"
  >
    Nuevo producto
  </Link>
</div>

<div className="overflow-x-auto shadow-md rounded-lg">
  <table className="w-full mt-5 table-auto border-collapse">
    <thead className="bg-lime-700 text-white">
      <tr>
        <th className="p-4 text-left">Producto</th>
        <th className="p-4 text-left">Precio</th>
        <th className="p-4 text-left">Acciones</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-lime-50 divide-gray-200 bg-white">
      {products.map((product) => (
        <ProductDetails key={product.id} product={product} />
      ))}
    </tbody>
  </table>
</div>

    </>
  );
}
