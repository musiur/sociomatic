import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RefundPolicyTerms } from "./refund-policy-terms";

const TermsAndConditionDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="px-4 h-9 border rounded-lg flex items-center justify-center text-sm text-center">
          Terms and Conditions
        </span>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="sr-only">
            Are you absolutely sure?
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[80dvh] rounded-md p-4">
          <RefundPolicyTerms />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsAndConditionDialog;
