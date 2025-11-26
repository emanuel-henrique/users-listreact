import { Input } from "./ui/input";
import { useState } from "react";
import AddUserDialog from "./addUserDialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@radix-ui/react-label";

function addUserForm({ addNewUser, filterUsers, filterStatusUsers }) {
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-full flex justify-between gap-8 max-sm:flex-col r">
      <form
        action="#"
        className="flex gap-4  items-center max-sm:justify-between"
      >
        <Input
          className="flex-1 w-full"
          type="text"
          placeholder="Search a user"
          value={search}
          onChange={(event) => {
            const value = event.target.value;
            setSearch(value);
            filterUsers(value);
          }}
        ></Input>
        <div className=" flex gap-4  items-center">
          <Checkbox
            id="actived"
            className="border-muted-foreground"
            checked={checked}
            onCheckedChange={(event) => {
              setChecked(event);
              filterStatusUsers(event);
            }}
          />
          <Label
            htmlFor="actived"
            className="text-muted-foreground w-fit whitespace-nowrap"
          >
            Only actived
          </Label>
        </div>
      </form>
      <AddUserDialog addNewUser={addNewUser}></AddUserDialog>
    </div>
  );
}

export default addUserForm;
