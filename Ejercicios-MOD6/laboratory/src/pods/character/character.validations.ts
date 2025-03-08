import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { minNumber } from '@lemoncode/fonk-min-number-validator';

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    species: [Validators.required],
    status: [Validators.required],
    //best sentence no es un campo obligatorio ni tiene validaciones por eso no lo incluyo
  },
};

export const formValidation = createFormikValidation(validationSchema);
