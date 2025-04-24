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
      <div className="flex justify-between mb-10">
        <h2 className="text-4xl font-bold text-slate-500">Productos</h2>

        <Link
          to="/productos/nuevo"
          className="bg-lime-800 text-white px-4 py-3 rounded-md uppercase font-bold text-sm"
        >
          Nuevo producto
        </Link>
      </div>

      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Producto</th>
              <th className="p-2">Precio</th>
  
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductDetails key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
