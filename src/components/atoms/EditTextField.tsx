import React, { useState } from "react";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useRouter } from "next/router";

interface EditTextFieldProps {
  id: number;
  content: string;
  dueDate?: Date | null;
  status: boolean;
}

const EditTextField = ({
  id,
  status,
  content,
  dueDate = new Date(),
}: EditTextFieldProps) => {
  const router = useRouter();
  const [textValue, setTextValue] = useState(content);
  const [dateValue, setDateValue] = useState<Date | null>(
    dueDate ? new Date(dueDate) : null
  );
  const [currentStatus, setCurrentStatus] = useState(status);
  const [textError, setTextError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [apiStatus, setApiStatus] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (textValue && dateValue) {
      setTextError(false);
      setDateError(false);

      const data = {
        id,
        content: textValue,
        dueDate: dateValue,
        status: currentStatus,
      };
      const url = `http://localhost:3000/api/todos?id=${id}`;

      axios
        .put(url, data)
        .then((response) => {
          setApiStatus("success");
          setTimeout(() => {
            setApiStatus("");
          }, 5000);
          router.push("/");
        })
        .catch((error) => {
          setApiStatus("error");
          setTimeout(() => {
            setApiStatus("");
          }, 5000);
        });
    } else {
      setTextError(!textValue);
      setDateError(!dateValue);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        placeholder="Edit todo here..."
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
        onChange={(date) => setDateValue(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a due date..."
        withPortal
        showYearDropdown
        showMonthDropdown
        dropdownMode="select"
        popperPlacement="top"
        popperModifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 5],
            },
          },
        ]}
        popperProps={{
          positionFixed: true,
        }}
      />

      <RadioGroup
        aria-label="status"
        name="status"
        value={currentStatus.toString()}
        onChange={(event) => {
          setCurrentStatus(event.target.value === "true");
        }}
        sx={{
          "& .MuiRadio-colorSecondary.Mui-checked": {
            color: "#171717",
          },
          display: "flex",
          flexDirection: "row",
          marginBottom: "5px",
        }}
      >
        <FormControlLabel
          value="true"
          control={<Radio color="secondary" />}
          label="Done"
          sx={{ mr: 5 }}
        />
        <FormControlLabel
          value="false"
          control={<Radio color="secondary" />}
          label="Unfinished"
          sx={{ mr: 1 }}
        />
      </RadioGroup>

      {dateError && (
        <div
          style={{
            color: "red",
            fontSize: "11px",
            paddingBottom: "10px",
          }}
        >
          Please select a date.
        </div>
      )}

      {apiStatus === "success" && (
        <div
          style={{
            color: "green",
            fontSize: "11px",
            padding: "20px 0",
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
        variant="contained"
        type="submit"
        sx={{
          width: "100%",
          backgroundColor: "#171717",
          "&:hover": {
            backgroundColor: "#171717",
          },
          color: "white",
        }}
      >
        Update
      </Button>

      <Box
        display={"flex"}
        justifyContent="flex-end"
        marginTop={"30px"}
        alignItems="center"
        bgcolor={"white"}
        width="fit-content"
        padding={"10px"}
        borderRadius="10px 15px"
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
      >
        <IoReturnUpBackOutline />{" "}
        <Typography pl="10px" fontSize={"13px"}>
          Return to Homepage
        </Typography>
      </Box>
    </form>
  );
};

export default EditTextField;
