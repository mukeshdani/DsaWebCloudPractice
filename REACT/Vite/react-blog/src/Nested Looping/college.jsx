const College = ({college, index})=>{
    return <div style={{background:"", padding:"20px", border:"2px solid red" }}key={index}>
                <h6>Name: {college.name}</h6>
                <h6>City: {college.city}</h6>
                <h6>website: {college.website}</h6>
                <l1>
                    {
                        college.student.map((student)=>{
                            return(
                                <div>
                                     <h6>{student.name}</h6>
                                </div>
                            )
                        })
                    }
                </l1>
    </div>
}

export default College