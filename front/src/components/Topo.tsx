import Link from "next/link";

export default function Topo() {
  return (
    <div className="flex flex-col justify-between items-center bg-blue-300 h-[130px]">
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl">
          {"Sistema de Gestão e Controle de Presenças"}
        </div>
      </div>
      <nav className="btnNav flex gap-5">
        <Link href={"/"}>Home</Link>
        <Link href={"/produtos/produtos"}>Produtos</Link>
        <Link href={"/teste/teste"}>Gerir Pessoas</Link>
        <Link href={"/hook/usestate"}>Marcar Presença</Link>
        <Link href={"/inputs/inputs"}>Sobre Nós</Link>
      </nav>
    </div>
  );
}
