export const Form = (props) => {

    const { children } = props;

    return (
        <div className="form-container">
            <form {...props} onSubmit={props.onSubmit} autocomplete={props.autocomplete}>
                {children}
            </form>
        </div>
    )

}