import React from "react"
import styled from "styled-components"
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 10px auto;
    padding-bottom: 20px;

    div input{
        margin: 10px;
        width: 30%;
    }

    button{
      width: 200px;
      align-self: flex-end;
      margin-top: 20px;
    }
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;

`

function Contact(){
    return(
        <FormContainer>
            <h1>Contact Icy</h1>
                        <p class="reach">If you have any comments, questions, or suggestions for improvements, please let me know!</p>
    
                        <Form target="_blank" name="rxcontact" method="post">
                        <input type="hidden" name="form-name" value="rxcontact" />
                            <div>
                            <label for="name">Name</label>
                                <input type="text" name="name" id="name" placeholder="Your Name" required />
                            <label for="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email Address" required />
                            </div>
                                <textarea placeholder="Your Message" id="message" name="message" rows="5" required></textarea>
                          <button>Send Message</button>
                        </Form>
        </FormContainer>
    )
}

export default Contact


