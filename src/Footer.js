import React from "react";
const Footer = props => {
  const {
    contacts = [
      "123 Fake Street, London, E1 4UD",
      "hello@fakehotel.com",
      "0123 45678"
    ]
  } = props;
  const result = contacts.map((contact, index) => (
    <li key={contact.index}>{contact}</li>
  ));
  return (
    <footer>
      <ul className="list">{result}</ul>
    </footer>
  );
};

export default Footer;