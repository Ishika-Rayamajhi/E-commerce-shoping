

import { NavLink } from "../constant/Navlink"
import { Logo } from "../image"

type ResponsiveMenuProps = {
    showMenu: boolean
}

const ResponsiveMenu = ({ showMenu }: ResponsiveMenuProps) => {
    return (
        <div className={`${showMenu ? "left-0" : "left-[-100%]"}
        fixed top-0 dark:bg-gray-900 h-screen w-[75%] dark:text-white px-8 py-8
        duration-500 flex flex-col
        `}>
            <div>
                <img src={Logo} alt="logo" className="h-16 w-16" />
            </div>

            <div>
                <ul className="flex flex-col gap-4">
                    {NavLink.map((data) => (
                        <li key={data.id} className="text-xl font-semibold border-b border-gray-100
                        dark:border-gray-800 hover:text-primary">
                            <a href={data.path}>{data.name}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-auto" >
                <button className="primary-btn">join now</button>
            </div>
        </div>
    )
}

export default ResponsiveMenu