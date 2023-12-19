import './login.css';
import { Form } from '../shared/Form/Form';
import { FaUser, FaLock } from "react-icons/fa";

export const Login = () => {

    return (
        <div className='login-container'>
            <div className="form-login-container">
                <Form>
                    <h1>Bienvenido</h1>
                    <div className='input-box'>
                        <input type="email" placeholder="Correo electronico" />
                        <FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder="Contraseña" />
                        <FaLock className='icon'/>
                    </div>
                    <div className='remember-forgot'>
                    <label><input type="checkbox" />Recuerdame</label><a href='#'>Olvidaste tu contraseña?</a>
                    </div>
                    <button className="boton-login" type='submit'>Ingresar</button>
                </Form>
            </div>
        </div>
    )
}