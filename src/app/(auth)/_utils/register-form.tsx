"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import {
    Form
} from "@/components/ui/form"
import CustomInput from "@/app/joining/_utils/custom-input"
import Link from "next/link"
import { Sun } from "lucide-react"
import ShimmerButton from "@/components/magicui/shimmer-button"
import { A___Auth__Register } from "./actions"
import { useRouter } from "next/navigation"

const FormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),

    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    phone: z.string()
})


const RegisterForm = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            phone: ""
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        const result = await A___Auth__Register(data)
        if (result.success) {
            toast.success(result.message);
            router.push("/refer-mailbox")
        } else {
            toast.error(result.message)
        }
    }

    return (
        <>
            <h3 className="text-lg md:text-2xl font-semibold">Create an account</h3>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <CustomInput name="name" label="Name" />

                    <CustomInput name="email" label="Email" />
                    <CustomInput name="phone" label="Phone" />
                    <CustomInput name="password" label="Password" type="password" />

                    <ShimmerButton type="submit"
                        disabled={form.formState.isSubmitting}

                        className="w-full items-center gap-2">
                        {form.formState.isSubmitting ? (
                            <Sun className="w-4 h-4 animate-spin" />
                        ) : null}
                        {form.formState.isSubmitting ? "Submiting" : "Submit"}
                    </ShimmerButton>
                </form>

            </Form>
            <div>
                <p>Already have an account? <Link href="/login" className="text-primary underline">Login</Link></p>
            </div>
        </>
    )
}

export default RegisterForm;
