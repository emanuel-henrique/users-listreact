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

function deleteUserDialog({ user, deleteUser, dialog, openDialog }) {
  return (
    <Dialog open={dialog} onOpenChange={openDialog}>
      <DialogContent className="max-sm:w-[80vw]>
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete this user?</DialogTitle>
          <DialogDescription>
            By clicking confirm, please be aware that this action is
            irreversible.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={function () {
              deleteUser(user.id);
              openDialog(false);
            }}
          >
            Confirm
          </Button>
          <DialogClose asChild>
            <Button variant="destructive">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default deleteUserDialog;
