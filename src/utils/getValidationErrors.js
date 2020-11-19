export default function getValidationErrors(error) {
  const validationErrors = {};

  error.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
