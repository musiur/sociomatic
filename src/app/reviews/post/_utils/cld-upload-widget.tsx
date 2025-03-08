"use client";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const CLD__UploadWidget = ({
  name,
  label,
}: {
  name: string;
  label: string;
}) => {
  const form = useFormContext();
  const [image, setImage] = useState<string | null>(null);

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem className="grid grid-cols-1">
          <FormLabel>{label}</FormLabel>
          <CldUploadWidget
            signatureEndpoint="/api/sign-cloudinary-params"
            onSuccess={(result: any) => {
              form.setValue(name, result?.info?.secure_url);
              setImage(result?.info?.secure_url);
            }}
            config={{
              cloud: {
                cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
                apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
              },
            }}
            options={{
              sources: ["local", "url", "unsplash"],
              multiple: false,
              maxFiles: 1,
            }}
          >
            {({ open }) => (
              <Button type="button" variant="outline" onClick={() => open()}>
                Upload Image
              </Button>
            )}
          </CldUploadWidget>
          {image && (
            <Image
              src={image}
              alt="Uploaded"
              width={500}
              height={500}
              className="w-[200px] h-auto mt-2"
            />
          )}
          <input type="hidden" {...form.register(name)} value={image || ""} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CLD__UploadWidget;
