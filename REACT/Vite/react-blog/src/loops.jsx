function Loops() {
    const userData = [
        { name: "Mukesh", age: 24, email: "mukesh@gmail.com", id: 1 },
        { name: "Suraj", age: 27, email: "suraj@gmail.com", id: 2 },
        { name: "Akhil", age: 24, email: "akhil@gmail.com", id: 3 },
        { name: "Aks", age: 27, email: "aks@gmail.com", id: 4 },
    ];

    return (
        <div>
            <h4>Loops in JSX with Map function</h4>
            <table border="1">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Loops;
