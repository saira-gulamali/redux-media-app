import React from "react";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/useThunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UsersListItem({ user }) {
  const [doRemoveUser, isDeletingUser, removeUserError] = useThunk(removeUser);

  function handleClick() {
    doRemoveUser(user);
  }

  const header = (
    <>
      {" "}
      <Button className="mr-3" loading={isDeletingUser} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {removeUserError && <div>Error deleting user...</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UsersListItem;
