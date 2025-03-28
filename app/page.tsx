import Link from "next/link"
import Image from "next/image"
import { Plane, Hotel, Shield, MessageSquare, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Travel destinations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 mix-blend-multiply"></div>
        </div>
        <div className="container relative z-10 mx-auto flex min-h-[600px] flex-col items-center justify-center px-4 py-20 text-center text-white md:py-32">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Discover Your Dream Destination</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">
            Experience the world with our premium travel packages, personalized tours, and comprehensive travel
            services.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/packages" className="flex items-center gap-2">
              Explore Packages <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Navigation Buttons */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Booking Button */}
          <Link href="/booking" className="group">
            <div className="flex flex-col items-center rounded-lg border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="mb-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 p-4 text-secondary">
                <Plane className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Booking</h3>
              <p className="mb-4 text-center text-muted-foreground">
                Book flights, hotels, and complete travel packages with secure payment options.
              </p>
              <Button variant="outline" className="group-hover:bg-secondary group-hover:text-secondary-foreground">
                Book Now
              </Button>
            </div>
          </Link>

          {/* Packages & Tours Button */}
          <Link href="/packages" className="group">
            <div className="flex flex-col items-center rounded-lg border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="mb-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 p-4 text-secondary">
                <Hotel className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Packages & Tours</h3>
              <p className="mb-4 text-center text-muted-foreground">
                Explore our curated packages including flights, hotels, vehicles, and destinations.
              </p>
              <Button variant="outline" className="group-hover:bg-secondary group-hover:text-secondary-foreground">
                Explore Packages
              </Button>
            </div>
          </Link>

          {/* Insurance Button */}
          <Link href="/insurance" className="group">
            <div className="flex flex-col items-center rounded-lg border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="mb-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 p-4 text-secondary">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Travel Insurance</h3>
              <p className="mb-4 text-center text-muted-foreground">
                Protect your journey with our comprehensive travel insurance options.
              </p>
              <Button variant="outline" className="group-hover:bg-secondary group-hover:text-secondary-foreground">
                Get Insured
              </Button>
            </div>
          </Link>

          {/* Feedback Button */}
          <Link href="/feedback" className="group">
            <div className="flex flex-col items-center rounded-lg border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="mb-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 p-4 text-secondary">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Feedback</h3>
              <p className="mb-4 text-center text-muted-foreground">
                Share your travel experiences and help us improve our services.
              </p>
              <Button variant="outline" className="group-hover:bg-secondary group-hover:text-secondary-foreground">
                Leave Feedback
              </Button>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Featured Destinations</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Destination 1 */}
            <div className="overflow-hidden rounded-lg bg-card shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Bali, Indonesia"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Bali, Indonesia</h3>
                <p className="mb-4 text-muted-foreground">
                  Experience the perfect blend of culture, beaches, and adventure in this tropical paradise.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">From $1,299</span>
                  <Link href="/packages/bali">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Destination 2 */}
            <div className="overflow-hidden rounded-lg bg-card shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Santorini, Greece"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Santorini, Greece</h3>
                <p className="mb-4 text-muted-foreground">
                  Discover the stunning white architecture and breathtaking sunsets of this Mediterranean gem.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">From $1,599</span>
                  <Link href="/packages/santorini">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Destination 3 */}
            <div className="overflow-hidden rounded-lg bg-card shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg?height=400&width=600" alt="Tokyo, Japan" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Tokyo, Japan</h3>
                <p className="mb-4 text-muted-foreground">
                  Immerse yourself in the perfect blend of tradition and innovation in this vibrant metropolis.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">From $1,899</span>
                  <Link href="/packages/tokyo">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

