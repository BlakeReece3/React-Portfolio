import React, { useState } from "react";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

    const [errorMessage, setErrorMessage] = useState("");

    const handleChanges = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    }};