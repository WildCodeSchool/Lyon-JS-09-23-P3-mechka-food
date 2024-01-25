import { useState, useEffect } from "react";
import AdminUserCard from "./AdminUserCard";

export default function AdminUserPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/user")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });
  return (
    <section>
      <div>
        <h2>Toutes les users</h2>
      </div>
      <div>
        {users.map((user) => (
          <AdminUserCard
            key={user.id}
            id={user.id}
            username={user.username}
            firstname={user.firstname}
            lastname={user.lastname}
            email={user.email}
            role={user.role}
          />
        ))}
      </div>
    </section>
  );
}
