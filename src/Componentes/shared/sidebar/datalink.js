import { AiOutlineHome } from "react-icons/ai";
import { FaUserCog, FaCubes } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { BiMessageRoundedAdd } from "react-icons/bi";
import { ModalX } from "../ModalX/ModalX";

export const linksArray = [
    {
        label: "Home",
        icon: <AiOutlineHome />,
        to: "/"
    },
    {
        label: "Solicitudes",
        icon: <BiMessageRoundedAdd />,
        to: "/Solicitudes"
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