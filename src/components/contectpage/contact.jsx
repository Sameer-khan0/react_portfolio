import React, { useContext, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { themeContext } from "../../Context";

function contect() {
  const [values, setValues] = useState({});
  const whileonchandege = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const whilesubmit = async (e) => {
    let btn = document.getElementById("submitbtn");
    btn.value = "Loading...";
    e.preventDefault();
    if (
      !values.name ||
      !values.email ||
      !values.phone ||
      !values.subject ||
      !values.msg
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    try {
      setValues((prevValues) => ({ ...prevValues, loading: true }));
      const result = await emailjs.send(
        "service_d0vu2ui",
        "template_jjgi2w8",
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.msg,
        },
        "2sOCJWTO4001zOV3a"
      );
      setValues({});
      document.getElementById("message").value = "";
      alert("Message is sent");
      console.log(result.text);
    } catch (error) {
      console.error(error);
      alert("Error sending message. Please try again later.");
    } finally {
      document.getElementById("submitbtn").value = "Submit";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      setValues((prevValues) => ({ ...prevValues, loading: false }));
    }
  };

  const nightmood = useContext(themeContext);
  const { isNightMode } = nightmood;
  const style = {
    background: `${isNightMode ? "black" : "white"}`,
    color: `${isNightMode ? "white" : "black"}`,
  };
  const styleofinputs = {
    background: `${isNightMode ? "black" : "white"}`,
    color: `${isNightMode ? "white" : "black"}`,
  };
  
  return (
    <section id="contact" className="conjectspage" style={style}>
      <div className="conmaincon">
        <div className="conpagename">Contect Me</div>
        <div className="all-con">
          <div className="contectsinputs">
            <div className="nameinput">
              <label htmlFor="name">name</label>
              <input
                type="text"
                name="name"
                onChange={whileonchandege}
                id="name"
                style={styleofinputs}
              />
            </div>
            <div className="nameinput">
              <label htmlFor="email">Email</label>
              <input
                onChange={whileonchandege}
                type="text"
                name="email"
                id="email"
                style={styleofinputs}
              />
            </div>
            <div className="nameinput">
              <label htmlFor="number">Number</label>
              <input
                onChange={whileonchandege}
                type="number"
                name="phone"
                id="phone"
                style={styleofinputs}
              />
            </div>
            <div className="nameinput">
              <label htmlFor="subject">Subject</label>
              <input
                onChange={whileonchandege}
                type="text"
                name="subject"
                id="subject"
                style={styleofinputs}
              />
            </div>
            <textarea
              name="msg"
              id="message"
              onChange={whileonchandege}
              cols="20"
              rows="10"
              style={styleofinputs}
              placeholder="Massege"
            ></textarea>
          </div>
        </div>
        <button
          className="button i-button"
          id="submitbtn"
          onClick={whilesubmit}
        >
          Submit
        </button>
      </div>
    </section>
  );
}

export default contect;
