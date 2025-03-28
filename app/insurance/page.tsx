import { Shield, Check, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function InsurancePage() {
  const insurancePlans = [
    {
      id: "basic",
      name: "Basic Coverage",
      price: 49,
      description: "Essential coverage for budget-conscious travelers",
      features: [
        "Emergency Medical Coverage up to $50,000",
        "Trip Cancellation Coverage up to $1,000",
        "Baggage Loss Coverage up to $500",
        "24/7 Travel Assistance Hotline",
      ],
      notIncluded: ["Adventure Sports Coverage", "Rental Car Coverage", "Pre-existing Medical Conditions"],
    },
    {
      id: "standard",
      name: "Standard Coverage",
      price: 89,
      description: "Comprehensive coverage for most travelers",
      features: [
        "Emergency Medical Coverage up to $100,000",
        "Trip Cancellation Coverage up to $3,000",
        "Baggage Loss Coverage up to $1,000",
        "Trip Delay Coverage up to $500",
        "24/7 Travel Assistance Hotline",
        "Rental Car Coverage",
      ],
      notIncluded: ["Adventure Sports Coverage", "Pre-existing Medical Conditions"],
      recommended: true,
    },
    {
      id: "premium",
      name: "Premium Coverage",
      price: 149,
      description: "Complete protection for worry-free travel",
      features: [
        "Emergency Medical Coverage up to $250,000",
        "Trip Cancellation Coverage up to $10,000",
        "Baggage Loss Coverage up to $2,500",
        "Trip Delay Coverage up to $1,000",
        "24/7 Travel Assistance Hotline",
        "Rental Car Coverage",
        "Adventure Sports Coverage",
        "Pre-existing Medical Conditions Coverage",
        "Cancel For Any Reason Option",
      ],
      notIncluded: [],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Travel Insurance</h1>
        <p className="mt-2 text-muted-foreground">
          Protect your journey with our comprehensive travel insurance options
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="mb-12 rounded-lg bg-muted p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 p-2 text-secondary">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Why Choose Our Travel Insurance?</h2>
              <p className="mt-2 text-muted-foreground">
                Our travel insurance plans provide comprehensive coverage for unexpected events during your trip. From
                medical emergencies to trip cancellations, we've got you covered so you can travel with peace of mind.
              </p>
              <ul className="mt-4 grid gap-2 md:grid-cols-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-secondary" />
                  <span>24/7 Emergency Assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-secondary" />
                  <span>Medical Emergency Coverage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-secondary" />
                  <span>Trip Cancellation Protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-secondary" />
                  <span>Baggage & Personal Effects</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-secondary" />
                  <span>Travel Delay Reimbursement</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-secondary" />
                  <span>Easy Claims Process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Tabs defaultValue="individual" className="mb-8">
          <TabsList className="mb-6 grid w-full grid-cols-2">
            <TabsTrigger
              value="individual"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white"
            >
              Individual Plans
            </TabsTrigger>
            <TabsTrigger
              value="family"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white"
            >
              Family Plans
            </TabsTrigger>
          </TabsList>

          <TabsContent value="individual">
            <div className="grid gap-6 md:grid-cols-3">
              {insurancePlans.map((plan) => (
                <Card key={plan.id} className={plan.recommended ? "border-secondary" : ""}>
                  {plan.recommended && (
                    <div className="absolute -top-3 left-0 right-0 mx-auto w-max rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 text-xs font-medium text-white">
                      Recommended
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <span className="text-3xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground"> per person</span>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium">What's Included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {plan.notIncluded.length > 0 && (
                      <div>
                        <h4 className="mb-2 font-medium">Not Included:</h4>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Select Plan</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="family">
            <div className="grid gap-6 md:grid-cols-3">
              {insurancePlans.map((plan) => (
                <Card key={plan.id} className={plan.id === "premium" ? "border-primary" : ""}>
                  {plan.id === "premium" && (
                    <div className="absolute -top-3 left-0 right-0 mx-auto w-max rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Recommended for Families
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name} Family</CardTitle>
                    <CardDescription>{plan.description} for the whole family</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <span className="text-3xl font-bold">${plan.price * 2.5}</span>
                      <span className="text-muted-foreground"> per family</span>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium">What's Included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        <li className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>Coverage for up to 2 adults and 4 children</span>
                        </li>
                      </ul>
                    </div>
                    {plan.notIncluded.length > 0 && (
                      <div>
                        <h4 className="mb-2 font-medium">Not Included:</h4>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Select Plan</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="rounded-lg border p-6">
          <h3 className="text-xl font-semibold">How to File a Claim</h3>
          <p className="mt-2 text-muted-foreground">
            Filing a claim is easy. Follow these simple steps to get reimbursed for covered expenses:
          </p>
          <ol className="mt-4 space-y-4">
            <li className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <div>
                <h4 className="font-medium">Gather Documentation</h4>
                <p className="text-sm text-muted-foreground">
                  Collect all relevant documents such as medical reports, receipts, and proof of travel.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <div>
                <h4 className="font-medium">Complete Claim Form</h4>
                <p className="text-sm text-muted-foreground">
                  Fill out our online claim form with details about your policy and incident.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <div>
                <h4 className="font-medium">Submit Your Claim</h4>
                <p className="text-sm text-muted-foreground">
                  Upload your documents and submit your claim through our secure portal.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                4
              </div>
              <div>
                <h4 className="font-medium">Track Your Claim</h4>
                <p className="text-sm text-muted-foreground">
                  Monitor the status of your claim through your account dashboard.
                </p>
              </div>
            </li>
          </ol>
          <div className="mt-6">
            <Link href="/claims">
              <Button variant="outline">Learn More About Claims</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

