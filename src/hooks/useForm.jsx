import { submitForm } from "../utils/api";

const userSubmitForm = (body) => {
  submitForm(body).then((data) => {
    return data;
  });
};

export default userSubmitForm;
