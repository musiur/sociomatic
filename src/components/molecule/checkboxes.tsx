"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useFormContext } from "react-hook-form";

type Type__Option = {
  label: string;
  value: string;
  checked: boolean;
};

export default function Checkboxes({
  options = [],
  name,
  label,
  menuLabel = "Select",
}: {
  options: Type__Option[];
  name: string;
  label: string;
  menuLabel?: string;
  }) {
  const form = useFormContext();
  const [selected, setSelected] = React.useState<Type__Option[]>(options);
  const [showValues, setShowValues] = React.useState<Type__Option[]>(
    selected.filter((item: Type__Option) => item.checked)
  );

  React.useEffect(() => {
    const filteredValues = selected.filter(
      (item: Type__Option) => item.checked
    );
    setShowValues(filteredValues);
  }, [selected]);

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="w-full text-left flex items-center justify-start flex-wrap gap-2 p-2 rounded-md border md:cursor-pointer">
                {showValues?.length
                  ? showValues.map((item: Type__Option) => {
                      const { value } = item;
                      return (
                        <span
                          key={value}
                          className="bg-blue-50 px-2 py-1 rounded-md"
                        >
                          {item.label}
                        </span>
                      );
                    })
                  : "Select options..."}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {selected.map((option: Type__Option) => {
                const { value, checked } = option;
                return (
                  <DropdownMenuCheckboxItem
                    key={value}
                    checked={checked}
                    onCheckedChange={() => {
                      const updatedValues = selected.map(
                        (item: Type__Option) => {
                          if (value === item.value) {
                            return { ...item, checked: !item.checked };
                          } else {
                            return item;
                          }
                        }
                      );

                      const onlyCheckedValues = updatedValues
                        .filter((item: Type__Option) => item.checked)
                        ?.map((item: Type__Option) => item.value);

                      form.setValue(name, onlyCheckedValues);

                      setSelected(updatedValues);
                    }}
                  >
                    {option.label}
                  </DropdownMenuCheckboxItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
