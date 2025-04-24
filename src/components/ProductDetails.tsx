import {
  useNavigate,
  Form,
  ActionFunctionArgs,
  redirect,
} from "react-router-dom";
import { Product } from "../types";
import { formatCurrency } from "../utils";
import { deleteProduct } from "../services/ProductService";

type ProductDetailsProps = {
  product: Product;
};

export async function action({ params }: ActionFunctionArgs) {
  if (params.id !== undefined) {
    await deleteProduct(+params.id);
    return redirect("/");
  }
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const navigate = useNavigate();

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <td className="py-4 px-6 text-gray-700 font-medium">
        {product.name}
      </td>
      <td className="py-4 px-6 text-right font-semibold text-gray-700">
        {formatCurrency(product.price)}
      </td>
      <td className="py-4 px-6">
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => navigate(`/productos/${product.id}/editar`)}
            className="flex items-center gap-1 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md px-3 py-2 text-xs font-semibold uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Editar
          </button>

          <Form
            method="POST"
            action={`productos/${product.id}/eliminar`}
          >
            <button
              type="submit"
              onClick={(e) => {
                if (!confirm("¿Estás seguro de eliminar este producto?")) {
                  e.preventDefault();
                }
              }}
              className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white rounded-md px-3 py-2 text-xs font-semibold uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Eliminar
            </button>
          </Form>
        </div>
      </td>
    </tr>
  );
}