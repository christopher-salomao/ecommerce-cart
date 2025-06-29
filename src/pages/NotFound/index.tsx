import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
      <h1 className="text-3xl font-bold">Ops, acho que você se perdeu...</h1>
      <h2 className="text-2xl font-semibold">404 - Página não encontrada</h2>
      <Link
        className="bg-slate-600 my-3 p-1 px-3 text-white rounded font-medium"
        to="/"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}

export default NotFound;
