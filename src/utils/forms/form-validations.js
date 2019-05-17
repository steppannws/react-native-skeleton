import Yup from 'yup';

const usernameFieldValidation = () => Yup.string().required('Username is required');

const noStrictPasswordFieldValidation = () => Yup.string().required('Password is required');

const signInValidation = () =>
  Yup.object().shape({
    username: usernameFieldValidation(),
    password: noStrictPasswordFieldValidation(),
  });

export { signInValidation };
