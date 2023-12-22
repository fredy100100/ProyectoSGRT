import './login.css';
import { Form } from '../shared/Form/Form';
import { FaUser, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";

export const Login = () => {

    const { handleSubmit } = useForm();

    return (
        <div className='login-container'>
            <div className='forms-container'>
                <div className="form-login-container">
                    <h1>Bienvenido</h1>
                    <Form onSubmit={handleSubmit}>
                        <div className='input-box'>
                            <input type="email" placeholder="Correo electronico" required />
                            <FaUser className='icon' />
                        </div>
                        <div className='input-box'>
                            <input type="password" placeholder="Contraseña" required />
                            <FaLock className='icon' />
                        </div>
                        <div className='remember-forgot'>
                            <label><input type="checkbox" />Recuerdame</label><a href='#'>Olvidaste tu contraseña?</a>
                        </div>
                        <button className="boton-login" type='submit'>Ingresar</button>
                    </Form>
                </div>
            </div>
        </div >
    )
}