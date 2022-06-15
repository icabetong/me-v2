import { MenuIcon } from "@heroicons/react/outline"
import { Route } from "./Route"
import NavigationLink from "./NavigationLink";

const routes: Route[] = ["about", "skills", "works", "contact"];
const Navigation = () => {
  return (
    <nav className="bg-russian border-gray-200 px-4 py-2.5 md:py-8 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
          <span className="font-semibold text-xl">icabetong</span>
        </a>
        <button 
          type="button"
          data-collapse-toggle="mobile-menu"  
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <MenuIcon className="h-5 w-5"/>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            { 
              routes.map((route) => <NavigationLink key={route} route={route}/>)
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}



export default Navigation;