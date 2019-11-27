import React, {useState, createRef} from 'react';
import Input from '../Input/Input';

interface IForm {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
}

const Form: React.FC = () => {

    const [submitted, setSubmitted] = useState<boolean>(false);
    const [form, setForm] = useState<IForm>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
    })

    const firstName = createRef<HTMLInputElement>();
    const lastName = createRef<HTMLInputElement>();
    const phone = createRef<HTMLInputElement>();
    const email = createRef<HTMLInputElement>();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);

        setForm({
            firstName: firstName.current!.value,
            lastName: lastName.current!.value,
            phone: phone.current!.value,
            email: email.current!.value,
        })
    };

    console.log('form', form);

    return (
        <form onSubmit={onSubmit}>
            <Input ref={firstName} name="firstName" label="first name" submitted={submitted} required />
            <Input ref={lastName} name="lastName" label="last name" submitted={submitted} required />
            <Input ref={phone} name="phone" label="phone" submitted={submitted} />
            <Input ref={email} name="email" label="email" submitted={submitted} />
            <button type="submit" className="btn btn-primary custom-btn">Submit</button>
        </form>
    )
}

export default Form;
