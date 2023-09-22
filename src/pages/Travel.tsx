import { useSelector, shallowEqual } from "react-redux"

import BlogList from "../components/BlogList";
import Branded from "../components/Branded";
import Main from "../components/Main";
import { Outlet } from "react-router-dom";
import Globo from '../images/vuelo-globo-aerostatico.jpg';

export default function Travel() {

  return (
    <Main>
      <Branded url={Globo} title="Destinos" content="Cubre una amplia gama de lugares, desde grandes ciudades y destinos turísticos hasta pueblos y rincones menos conocidos. Compartiré información sobre los lugares que he visitado, así como consejos para planificar tu propio viaje." />
      <Outlet />
    </Main>
  )
}