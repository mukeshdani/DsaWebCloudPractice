import College from "./college"

function Looping() {

    const collegeData = [
        { name: 'IIT Delhi', city: 'Delhi', website: "www.iitdelhi.com", student: [{ name: "Mukessh Dani", age: 24, email: "mukeshdanimsit@gmail.com" }, { name: "Suraj Dani", age: 24, email: "suraj@gmail.com" }, { name: "Dinesh", age: 27, email: "dinesh@gmail.com" }] },
        { name: 'NIT UK', city: 'UK', website: "www.nituk.com" , student: [{ name: "Mukessh Dani", age: 24, email: "mukeshdanimsit@gmail.com" }, { name: "Suraj Dani", age: 24, email: "suraj@gmail.com" }, { name: "Dinesh", age: 27, email: "dinesh@gmail.com" }]},
        { name: 'MSIT Janakpuri', city: 'Janakpuri', website: "www.msitjk.com", student: [{ name: "Mukessh Dani", age: 24, email: "mukeshdanimsit@gmail.com" }, { name: "Suraj Dani", age: 24, email: "suraj@gmail.com" }, { name: "Dinesh", age: 27, email: "dinesh@gmail.com" }] }
    ]

    return <div>
        <h3>Nested Looping In React</h3>
        {
            collegeData.map((college, index)=>{
                return (
                    <College college={college} index={index} />
                )
                
            })
        }
    </div>
}

export default Looping