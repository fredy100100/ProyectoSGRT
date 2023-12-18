import './login.css';
import { Form } from '../shared/Form/Form';
import 'boxicons';

export const Login = () => {

    return (
        <div className='login-container'>
            <div className="form-login-container">
                <Form>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="email" placeholder="Correo electronico" />
                        <i><box-icon type='solid' name='user'></box-icon></i> 
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder="Contraseña" />
                        <i><box-icon type='solid' name='lock-alt'></box-icon></i>
                    </div>
                    <div className='remember-forgot'></div>
                    <label><input type="checkbox" />Recuerdame</label><a href='#'>Olvidaste tu contraseña?</a>
                    <button className="boton-login" type='submit'>Login</button>
                </Form>
            </div>
        </div>


    )
}