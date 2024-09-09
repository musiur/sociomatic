import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CustomInput = ({
  form,
  name,
  label,
  type = "text",
}: {
  form: any;
  name: string;
  label: string;
  type?: "text" | "textarea" | "number";
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          {type !== "textarea" ? (
            <Input
              type={type}
              onChange={(e: any) => {
                form.setValue(
                  name,
                  type === "number"
                    ? parseFloat(e.target.value)
                    : e.target.value
                );
              }}
              defaultValue={field.value}
            />
          ) : (
            <Textarea
              onChange={field.onChange}
              value={field.value}
              className="min-h-[240px]"
            />
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
