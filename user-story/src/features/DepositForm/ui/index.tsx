import React, { FormEvent, useState } from "react";

import styles from "./index.module.css";
import Link from "next/link";
import validateForm from "../api/validate";

export const DepositForm = ({}) => {
  const [amount, setAmount] = useState(0);
  const [paymentType, setPaymentType] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requisites, setRequisites] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>(
    {}
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { isValid, errors } = validateForm({
      amount,
      paymentType,
      email,
      phone,
      requisites,
    });

    if (isValid) {
      // функция отправки формы
      console.log({ amount, paymentType, email, phone, requisites });
      setAmount(0);
      setPaymentType("");
      setEmail("");
      setPhone("");
      setRequisites("");
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Пополнение счета</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        {" "}
        <div className={styles.formType}>
          <span>Выберите тип пополнения</span>
          <button
            onClick={() => setPaymentType("B2B")}
            className={styles.button__B2B}
          >
            B2B
          </button>
          <Link href="*" className={styles.link__B2С}>
            B2C
          </Link>
        </div>
        <div className={styles.formRequisites}>
          <label htmlFor="requisites">Реквизиты:</label>
          <input
            className={styles.input}
            name="requisites"
            type="text"
            value={requisites}
            onChange={(e) => setRequisites(e.target.value)}
          />
          {errors.requisites && (
            <p className={styles.error}>{errors.requisites}</p>
          )}
        </div>
        <div className={styles.formPhone}>
          <label htmlFor="phone">Номер телефона:</label>
          <input
            className={styles.input}
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}
        </div>
        <div className={styles.formEmail}>
          <label htmlFor="email">Email:</label>
          <input
            className={styles.input}
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.formSum}>
          <label htmlFor="number">Сумма:</label>
          <input
            className={styles.input}
            name="number"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          {errors.amount && <p className={styles.error}>{errors.amount}</p>}
        </div>
        <button className={styles.submitButton} type="submit">
          Пополнить
        </button>
      </form>
    </div>
  );
};

DepositForm.displayName = "DepositForm";
