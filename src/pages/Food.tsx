import { useSelector, shallowEqual } from "react-redux"

import Main from "../components/Main";
import Branded from "../components/Branded";
import BlogList from "../components/BlogList";

export default function Food() {
  const articles: Article[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )

  return (
    <Main>
      <Branded url="/images/vista-lateral-carne.jpg" title="Gastronomía" content="Explorar la cocina de diferentes partes del mundo. Comparti recetas, reseñas de restaurantes y consejos para disfrutar de la mejor comida posible." />
      <BlogList articles={articles} />
    </Main>
  )
}
