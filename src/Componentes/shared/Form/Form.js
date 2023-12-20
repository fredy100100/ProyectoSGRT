import './Form.css';

export const Form = (props) => {

    const { children } = props;

    return (
        <div className="form-container">
            <form {...props} onSubmit={props.onSubmit}>
                {children}
            </form>
        </div>
    )

}