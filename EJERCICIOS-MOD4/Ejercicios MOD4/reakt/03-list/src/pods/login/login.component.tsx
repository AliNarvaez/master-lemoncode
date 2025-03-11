import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { formValidation } from "./login.validation";
import { createEmptyLoginFormData, createEmptyLoginFormErrors, LoginFormData } from "./login.vm";

interface Props {
  onLogin: (data: LoginFormData) => void;
}

export const Login: React.FC<Props> = (props) => {
  const { onLogin } = props;

  const [formData, setFormData] = React.useState<LoginFormData>(createEmptyLoginFormData);

  const [errors, setErrors] = React.useState(createEmptyLoginFormErrors);

  const hasError = Object.keys(errors).some((x) => errors[x]);

  const handlechange = (field: keyof LoginFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    formValidation.validateField(field, e.target.value).then((validationResult) => {
      setErrors({
        ...errors,
        [field]: validationResult.message,
      });
    });
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formValidation.validateForm(formData).then((validationResult) => {
      if (validationResult.succeeded) {
        onLogin(formData);
      }
    });
  };

  return (
    <Card sx={{ padding: "10px", margin: "30px" }}>
      <CardHeader title="Welcome!" />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <TextField label="Username" variant="outlined"
                name="username"
                value={formData.username}
                onChange={handlechange("username")}
                helperText={errors.username}
                error={Boolean(errors.username)}
              />
            </div>

            <div>
              <TextField sx={{ marginTop: "10px" }} label="Password" variant="outlined"
                name="password"
                type="password"
                value={formData.password}
                onChange={handlechange("password")}
                helperText={errors.password}
                error={Boolean(errors.password)}
              />
            </div>

            <Button sx={{ marginTop: "10px" }} className="login-button" type="submit" disabled={hasError} variant="contained" size="large">
              Login
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
