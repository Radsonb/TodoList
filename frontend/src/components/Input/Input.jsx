const Input = ({ 
    type,
    name, 
    value, 
    onChange, 
    error, 
    placeholder, 
    className, 
    ...props }) => {
        return (
            <input
                data-error={error}
                className={className}
                type={type}
                name={name}
                id={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                {...props}
            />
        );
}

export default Input;