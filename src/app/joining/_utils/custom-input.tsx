import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const CustomInput = ({
  name,
  label,
  type = "text",
}: {
  name: string;
  label: string;
  type?: "text" | "textarea" | "number" | "password";
  }) => {
  const form = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          {type !== "textarea" ? (
            <div className="relative">
              <Input
                type={type === "password" ? (showPassword ? "text" : "password") : type}
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
              {type === "password" && (
                <div className="absolute right-2 top-1/2 -translate-y-1/2 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:cursor-pointer [&>svg]:stroke-gray-500 [&>svg]:hover:stroke-gray-700 [&>svg]:transition-all [&>svg]:duration-300" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Eye /> : <EyeOff />}
                </div>
              )}


            </div>
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
