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
            {/* <button className='sidebarButton' >
                <IoIosArrowBack />
            </button> */}
            <div className='Logocontent'>
                <div className='imgcontent' >
                    <img src={logo} onClick={modSidebarOpen} ></img>
                </div>
                <h3>SGRT</h3>
            </div>
            {linksArray.map(({ icon, label, to }) => (
                <div className='LinkContainer' key={label}>
                    <NavLink to={to} className={({ isActive }) => `Links${isActive ? ` active` : ``}`}>
                        <div className='linkIcon'>
                            {icon}
                        </div>
                        {sidebarOpen && (<span>{label}</span>)}
                    </NavLink>
                </div>
            ))}
        </Container>
    )

}

const Container = styled.div`

    color: ${Light.text};
    background: #fff6;
    position: sticky;
    padding-top: 20px;
    margin-right: 20px;
    border-radius: 15px;
    box-shadow: 0 0.4rem 0.8rem #0005;
    height: 95vh;

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
            cursor: pointer;

            img {
                max-width: 40px;
                height: auto;
                
            } 
        }

        h3 {
        display: ${({ isOpen }) => (!isOpen ? `none` : `block`)};
        margin-left: 5px;
        font-family: "Poppins";
        color: ${Light.bg}  ;
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
            padding-left: 4px;
            color: rgb(22, 58, 131);

            .linkIcon{
                padding: ${v.smSpacing} ${v.smSpacing};
                display: flex;
                    svg {
                        font-size: 25px;
                    }
            }
        &.active {

            color: ${Light.bg};

            }
        }
            }

        }
    }
    
     
`