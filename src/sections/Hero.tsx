import viajero from '../images/viajero-sentado.jpg';

export default function Index() {
  return (
    <div className="relative">
    <div className="mx-auto max-w-full">
      <div className="relative sm:overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={viajero}
            alt="traveler sitting on rock holding camera taking
                 photos mountains doi pha mon chiang rai thailand"
          />
        </div>
        <div className="relative px-4 py-24 sm:px-6 sm:py-24 lg:py-44 lg:px-8">
          <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-white">Bard's</span>
            <span className="block text-indigo-200">Travel and Food Blog</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
            El lugar perfecto para encontrar inspiración para tu próxima aventura. Con consejos sobre destinos, gastronomía y relax, Bard te ayudará a explorar el mundo y disfrutar de la vida.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}
