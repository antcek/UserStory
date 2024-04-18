import React from "react";

import styles from "./index.module.css";
import { accounts } from "@/entities/AccountList/api/data";

export const AccountList = () => {


  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Счета пользователя</h2>
      <ul className={styles.list}>
        <li className={styles.list__header}>
          <span className={styles.list__item_firstCol}>Название счета</span>
          <span className={styles.list__item_secondCol}>Баланс</span>
          <span className={styles.list__item_thirdCol}>Валюта</span>
        </li>
        {accounts.map((account) => (
          <li key={account.id} className={styles.list__item}>
            <span className={styles.list__item_name}> {account.name}</span>{" "}
            <span className={styles.list__item_balance}>{account.balance}</span>
            <span className={styles.list__item_currency}>
              {account.currency}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

AccountList.displayName = "AccountList";
