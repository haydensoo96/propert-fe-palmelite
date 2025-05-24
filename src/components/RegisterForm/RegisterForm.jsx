import React, { useState } from "react";
import "./RegisterForm.css";
import userSubmitForm from "../../hooks/useForm.jsx";
import { useCheckMobileScreen } from "../../utils/common.js";

const RegisterForm = () => {
  const isMobile = useCheckMobileScreen();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [formSubmitted, setFormSubmitStatus] = useState(false);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePhoneNumber = (number) => {
    // Regex pattern for a valid Malaysia mobile phone number
    const phoneNumberRegex = /^01[0-9]-*\d{7,8}$/;

    const isValid = phoneNumberRegex.test(number);
    setIsValidPhoneNumber(isValid);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const isValidPhone = validatePhoneNumber(formData.phone);

    // if (isValidPhone) {
    userSubmitForm(formData);
    setFormSubmitStatus(true);
    return;
    // } else {
    //   return;
    // }
  };

  return (
    <div
      className="c-wrapper"
      style={{ backgroundColor: "var(--black)" }}
      id="RegisterForm"
    >
      <iframe
        name="hidden_iframe"
        style={{ display: "none" }}
        title="hidden_iframe"
      ></iframe>
      <div className="flexCenter c-container innerWidth">
        <div className="flex paddings">
          {!formSubmitted ? (
            <div
              className="flexColCenter inner-container"
              style={{ background: "transparent", border: "0" }}
            >
              <span
                className="primaryText"
                style={
                  isMobile
                    ? { fontWeight: "500", fontSize: "20px" }
                    : { fontWeight: "300", fontSize: "30px" }
                }
              >
                REGISTER NOW
              </span>

              <span
                className="secondaryText"
                style={{ fontWeight: "300", fontSize: "15px" }}
              >
                Our Relationship Associates will be in touch with you shortly
              </span>
              <form
                onSubmit={handleSubmit}
                style={{
                  width: "100%",
                }}
              >
                <div
                  style={{
                    marginBottom: "5%",
                    borderBottom: "1px solid white",
                    borderColor: "white",
                    height: "30px",
                  }}
                >
                  <input
                    placeholder="  Name"
                    required
                    style={{
                      width: "100%",
                      background: "white",
                      border: "0",
                      height: "100%",
                    }}
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                {!isValidPhoneNumber && (
                  <p
                    className="secondaryText"
                    style={{
                      color: "white",
                      textAlign: "left",
                      marginBottom: "1%",
                    }}
                  >
                    Please enter a valid number.
                  </p>
                )}
                <div
                  style={{
                    marginBottom: "5%",
                    borderBottom: "1px solid white",
                    borderColor: "white",
                    height: "30px",
                  }}
                >
                  <input
                    required
                    placeholder="  Phone Number - eg. 0163334444"
                    style={{
                      width: "100%",
                      background: "white",
                      border: "0",
                      height: "100%",
                    }}
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div
                  style={{
                    marginBottom: "5%",
                    borderBottom: "1px solid white",
                    borderColor: "white",
                    height: "30px",
                  }}
                >
                  <input
                    placeholder="  Email"
                    style={{
                      width: "100%",
                      background: "white",
                      border: "0",
                      height: "100%",
                    }}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    border: "0",
                    background: "transparent",
                    borderBottom: "1px solid white",
                    height: "40px",
                  }}
                >
                  <p
                    style={
                      isMobile
                        ? {
                            color: "white",
                            fontSize: "15px",
                            fontWeight: "300",
                          }
                        : {
                            color: "white",
                            fontSize: "20px",
                            fontWeight: "200",
                          }
                    }
                  >
                    SUBMIT
                  </p>
                </button>
              </form>
            </div>
          ) : (
            <div className="flexColCenter inner-container">
              <span className="primaryText">
                Thanks for showing you interest
              </span>
              <span className="secondaryText">
                Our Sales Specialist will get in touch with you as soon as
                possible
                <br />
                Or you can proceed to book a time with us on the Whatsapps
                Provide above.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
