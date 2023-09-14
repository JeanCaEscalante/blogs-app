import BlogCard from "./BlogCard"

type Props = {
  articles: Article[]
}

  
  export default function BlogList({articles}: Props) {
    return (
      <div className="relative">
        <div className="max-w-7xl mx-auto py-16">
          <div role="list" className="space-y-4">
            {articles.map((article: Article) => <BlogCard key={article.id} article={article}/>)}
          </div>
        </div>
      </div>
    )
  }
  