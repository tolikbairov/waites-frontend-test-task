import React from "react";
import styles from "./UserList.module.css";
const UserList = ({ users }) => (
  <ul className={styles.UserList}>
    {users.map(({ id, name, sex, phone, birthday, avatarUrl, email }) => (
      <li key={id} className={styles.UserList__item}>
        <img
          src={avatarUrl}
          alt="Аватар пользователя"
          className={styles.avatar}
        />
        <p className={styles.infofield}>
          username:<span className={styles.fieldcontent}>{name}</span>
        </p>
        <p className={styles.infofield}>
          sex:<span className={styles.fieldcontent}> {sex}</span>
        </p>
        <p className={styles.infofield}>
          phone number:<span className={styles.fieldcontent}>{phone}</span>
        </p>
        <p className={styles.infofield}>
          email:<span className={styles.fieldcontent}> {email}</span>
        </p>
        <p className={styles.infofield}>
          birthday date:
          <span className={styles.fieldcontent}> {birthday}</span>
        </p>
      </li>
    ))}
  </ul>
);

export default UserList;
