import {
  BookUser,
  Ellipsis,
  ShieldCheck,
  ShieldClose,
  ToggleRightIcon,
  Trash,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import DeleteUserDialog from "./deleteUserDialog";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { useState } from "react";

function userListTable({ users, deleteUser, toggleUserStatus }) {
  const [dialog, openDialog] = useState(false);

  return (
    <div className="w-full rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right w-fit"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell className="text-left">{index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.desc}</TableCell>
              <TableCell>
                {user.status ? (
                  <ShieldCheck className="inline stroke-green-500" />
                ) : (
                  <ShieldClose className="inline stroke-red-500" />
                )}
              </TableCell>
              <TableCell className="flex justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="hover:bg-none!important "
                    >
                      <Ellipsis />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full" align="start">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <BookUser />
                      Show details
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => toggleUserStatus(user.id)}
                    >
                      <ToggleRightIcon />
                      Toogle status
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => openDialog(true)}>
                      <Trash />
                      Delete user
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DeleteUserDialog
                  user={user}
                  deleteUser={deleteUser}
                  dialog={dialog}
                  openDialog={openDialog}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default userListTable;
