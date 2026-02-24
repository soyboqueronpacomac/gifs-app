import { Link } from "../interfaces";

export const links: Link[] = [
  {
    label: 'Trending',
    subLabel: 'Gifs Populares',
    routes: '/dashboard/trending',
    icon: 'fa-solid fa-chart-line',
  },
  {
    label: 'Buscador',
    subLabel: 'Busca tus Gifs',
    routes: '/dashboard/search',
    icon: 'fa-solid fa-magnifying-glass',
  },
]
