interface MenuRoute {
  path: string;
  label: string;
}

const menuRoutes: MenuRoute[] = [
  { path: "/", label: "Home" },
  {
    path: "/producers",
    label: "Lista de Produtores",
  },
  { path: "/producers/register", label: "Cadastro de Produtor" },
];

export default menuRoutes;
