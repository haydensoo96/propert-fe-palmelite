import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "https://propertybe.online/",
});

export const submitForm = async (formData) => {
  try {
    const form = document.createElement("form");
    form.action =
      "https://docs.google.com/forms/d/e/1FAIpQLSfRE6yF1LQnDxC_4ESB9XwPhb24fuBtrFcTJv9P4d7r1mKzig/formResponse";
    form.method = "POST";
    form.target = "hidden_iframe"; // Avoids redirection

    // Map formData to Google Form's entry IDs
    const formFields = {
      "entry.1264711140": formData.name,
      "entry.1734392691": formData.email, // Replace with the actual entry ID for Email
      "entry.367030579": formData.phone,
    };

    console.log("check formfield", formFields);

    // Create hidden inputs for each form field
    Object.entries(formFields).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    toast.success("Form Submitted Successfully!");
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const getAllProperties = async () => {
  try {
    return [];
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const getProperty = async (id) => {
  try {
    return {};
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const createUser = async (email, token) => {
  try {
    return true;
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const bookVisit = async (date, propertyId, email, token) => {
  try {
    return true;
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const removeBooking = async (id, email, token) => {
  try {
    return true;
  } catch (error) {
    toast.error("Something went wrong, Please try again");

    throw error;
  }
};

export const toFav = async (id, email, token) => {
  try {
    return true;
  } catch (e) {
    throw e;
  }
};

export const getAllFav = async (email, token) => {
  if (!token) return;
  try {
    return [];
  } catch (e) {
    toast.error("Something went wrong while fetching favs");
    throw e;
  }
};

export const getAllBookings = async (email, token) => {
  if (!token) return;
  try {
    return [];
  } catch (error) {
    toast.error("Something went wrong while fetching bookings");
    throw error;
  }
};

export const createResidency = async (data, token) => {
  console.log(data);
  try {
    return true;
  } catch (error) {
    throw error;
  }
};
