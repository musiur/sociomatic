import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const C__Input = ({
  form,
  name,
  label,
  placeholder,
  type = "text",
}: {
  form: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password" | "tel" | "textarea";
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              type={type}
              onChange={(event: any) => {
                const value = event.target.value;
                form.setValue(
                  name,
                  type === "number" ? parseFloat(value || 0) : value
                );
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default C__Input;
