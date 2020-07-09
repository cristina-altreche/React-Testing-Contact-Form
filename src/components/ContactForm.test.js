import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils"
import ContactForm from "./ContactForm";

//test('title', cbToRunTheTest)

test("Adds a new user on Submit", async () => {
 render(<ContactForm />);

  //CAN YOU TYPE IN ALL INPUT FIELDS?
  //1. Query for all inputs
  const firstNameInput = screen.getByTestId(/firstname/i);
  const lastNameInput = screen.getByTestId(/lastname/i);
  const emailInput = screen.getByTestId(/email/i);
  const messageInput = screen.getByTestId(/message/i);
  const error = screen.queryByText(/lookslike there was an error/i)
  //2. Run the change event to add text
  //events with RTL - "change same as onChange".
  //Inside {} we mock adding text
  fireEvent.change(firstNameInput, { target: { value: "Cristina" } });
  fireEvent.change(lastNameInput, { target: { value: "Altreche" } });
  fireEvent.change(emailInput, { target: { value: "c.altreche@gmail.com" } });
  fireEvent.change(messageInput, { target: { value: "I am groot" } });

  //CAN YOU CLICK ON THE SUBMIT BTN?
  //1.query for the button
  const submitBtn = screen.getByText(/submit/i);
  //2.run the click event on the button
  //click events will just require to click the button.
  act(() => {fireEvent.click(submitBtn)});

  //assert that my new animal is in the list
  //1.query for the new contact text
  //2.assert that it is being rendered

  expect(error).not.toBeInTheDocument();


});


// test("App renders the form label", () => {
//   //AAA - Arange Act Assert

