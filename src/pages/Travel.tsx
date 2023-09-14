import { useSelector, shallowEqual } from "react-redux"

import BlogList from "../components/BlogList";
import Branded from "../components/Branded";
import Main from "../components/Main";


export default function Travel() {

  const articles: Article[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )


  return (
    <Main>
      <Branded url="/images/vuelo-globo-aerostatico.jpg" title="Destinos" content="Cubre una amplia gama de lugares, desde grandes ciudades y destinos turísticos hasta pueblos y rincones menos conocidos. Compartiré información sobre los lugares que he visitado, así como consejos para planificar tu propio viaje." />
      <BlogList articles={articles} />
    </Main>
  )
}