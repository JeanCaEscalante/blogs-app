import { useSelector, shallowEqual } from "react-redux"


import BlogList from "../components/BlogList";

export default function FoodList() {
  const articles: Article[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )

  return (
    <>
      <BlogList articles={articles} />
    </>
  )
}