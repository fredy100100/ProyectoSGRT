import { AiOutlineHome } from "react-icons/ai";
import { FaUserCog, FaCubes } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";

export const linksArray = [
    {
        label: "Home",
        icon: <AiOutlineHome />,
        to: "/"
    },
    {
        label: "Usuarios",
        icon: <FaUserCog />,
        to: "/Usuarios"
    },
    {
        label: "Inventario",
        icon: <FaCubes />,
        to: "/Inventario"
    },
    {
        label: "Estadisticas",
        icon: <ImStatsBars />,
        to: "/Estadisticas"
    },
]