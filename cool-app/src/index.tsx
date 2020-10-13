import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { CoolForm, CoolInput } from "@ewendc/cool-library";
import "./styles.css";

function App() {
  const useFormMethods = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <CoolForm formMethods={useFormMethods} onSubmit={onSubmit} disabled={false}>
      <label>FirstName</label>
      <CoolInput name="FirstName" defaultValue="FirstName" />

      <label>LastName</label>
      <CoolInput
        name="LastName"
        validationRules={{ required: true, maxLength: 10 }}
      />
      {useFormMethods.errors.LastName && <p>This field is required</p>}

      <input type="submit" />
    </CoolForm>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
