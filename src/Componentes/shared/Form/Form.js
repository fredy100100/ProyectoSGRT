import './Form.css';
import { useForm } from "react-hook-form";

export const Form = (props) => {

    const { handleSubmit, reset} = useForm();

    const onSubmit = handleSubmit((data) => {
      console.log(data);
  
      reset();
    })

    const { children } = props;

    return (
        <div className="form-container">
            <form {...props} onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    )

}