import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div className="container">
      <div className="users">
        {users.map((user) => {
          return (
            <Link to={user.id.toString()} key={user.id}>
              <div className="user">
                <h4>{user.name}</h4>
                <p>{user.email}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
