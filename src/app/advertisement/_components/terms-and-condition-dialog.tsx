import TermsAndConditions from "@/app/terms-and-conditions/_partials/_components/terms-and-conditions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsAndConditionDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="px-4 h-9 border rounded-lg flex items-center justify-center text-sm text-center">
          Terms and Conditions
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="sr-only">Are you absolutely sure?</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[80dvh] rounded-md border p-4">
          <TermsAndConditions />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsAndConditionDialog;
