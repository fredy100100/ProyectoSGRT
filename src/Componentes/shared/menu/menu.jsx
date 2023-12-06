import './menu.css'
import { Link } from "react-router-dom"
import { MenuOptions } from "./mock"
import { GetMenuIcons } from '../../../utils/getMenuIcons'

export const Menu = () => {
    return (
        <nav className="navegator-conteiner">
            {
                MenuOptions.map((options) => {
                    const path = options.nombre === "SGRT" ? "" : options.nombre
                    const icon = GetMenuIcons(options.icono)
                    return (
                        <div className='option-item'>
                            <Link to={`/${path}`}>
                                <p className='option-name'>{options.nombre}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </nav>
    )
}