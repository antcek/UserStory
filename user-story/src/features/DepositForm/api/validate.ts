interface IForm {
  amount:  number; 
  paymentType: string;
  email: string;
  phone: string | number;
  requisites: string;
}

interface IErrors {
  [key: string]: string | undefined;
}

const validateForm = ({ amount, paymentType, email, phone, requisites }: IForm): { isValid: boolean, errors: IErrors } => {
  const errors: IErrors = {};
  let isValid = true;

  if (!requisites) {
    errors.requisites = "Поле 'Реквизиты' обязательно для заполнения";
    isValid = false;
  }

  if (paymentType === "B2C" && !phone) {
    errors.phone = "Поле 'Номер телефона' обязательно для заполнения";
    isValid = false;
  }

  if (!email) {
    errors.email = "Поле 'Email' обязательно для заполнения";
    isValid = false;
  }

  if (!amount || isNaN(amount) || Number(amount) <= 0) {
    errors.amount = "Введите корректную сумму";
    isValid = false;
  }

  return { isValid, errors };
};

export default validateForm;
