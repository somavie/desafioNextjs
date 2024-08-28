// /components/Header.tsx
import React from "react";
interface headerProps {
  nome: String;
}

export function Header(props: headerProps) {
  return (
    <header className=" text-slate-700 p-4">
      <h1 className="text-2xl font-bold">{props.nome}</h1>
    </header>
  );
}
