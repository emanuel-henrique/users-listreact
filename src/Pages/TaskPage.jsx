import { v4 as uuidv4 } from "uuid";

import AddUserForm from "../components/addUserForm";
import UserListTable from "../components/usersListTable";
import { useEffect, useState } from "react";

function TaskPage() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [usersBK, setUsersBK] = useState(users);

  function addNewUser(name, desc, status) {
    const newUserList = {
      id: uuidv4(),
      name: name,
      desc: desc,
      status: status,
    };

    setUsersBK([...usersBK, newUserList]);
    setUsers([...users, newUserList]);
  }

  function deleteUser(userId) {
    const newUserList = users.filter((user) => user.id !== userId);

    setUsers(newUserList);
    setUsersBK(newUserList);
  }

  function filterUsers(textContent) {
    if (textContent.trim() === "") {
      setUsers(usersBK);
      return;
    }

    const searchText = textContent.toLowerCase().replace(/\s+/g, "");

    const filtredList = usersBK.filter(
      (user) =>
        user.name.toLowerCase().replace(/\s+/g, "").includes(searchText) ||
        user.desc.toLowerCase().replace(/\s+/g, "").includes(searchText)
    );

    setUsers(filtredList);
  }

  function filterStatusUsers(checkbox) {
    if (checkbox) {
      const filteredList = usersBK.filter((user) => user.status === true);
      setUsers(filteredList);
    } else {
      setUsers(usersBK);
    }
  }

  function toggleUserStatus(userId) {
    function updateStatus(list) {
      return list.map((user) =>
        user.id === userId ? { ...user, status: !user.status } : user
      );
    }

    setUsers(updateStatus(users));
    setUsersBK(updateStatus(usersBK));
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(users));
  }, [usersBK]);

  return (
    <div className="w-[70vw] max-lg:w-[80vw] max-sm:w-[90vw] flex flex-col justify-center gap-6 mt-16 m-auto">
      <AddUserForm
        addNewUser={addNewUser}
        filterUsers={filterUsers}
        filterStatusUsers={filterStatusUsers}
      />
      <UserListTable
        users={users}
        deleteUser={deleteUser}
        toggleUserStatus={toggleUserStatus}
      />
    </div>
  );
}

export default TaskPage;
