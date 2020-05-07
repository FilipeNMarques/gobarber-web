import { ValidationError } from 'yup';

interface Errors {
  // Passar a interface assim, quer dizer que tanto chave quanto o valor, são strings
  [key: string]: string;
}

export default function getValidationErros(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
