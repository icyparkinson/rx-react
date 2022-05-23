import React from "react"

const Vaccine = () => {
    return(
        <div>
            <h1>Pneumonia Guidelines</h1>
            {/* <p>Put a button here...</p>
            <input type = "radio" id = "apple" name = "fruits" value = "apple"></input>
                <label for = "apple">Apple</label>
            <input type = "radio" id = "banana" name = "fruits" value = "banana"></input>
            <label for = "banana">Banana</label> */}
            <iframe title = "pneumonia" style = {{width: "95%", height: "750px"}}src="https://doh.wa.gov/sites/default/files/2022-05/348-875-AdultPCVRecommendations.pdf?uid=6282ca13dd8fc"></iframe>
        </div>
    )
}

export default Vaccine