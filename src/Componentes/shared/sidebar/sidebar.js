import styled from 'styled-components';
import { v } from '../../styles/variables';
import logo from '../../../Imagenes/soporte-de-ti.png';
import { IoIosArrowBack } from "react-icons/io";
import { Light } from '../../styles/themes';
import { linksArray } from './datalink';
import { NavLink, useLocation } from 'react-router-dom';

export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const modSidebarOpen = () => {
        setSidebarOpen(!sidebarOpen)
    }
    const { pathname } = useLocation();
    const isActive = Location.pathname;
    return (
        <Container isOpen={sidebarOpen}>
            <button className='sidebarButton' onClick={modSidebarOpen}>
                <IoIosArrowBack />
            </button>
            <div className='Logocontent'>
                <div className='imgcontent'>
                    <img src={logo}></img>
                </div>
                <h3>SGRT</h3>
            </div>
            {linksArray.map(({ icon, label, to }) => (
                <div className='LinkContainer' key={label}>
                    <NavLink to={to} className={({ isActive }) => `Links${isActive ? ` active` : ``}`}>
                        <div className='linkIcon'>
                            {icon}
                            {sidebarOpen && (<span>{label}</span>)}
                        </div>
                    </NavLink>
                </div>
            ))}
        </Container>
    )

}

const Container = styled.div`

    color: ${Light.text};
    background: rgb(255,255,255);
    position: sticky;
    padding-top: 20px;

    .sidebarButton {
        position: absolute;
        top: ${v.xxlSpacing};
        right: -18px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: ${Light.bgtgderecha};
        box-shadow: 0 0 4px ${Light.bg3}, 0 0 7px ${Light.bg};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s;
        transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
        border: none;
        letter-spacing: inherit;
        color: inherit;
        font-size: inherit;
        text-align: inherit;
        padding: 0;
        font-family: inherit;
        outline:none;
    }

    .Logocontent {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: ${v.lgSpacing};

        .imgcontent {
            display: flex;

            img {
                max-width: 40px;
                height: auto;
            } 
        }

        h3 {
        display: ${({ isOpen }) => (!isOpen ? `none` : `block`)};
        margin-left: 5px;
        font-family: "Poppins";
        color: #0098be;
        }
    }

    .LinkContainer {
        margin: 8px 0;
        padding: 0 15%;
        :hover {
            background: ${Light.bg3};
        }

        .Links {
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: calc(${v.smSpacing}-2px) 0;
            color: ${Light.text};

            .linkIcon{
                padding: ${v.smSpacing} ${v.smSpacing};
                display: flex;
                    svg {
                        font-size: 25px;
                    }
            }
        &.active {
            .linkIcon {
                    svg {
                        color: ${Light.bg4}
                    }
            }
        }
            }

        }
    }
    
     
`