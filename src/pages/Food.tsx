import { Outlet } from "react-router-dom";

import Main from "../components/Main";
import Branded from "../components/Branded";

import Carne from '../images/vista-lateral-carne.jpg';

export default function Food() {

  return (
    <Main>
      <Branded url={Carne} title="Gastronomía" content="Explorar la cocina de diferentes partes del mundo. Comparti recetas, reseñas de restaurantes y consejos para disfrutar de la mejor comida posible." />
      <Outlet />
    </Main>
  )
}
