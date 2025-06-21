/* eslint-disable no-unused-vars */
import { useActionState } from "react";

export default function Validation() {
    const handleLogin = (prevData, formData) => {
        let name = formData.get("name");
        let password = formData.get("password");
        let regex = /^[A-Z0-9]+$/i;

        if (!name || name.length > 5) {
            return { error: "Name should not contain more than 5 characters.", name, password };
        }

        if (!regex.test(password)) {
            return { error: "Password can contain only numbers and alphabets.", name, password };
        }

        return { message: "Login Done.", name, password };
    };

    const [data, action, pending] = useActionState(handleLogin);

    return (
        <div>
            <h5>Validation with useActionState in React</h5>
            {data?.message && <span style={{ color: "green" }}>{data.message}</span>}
            {data?.error && <span style={{ color: "red" }}>{data.error}</span>}
            <form action={action}>
                <input defaultValue={data?.name} type="text" name="name" placeholder="Enter User Name" />
                <br /><br />
                <input defaultValue={data?.password} type="text" name="password" placeholder="Enter User Password" />
                <br /><br />
                <button >Login</button>
            </form>
        </div>
    );
}
