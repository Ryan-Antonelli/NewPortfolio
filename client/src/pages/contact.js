import React, {useState} from "react"
import { Input, TextArea, FormBtn } from "../components/form";
import API from "../utils/API";

function Contact () {

  const [formObject, setFormObject] = useState({})

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        name: formObject.name,
        id: formObject.id
      })
        // .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

return (
    <section id="main-info" className="clearfix">

      <h1 className="logo">
        <p>Contact</p>
      </h1>

      <form className="form-group form" action="/action_page.php">
        <div className="clearfix">
          <label form="fname">First Name</label>
        <Input
                onChange={handleInputChange}
                // type="text"
                id="fname"
                name="firstname"
                placeholder="Please enter your first name"
              />
                <label form="lname">Last Name </label>
              <Input
                onChange={handleInputChange}
                // type="text" 
                id="lname" 
                name="lname"
                placeholder="Please enter your last name"
              />
                <label form="email">Email </label>
              <Input
                onChange={handleInputChange}
                // type="text" 
                id="email" 
                name="email" 
                placeholder="Please enter your email address" 
              />
                <label form="message">Message </label>
              <TextArea
                onChange={handleInputChange}
                id="message"
                name="message"
                placeholder="Anything you would like to say, this is the place"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
                type="submit" 
                id="sendButton"
              >
                Send
              </FormBtn>
        </div>
      </form>
    </section>
)

}
export default Contact