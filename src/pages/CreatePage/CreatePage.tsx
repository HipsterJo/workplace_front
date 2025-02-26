import { Input } from "../../elements/Input/Input";
import styles from "./CreatePage.module.css";
import { useEffect, useState } from "react";
import { useInputHandler } from "../../hooks/useInputHandler";
import { Button } from "../../elements/Button/Button";
import { createWorkplace, getWorkplace, updateWorkplace } from "../../api";
import { NewWorkplace, PatchWorkplace } from "../../types";
import axios from "axios";
import { useParams } from "react-router-dom";

const requiredFields = ["name", "description"];
const errorMessages = {
  name: "Name is required and should be unique",
  description: "Description is required",
  ip_address: "IP is not valid",
};

export const CreatePage = () => {
  const { isInputs, inputHandler } = useInputHandler();
  const [emptyFields, setEmptyFields] = useState<string[]>([]);
  const [lastName, setLastName] = useState<string>("");

  const { id } = useParams();

  const fetchWorkplace = async () => {
    try {
      const response = await getWorkplace(Number(id));
      inputHandler("name")(response.name);
      inputHandler("description")(response.description);
      inputHandler("ipv4")(response.ip_address);
      setLastName(response.name);
    } catch (error) {
      console.error("Error fetching workplace:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchWorkplace();
    }
  }, [id]);

  const handleCreate = async () => {
    try {
      const missingFields = requiredFields.filter((field) => !isInputs[field]);
      if (missingFields.length > 0) {
        alert(
          `Please fill in the following fields: ${missingFields.join(", ")}`
        );
        setEmptyFields(missingFields);
        return;
      }

      let sendedData: NewWorkplace | PatchWorkplace = {
        name: isInputs.name,
        description: isInputs.description,
        ip_address: isInputs.ipv4,
      };
      if (sendedData.ip_address === "") {
        sendedData.ip_address = null;
      }

      if (lastName === isInputs.name) {
        delete sendedData.name;
      }

      const response = id
        ? await updateWorkplace(Number(id), sendedData as PatchWorkplace)
        : await createWorkplace(sendedData as NewWorkplace);

      if (response) {
        alert(
          id
            ? "Workplace updated successfully!"
            : "Workplace created successfully!"
        );
      }
      return response.data;
    } catch (error) {
      console.error("Error creating workplace:", error);
      if (axios.isAxiosError(error) && error.response?.data) {
        const msg = error.response.data;
        setEmptyFields([Object.keys(msg)[0]]);
        alert(Object.values(msg)[0]);
      } else {
        console.error("Unexpected error:", error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.node}>
        <label>Name:</label>
        <Input
          value={isInputs.name || ""}
          placeholder="Name"
          error={emptyFields.includes("name") ? errorMessages.name : undefined}
          onChange={(e) => {
            setEmptyFields(emptyFields.filter((field) => field !== "name"));
            inputHandler("name")(e);
          }}
        />
      </div>

      <div className={styles.node}>
        <label>Description:</label>
        <Input
          value={isInputs.description || ""}
          placeholder="Description"
          error={
            emptyFields.includes("description")
              ? errorMessages.description
              : undefined
          }
          onChange={(e) => {
            setEmptyFields(
              emptyFields.filter((field) => field !== "description")
            );
            inputHandler("description")(e);
          }}
        />
      </div>
      <div className={styles.node}>
        <label>Ipv4*:</label>
        <Input
          value={isInputs.ipv4 || ""}
          placeholder="Ipv4"
          error={
            emptyFields.includes("ip_address")
              ? errorMessages.ip_address
              : undefined
          }
          onChange={(e) => {
            setEmptyFields(
              emptyFields.filter((field) => field !== "ip_address")
            );
            inputHandler("ipv4")(e);
          }}
        />
      </div>
      <Button onClick={handleCreate}>{id ? "Update" : "Create"}</Button>
    </div>
  );
};
