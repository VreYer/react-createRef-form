import React from 'react';
import './input.css';

export type Ref = HTMLInputElement;
interface IProps {
    submitted?: boolean;
    name: string;
    label: string;
    required?: boolean;
    ref?: any;
}

const Input: React.FC<IProps> = React.forwardRef<Ref, IProps>(({ 
    submitted, 
    name, 
    label,  
    required }, 
    ref
) => {
    const [value, setValue] = React.useState("");
    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
    
    return (
        <div className="form-group">
            <label htmlFor="firstname">{label}</label>
            <input 
                type="text" 
                className={`form-control custom-input ${submitted && required && !value ? 'is-invalid' : ''}`} 
                name={name} 
                placeholder={label} 
                value={value}
                ref={ref}
                onChange={handleInputChange} />
                {submitted && required && !value ? <div className="invalid-feedback">Please provide a {label}</div>: ''}
        </div>
    )
});

export default Input;