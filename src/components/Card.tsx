interface CardProps {
  produto: String;
  valor: number;
  desconto: number;
  funcao: any;
  children: any;
}
export default function Card(props: CardProps) {
  return (
    <div
      className={`flex justify-center flex-col border-4 ${
        props.desconto > 0 ? " border-red-700" : " border-blue-700"
      } rounded-sm p-1`}
    >
      <div>Produto: {props.produto}</div>
      <div>Valor: {props.valor} kz</div>
      {props.desconto > 0 && (
        <div>
          <div>Desconto: {props.desconto} kz</div>
          <div>
            Preço de Venda: {props.funcao(props.valor, props.desconto)} kz
          </div>
        </div>
      )}
      <div>{props.children[1]}</div>
    </div>
  );
}
