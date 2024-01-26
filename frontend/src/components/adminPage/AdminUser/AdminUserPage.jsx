import { useState, useEffect } from "react";
import AdminUserCard from "./AdminUserCard";
import styles from "./AdminUserPage.module.css";

export default function AdminUserPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/user")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });
  return (
    <section>
      <div className={styles.containerTitle}>
        <h2 className={styles.titleRecipeContainer}>Toutes les users</h2>
      </div>
      <div className={styles.cardPosition}>
        {users.map((user) => (
          <AdminUserCard
            key={user.id}
            id={user.id}
            username={user.username}
            firstname={user.firstname}
            lastname={user.lastname}
            email={user.email}
            role={user.role_id}
            userid={user.id}
          />
        ))}
      </div>
    </section>
  );
}
