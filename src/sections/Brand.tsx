import { LinkIcon } from '@heroicons/react/24/solid'
import Napoles from '../images/napoles.jpeg';
export default function Brand() {
  return (
    <div className="relative bg-gray-800">
      <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={Napoles}
          alt=""
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Viajes</h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">Nápoles: una ciudad llena de historia, cultura y gastronomía</p>
          <p className="mt-3 text-lg text-gray-300">
          Nápoles es una ciudad vibrante y llena de vida, situada en la costa oeste de Italia.
          Es la capital de la región de Campania y es conocida por su rica historia,
          cultura y gastronomía.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 via-violet-400 to-orange-300"
              >
                Leer más
                <LinkIcon className="-mr-1 ml-3 h-5 w-5 text-white" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
