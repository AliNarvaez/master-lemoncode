import { Validators, createFormValidation } from "@lemoncode/fonk";
const validationSchema = {
  field: {
    username: [Validators.required, 
        {
        validator:Validators.email,
        message:"Username must be a valid email",
        }
    ],
    password: [
      Validators.required,
      {
        validator: Validators.minLength,
        customArgs: { length: 4 },
        message: "Password must have at least 4 characters :)",
      },
    ],
  },
};
export const formValidation = createFormValidation(validationSchema);
