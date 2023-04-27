import React, { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { TodoContext } from "../context/TodoContext";

interface TodoData {
  dueDate: Date;
  content: string;
}

const MyTextField = () => {
  const [textValue, setTextValue] = useState("");
  const [dateValue, setDateValue] = useState<Date | null>(null);
  const [textError, setTextError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [apiStatus, setApiStatus] = useState("");
  const { toggleRefetch } = useContext(TodoContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (textValue && dateValue) {
      const formattedDate = new Date(dateValue!).toISOString().split("T")[0];
      console.log(`Submitted values: ${textValue} and ${formattedDate}`);
      setTextError(false);
      setDateError(false);

      const data: TodoData = {
        dueDate: new Date(formattedDate),
        content: textValue,
      };
      axios
        .post<TodoData>("http://localhost:4545/api/todos", data)
        .then((response) => {
          console.log("Data received:", response.data);
          setTextValue("");
          setDateValue(null);
          setApiStatus("success");
          toggleRefetch(); // <-- trigger a refetch
          setTimeout(() => {
            setApiStatus("");
          }, 5000);
        })
        .catch((error) => {
          console.error("There was an error sending the POST request:", error);
          setApiStatus("error");
          setTimeout(() => {
            setApiStatus("");
          }, 5000);
        });
    } else {
      console.log("Please enter both a text value and date.");
      setTextError(!textValue);
      setDateError(!dateValue);
    }
  };

  // ...

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        placeholder="Add todo here..."
        value={textValue}
        sx={{
          width: "100%",
          marginBottom: "1rem",
          borderColor: "#F6F1E9",
          backgroundColor: "white",
          "&:hover": {
            borderColor: "#F6F1E9",
          },
          "&:focus": {
            borderColor: "#F6F1E9",
          },
        }}
        error={textError}
        onChange={(event) => {
          setTextValue(event.target.value);
          setTextError(false);
          setApiStatus("");
        }}
      />
      {textError && (
        <div
          style={{
            color: "red",
            fontSize: "11px",
            paddingBottom: "10px",
          }}
        >
          Please enter a text value.
        </div>
      )}
      <DatePicker
        selected={dateValue}
        onChange={(date: Date | null) => {
          setDateValue(date);
          setDateError(false);
          setApiStatus("");
        }}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a due date for the task"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        className="form-control"
      />
      {dateError && (
        <div
          style={{
            color: "red",
            fontSize: "11px",
            paddingBottom: "10px",
          }}
        >
          Please select a due date.
        </div>
      )}

      {apiStatus === "success" && (
        <div
          style={{
            color: "green",
            fontSize: "11px",
            paddingTop: "10px",
            textAlign: "center",
          }}
        >
          Task added successfully!
        </div>
      )}
      {apiStatus === "error" && (
        <div
          style={{
            color: "red",
            fontSize: "11px",
            paddingTop: "10px",
            textAlign: "center",
          }}
        >
          There was an error adding the task. Please try again later.
        </div>
      )}

      <Button
        type="submit"
        variant="contained"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "16px",
          width: "100%",
          backgroundColor: "#171717",
          color: "#FFF",
          marginTop: "1rem",
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default MyTextField;
