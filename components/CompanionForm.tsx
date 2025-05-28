"use client"
import {z} from "zod"
import {useForm} from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {zodResolver} from "@hookform/resolvers/zod"
import {subjects} from "@/constants";
import {Textarea} from "@/components/ui/textarea";


const formSchema = z.object({
    name: z.string().min(2,{message: "Companion is required."}),
    subject: z.string().min(2,{message: "Subject is required."}),
    topic: z.string().min(2,{message: "Topic is required."}),
    voice: z.string().min(2,{message: "Voice is required."}),
    style:z.string().min(2,{message: "Style is required."}),
    duration: z.coerce.number().min(1,{message: "Duration is required."})
})

 const CompanionForm = () => {

     // 1. Define your form.
     const form = useForm<z.infer<typeof formSchema>>({
         resolver: zodResolver(formSchema),
         defaultValues: {
              name:"",
             subject:"",
             topic:"",
             voice:"",
             style:"",
             duration:15,
         },
     })
// 2. Define a submit handler.
     const onSubmit=(values: z.infer<typeof formSchema>)=> {
         // Do something with the form values.
         // ✅ This will be type-safe and validated.
         console.log(values)
        form.reset();
     }
         return (
             <Form {...form}>
                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                     <FormField
                         control={form.control}
                         name="name"
                         render={({ field }) => (
                             <FormItem>
                                 <FormLabel>Name</FormLabel>
                                 <FormControl>
                                     <Input placeholder="Enter the companion name." {...field} className="input" />
                                 </FormControl>
                             </FormItem>
                         )}
                     />
                     <FormField
                         control={form.control}
                         name="subject"
                         render={({ field }) => (
                             <FormItem>
                                 <FormLabel>Subjects</FormLabel>
                                 <FormControl>
                                     <Select
                                     onValueChange={field.onChange}
                                     value={field.value}
                                     defaultValue={field.value}>
                                         <SelectTrigger className="input capitalize">
                                             <SelectValue placeholder="Select the subject" />
                                         </SelectTrigger>
                                         <SelectContent>
                                             {subjects.map((subject) => (
                                                 <SelectItem
                                                 value={subject}
                                                 key={subject} className="capitalize">
                                                     {subject}
                                                 </SelectItem>
                                             ))}
                                         </SelectContent>
                                     </Select>
                                 </FormControl>
                             </FormItem>
                         )}
                     />
                     <FormField
                         control={form.control}
                         name="topic"
                         render={({ field }) => (
                             <FormItem>
                                 <FormLabel>What Should Companion Help with?</FormLabel>
                                 <FormControl>
                                     <Textarea placeholder="Ex. Derivatives & Integrals" {...field} className="input" />
                                 </FormControl>
                             </FormItem>
                         )}
                     />
                     <FormField
                         control={form.control}
                         name="voice"
                         render={({ field }) => (
                             <FormItem>
                                 <FormLabel>Voices</FormLabel>
                                 <FormControl>
                                     <Select
                                         onValueChange={field.onChange}
                                         value={field.value}
                                         defaultValue={field.value}>
                                         <SelectTrigger className="input ">
                                             <SelectValue placeholder="Select the Voice" />
                                         </SelectTrigger>
                                         <SelectContent>
                                                 <SelectItem
                                                     value={"male"}
                                                     className="capitalize">
                                                     male
                                                 </SelectItem>
                                             <SelectItem
                                                 value={"female"}
                                                 className="capitalize">
                                                 female
                                             </SelectItem>
                                         </SelectContent>
                                     </Select>
                                 </FormControl>
                             </FormItem>
                         )}
                     />
                     <FormField
                         control={form.control}
                         name="style"
                         render={({ field }) => (
                             <FormItem>
                                 <FormLabel>Styles</FormLabel>
                                 <FormControl>
                                     <Select
                                         onValueChange={field.onChange}
                                         value={field.value}
                                         defaultValue={field.value}>
                                         <SelectTrigger className="input">
                                             <SelectValue placeholder="Select the style" />
                                         </SelectTrigger>
                                         <SelectContent>
                                             <SelectItem
                                                 value={"formal"}
                                                 className="capitalize">
                                                 formal
                                             </SelectItem>
                                             <SelectItem
                                                 value={"casual"}
                                                 className="capitalize">
                                                 casual
                                             </SelectItem>
                                         </SelectContent>
                                     </Select>
                                 </FormControl>
                             </FormItem>
                         )}
                     />
                     <FormField
                         control={form.control}
                         name="duration"
                         render={({ field }) => (
                             <FormItem>
                                 <FormLabel>Estimated session Duration in minutes</FormLabel>
                                 <FormControl>
                                     <Input type="number" placeholder="Enter the companion Duration." {...field} className="input" />
                                 </FormControl>
                             </FormItem>
                         )}
                     />
                     <Button type="submit" className="w-full cursor-pointer text-lg" >Build your Companion</Button>
                 </form>
             </Form>    );
};

export default CompanionForm;