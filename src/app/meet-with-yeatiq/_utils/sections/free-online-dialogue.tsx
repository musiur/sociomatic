import ContactForm from "@/app/contact-us/contact-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function FreeOnlineDialogue() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Free Online Session</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[80dvh] overflow-y-auto">
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}
