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
    
                        {/* <Form target="_blank" name="rxbuddy" method="POST" data-netlify="true">
                            <div>
                            <label for="name">Name</label>
                                <input type="text" name="name" class="form-control" placeholder="Your Name" required />
                            <label for="email">Email</label>
                                <input type="email" name="email" class="form-control" placeholder="Email Address" required />
                            </div>
                                <textarea placeholder="Your Message" class="form-control" name="message" rows="5" required></textarea>
                          <button>Send Message</button>
                        </Form> */}

                    {/* <form name="rxbuddyContact" method="post">
                            <input type="hidden" name="rxBuddy-contact" value="rxbuddyContact" />
                            <p>
                                <label>Your Name: <input type="text" name="name"/></label>
                            </p>
                            <p>
                                <label>Your Email: <input type="email" name="email"/></label>
                            </p>
                            <p>
                                <label>Message: <textarea name="message"></textarea></label>
                            </p>
                            <p>
                                <button type="submit">Send</button>
                            </p>
                            </form> */}


                    <NetlifyForm name='Contact' action='/thanks' honeypotName='bot-field'>
                        {({ handleChange, success, error }) => (
                        <>
                            <Honeypot />
                            {success && <p>Thanks for contacting us!</p>}
                            {error && (
                            <p>Sorry, we could not reach our servers. Please try again later.</p>
                            )}
                            <div>
                            <label htmlFor='name'>Name:</label>
                            <input type='text' name='name' id='name' onChange={handleChange} />
                            </div>
                            <div>
                            <label htmlFor='message'>Message:</label>
                            <textarea
                                type='text'
                                name='message'
                                id='message'
                                rows='4'
                                onChange={handleChange}
                            />
                            </div>
                            <div>
                            <button type='submit'>Submit</button>
                            </div>
                        </>
                        )}
                    </NetlifyForm>
        </FormContainer>
    )
}

export default Contact


