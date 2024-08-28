import Card from "@/components/Card";
import Topo from "@/components/Topo";
import { useRouter } from "next/router";
const produtos = [
  {
    id: 1,
    produto: "Mouse",
    valor: 6000,
    desconto: 0,
    disponivel: true,
  },
  {
    id: 2,
    produto: "Teclado",
    valor: 8000,
    desconto: 0,
    disponivel: true,
  },
  {
    id: 3,
    produto: "Pen Drive",
    valor: 3000,
    desconto: 1000,
    disponivel: true,
  },
  {
    id: 4,
    produto: "Monitor",
    valor: 15000,
    desconto: 0,
    disponivel: true,
  },
  {
    id: 5,
    produto: "CPU",
    valor: 35000,
    desconto: 10000,
    disponivel: true,
  },
  {
    id: 6,
    produto: "Cx Som",
    valor: 80000,
    desconto: 0,
    disponivel: true,
  },
  {
    id: 7,
    produto: "Microfone",
    valor: 6000,
    desconto: 0,
    disponivel: true,
  },
];

function calcDesc(v: number, d: number) {
  return v - d;
}

function calcDesc2(v: number, d: number) {
  return v - d / 2;
}

export default function produtosPagina() {
  const router = useRouter();
  const { nome, curso } = router.query;
  console.log(nome);
  console.log(curso);

  return (
    <div>
      <Topo />
      <div className="flex justify-center gap-3 ">
        {produtos.map((el: any) => {
          if (el.disponivel) {
            return (
              <Card
                key={el.id}
                produto={el.produto}
                valor={el.valor}
                desconto={el.desconto}
                funcao={calcDesc}
              >
                <div>teste curso de react</div>
                <div>CFB Cursos</div>
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
}
