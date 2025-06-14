import ReuseComp from './ReuseComptesting';

function ReUseLoop() {
    const userData = [
        { name: "Mukesh", age: 24, email: "mukesh@gmail.com", id: 1 },
        { name: "Suraj", age: 27, email: "suraj@gmail.com", id: 2 },
        { name: "Akhil", age: 24, email: "akhil@gmail.com", id: 3 },
        { name: "Aks", age: 27, email: "aks@gmail.com", id: 4 },
        { name: "Dani", age: 27, email: "dani@gmail.com", id: 4 },
    ];

    return (
        <div>
            <h3>Reuse Component in Loop:</h3>
            {
                userData.map((user) => (
                    <div key={user.id} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ccc" }}>
                        <ReuseComp user={user} />
                    </div>
                ))
            }
        </div>
    );
}

export default ReUseLoop;
