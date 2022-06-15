import { Route } from "./Route";

type NavigationLinkProps = {
  route: Route
}
const NavigationLink = (props: NavigationLinkProps) => {
  return (
    <li>
      <a href="#" className="block text-md py-2 pr-4 pl-3 text-azureish-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">
        {props.route}
      </a>
    </li>
  )
}

export default NavigationLink;