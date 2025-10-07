"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  query: z.string().min(10, {
    message: "Query must be at least 10 characters.",
  }),
  callTime: z.string({
    required_error: "Please select a preferred time to call.",
  }),
});

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      query: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">Contact Us</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Phone Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="query"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Query</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Please describe your query..." rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="callTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred time to call</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a time slot" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12pm - 4pm)</SelectItem>
                          <SelectItem value="evening">Evening (4pm - 7pm)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <div className="space-y-8">
            <h2 className="font-headline text-2xl font-bold">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:xxxx@gmail.com" className="text-muted-foreground hover:text-primary">xxxx@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+91xxxxxxxxxx" className="text-muted-foreground hover:text-primary">+91 XXX-XXX-XXXX</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">123 Artisan Way, Craftsville, 45678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Instagram className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Instagram</h3>
                  <a href="#" className="text-muted-foreground hover:text-primary">@dero_official</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
