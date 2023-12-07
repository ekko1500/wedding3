import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

export function Modal({ show, setShow, img }: any) {
  return (
    <Dialog open={show} onOpenChange={() => setShow(false)}>
      <DialogContent className="w-3/4">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Image src={img} alt="image" />
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={() => setShow(false)}>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
