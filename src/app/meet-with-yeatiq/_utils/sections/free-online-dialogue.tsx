import ContactForm from "@/app/contact-us/contact-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import DataLayerPusher from "../components/data-layer-pusher";

export function FreeOnlineDialogue() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DataLayerPusher />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[80dvh] overflow-y-auto">
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}
