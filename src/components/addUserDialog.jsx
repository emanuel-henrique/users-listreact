import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useState } from "react";

function addUserDialog({ addNewUser }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setActived] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add user</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Add a new user</DialogTitle>
          <DialogDescription>
            Fill in the fields below to add a new user to the list.
          </DialogDescription>
        </DialogHeader>
        <Label>Username</Label>
        <Input
          placeholder="Username"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></Input>
        <Label>Description</Label>
        <Input
          placeholder="Description"
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
        ></Input>
        <div className="flex gap-4 items-center ">
          <Label>Status</Label>
          <Switch checked={status} onCheckedChange={setActived}></Switch>
        </div>
        <DialogFooter className="w-full mt-2">
          <DialogClose asChild className="flex-1 max-sm:mt-3">
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <DialogClose asChild className="flex-1">
            <Button
              onClick={() => {
                if (!name.trim() || !desc.trim()) {
                  alert("Fill in all fields");
                  return;
                }
                addNewUser(name, desc, status);
                setName("");
                setDesc("");
                setActived(false);
              }}
            >
              Add
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default addUserDialog;
