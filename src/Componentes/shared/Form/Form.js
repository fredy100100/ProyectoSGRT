import './Form.css';
import { useForm } from 'react-hook-form';

export const Form = (props) => {

    const {children} = props;

    const { register } = useForm();

    return (
        <div className="form-container">
            <form {...props}>
                {children}
            </form>
        </div>
    )

}