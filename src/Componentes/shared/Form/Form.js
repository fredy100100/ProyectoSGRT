import { useForm } from "react-hook-form";

export const Form = ({children}) => {

    const { register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
        {children}
        <input type="submit" value="Enviar"></input>
        </form>
        </>
    )
 
}