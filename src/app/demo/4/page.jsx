"use client";

import { useReducer } from "react";

const initialFormData = {
  fields: {
    name: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
  },
  step: 1,
};

const reducer = (state, { action, key, value }) => {
  switch (action) {
    case "nextStep":
      return { ...state, step: state.step + 1 };
    case "previousStep":
      return { ...state, step: state.step - 1 };
    case "handleChange":
      return { ...state, fields: { ...state.fields, [key]: value } };
    default:
      alert("action not handled");
      break;
  }
};

export default function MultiStepForm() {
  const [form, dispatch] = useReducer(reducer, initialFormData);

  const handleSubmit = () => {
    alert("Thank you for your submission");
  };

  if (form.step === 1) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <div>
          <label>Step {form.step} of 3</label>
          <progress value={form.step} max={3} />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            name="name"
            id="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) =>
              dispatch({
                action: "handleChange",
                key: "name",
                value: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) =>
              dispatch({
                action: "handleChange",
                key: "email",
                value: e.target.value,
              })
            }
          />
        </div>
        <button
          type="button"
          className="secondary"
          onClick={() => dispatch({ action: "nextStep" })}
        >
          Next
        </button>
      </form>
    );
  } else if (form.step === 2) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Address</h2>
        <div>
          <label>Step {form.step} of 3</label>
          <progress value={form.step} max={3} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            required
            name="address"
            id="address"
            type="address"
            placeholder="What is your address?"
            value={form.address}
            onChange={(e) =>
              dispatch({
                action: "handleChange",
                key: "address",
                value: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            required
            name="city"
            id="city"
            placeholder="What city do you live in?"
            value={form.city}
            onChange={(e) =>
              dispatch({
                action: "handleChange",
                key: "city",
                value: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode</label>
          <input
            required
            name="zipcode"
            id="zipcode"
            type="number"
            placeholder="What is your zipcode?"
            value={form.zipcode}
            onChange={(e) =>
              dispatch({
                action: "handleChange",
                key: "zipcode",
                value: e.target.value,
              })
            }
          />
        </div>
        <div>
          <button
            className="secondary"
            type="button"
            onClick={() => dispatch({ action: "nextStep" })}
          >
            Next
          </button>
          <button
            type="button"
            className="link"
            onClick={() => dispatch({ action: "previousStep" })}
          >
            Previous
          </button>
        </div>
      </form>
    );
  } else if (form.step === 3) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Confirm your information:</h2>
        <div>
          <label>Step {form.step} of 3</label>
          <progress value={form.step} max={3} />
        </div>
        <table>
          <tbody>
            {Object.keys(form).map((key) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{formData[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button className="primary" type="submit">
            Submit
          </button>
          <button type="button" className="link" onClick={handlePrevStep}>
            Previous
          </button>
        </div>
      </form>
    );
  } else {
    return null;
  }
}
