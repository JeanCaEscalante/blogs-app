type Props = {
    article: Article
  }
  
    
    export default function BlogCard({article}: Props) {
      return (
        <div  className="relative bg-gradient-to-b from-cyan-500 via-violet-400 to-orange-300 shadow overflow-hidden px-6">
            <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-white">
                <div className="md:mr-auto md:w-1/2 md:pr-10">
                    <h2 className="text-base font-semibold uppercase tracking-wider text-black">Award winning support</h2>
                    <p className="mt-2 text-black text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>
                    <p className="mt-3 text-lg text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
                        scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
                        tincidunt duis.
                    </p>
                </div>
            </div>
            <div className="h-56 sm:h-72 md:absolute md:top-0 md:right-0 md:h-full md:w-1/2">
                <img
                className="w-full h-full object-cover"
                src={'/images/hermosa-joven-pareja-mochilas-senderismo.jpg'}
                alt=""
                />
            </div>
        </div>
      )
    }
    