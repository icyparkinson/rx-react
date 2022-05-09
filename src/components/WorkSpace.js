import React from "react"

const WorkSpace = () => {
    return(
        <div style = {{margin: "100 auto"}}>
            <section style = {workSpaceStyle}>
                <p>Select from options above!</p>
            </section>
        </div>
    )
}

const workSpaceStyle = {
    textAlign: "center",
    border: "1px solid black",
    width: "80%",
    height: "500px",
    margin: "100px auto"
}

export default WorkSpace