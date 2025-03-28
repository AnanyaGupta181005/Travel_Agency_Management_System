"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { MessageSquare, Send, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false)

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      bookingReference: "",
      rating: "5",
      feedback: "",
    },
  })

  function onSubmit(data: any) {
    console.log("Feedback submitted:", data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-12">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-secondary">
          <ThumbsUp className="h-10 w-10" />
        </div>
        <h1 className="mb-2 text-center text-3xl font-bold tracking-tight md:text-4xl">Thank You for Your Feedback!</h1>
        <p className="mb-8 max-w-md text-center text-muted-foreground">
          We appreciate you taking the time to share your experience with us. Your feedback helps us improve our
          services.
        </p>
        <Button onClick={() => setSubmitted(false)}>Submit Another Response</Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Share Your Feedback</h1>
        <p className="mt-2 text-muted-foreground">
          We value your opinion and would love to hear about your experience with our services
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Submit Your Feedback</CardTitle>
            <CardDescription>Please fill out the form below to share your thoughts about our services.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bookingReference"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Booking Reference (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your booking reference number" {...field} />
                      </FormControl>
                      <FormDescription>
                        If your feedback is about a specific booking, please provide the reference number.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rating"
                  rules={{ required: "Please select a rating" }}
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>How would you rate your experience?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-1"
                        >
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <FormItem key={rating} className="flex items-center space-x-0 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={rating.toString()} className="sr-only" />
                              </FormControl>
                              <FormLabel
                                className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full ${
                                  field.value === rating.toString()
                                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                                    : "bg-muted hover:bg-muted/80"
                                }`}
                              >
                                {rating}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormDescription>1 = Poor, 5 = Excellent</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="feedback"
                  rules={{ required: "Feedback is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Feedback</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please share your experience, suggestions, or concerns..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Submit Feedback
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Why Your Feedback Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 p-2 text-secondary">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Improve Our Services</h3>
                    <p className="text-sm text-muted-foreground">
                      Your feedback helps us identify areas where we can enhance our travel services and packages.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 p-2 text-secondary">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Address Concerns</h3>
                    <p className="text-sm text-muted-foreground">
                      If you experienced any issues, we want to know so we can address them promptly and effectively.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 p-2 text-secondary">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Recognize Excellence</h3>
                    <p className="text-sm text-muted-foreground">
                      Positive feedback allows us to recognize team members who provided exceptional service.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Is my feedback anonymous?</h3>
                  <p className="text-sm text-muted-foreground">
                    Your feedback is not anonymous as we collect your name and email, but we keep your information
                    confidential and only use it to improve our services.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Will I receive a response to my feedback?</h3>
                  <p className="text-sm text-muted-foreground">
                    If you've reported an issue or requested a response, our customer service team will contact you
                    within 48 hours.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">How is my feedback used?</h3>
                  <p className="text-sm text-muted-foreground">
                    Your feedback is reviewed by our management team and used to make improvements to our services,
                    training, and policies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

