import Image from "next/image"
import Link from "next/link"
import { Plane, Hotel, Car, MapPin, Calendar, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function PackagesPage() {
  const packages = [
    {
      id: 1,
      title: "Bali Paradise Escape",
      location: "Bali, Indonesia",
      duration: "7 Days / 6 Nights",
      price: 1299,
      rating: 4.8,
      image: "/placeholder.svg?height=400&width=600",
      description: "Experience the perfect blend of culture, beaches, and adventure in this tropical paradise.",
      includes: ["Return Flights", "Luxury Hotel", "Daily Breakfast", "Airport Transfers", "Guided Tours"],
    },
    {
      id: 2,
      title: "Santorini Sunset Getaway",
      location: "Santorini, Greece",
      duration: "8 Days / 7 Nights",
      price: 1599,
      rating: 4.9,
      image: "/placeholder.svg?height=400&width=600",
      description: "Discover the stunning white architecture and breathtaking sunsets of this Mediterranean gem.",
      includes: ["Return Flights", "Beachfront Villa", "Daily Breakfast", "Wine Tasting Tour", "Sunset Cruise"],
    },
    {
      id: 3,
      title: "Tokyo Cultural Experience",
      location: "Tokyo, Japan",
      duration: "10 Days / 9 Nights",
      price: 1899,
      rating: 4.7,
      image: "/placeholder.svg?height=400&width=600",
      description: "Immerse yourself in the perfect blend of tradition and innovation in this vibrant metropolis.",
      includes: ["Return Flights", "Central Hotel", "Daily Breakfast", "Tokyo Metro Pass", "Cultural Workshops"],
    },
    {
      id: 4,
      title: "New York City Explorer",
      location: "New York, USA",
      duration: "6 Days / 5 Nights",
      price: 1499,
      rating: 4.6,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Experience the energy and excitement of the city that never sleeps with this comprehensive package.",
      includes: ["Return Flights", "Manhattan Hotel", "City Pass", "Broadway Show Ticket", "Guided City Tour"],
    },
    {
      id: 5,
      title: "Safari Adventure",
      location: "Nairobi, Kenya",
      duration: "9 Days / 8 Nights",
      price: 2299,
      rating: 4.9,
      image: "/placeholder.svg?height=400&width=600",
      description: "Witness the majestic wildlife of Africa in their natural habitat with expert guides.",
      includes: ["Return Flights", "Luxury Lodge", "All Meals", "Safari Drives", "National Park Fees"],
    },
    {
      id: 6,
      title: "Paris Romance Package",
      location: "Paris, France",
      duration: "5 Days / 4 Nights",
      price: 1199,
      rating: 4.7,
      image: "/placeholder.svg?height=400&width=600",
      description: "Enjoy the city of love with this romantic getaway package designed for couples.",
      includes: [
        "Return Flights",
        "Boutique Hotel",
        "Seine River Cruise",
        "Skip-the-line Eiffel Tower",
        "Wine Tasting",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Travel Packages & Tours</h1>
        <p className="mt-2 text-muted-foreground">
          Explore our curated packages including flights, hotels, vehicles, and destinations
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white"
          >
            All Packages
          </TabsTrigger>
          <TabsTrigger
            value="beach"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white"
          >
            Beach Getaways
          </TabsTrigger>
          <TabsTrigger
            value="city"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white"
          >
            City Breaks
          </TabsTrigger>
          <TabsTrigger
            value="adventure"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white"
          >
            Adventure Tours
          </TabsTrigger>
          <TabsTrigger
            value="luxury"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white"
          >
            Luxury Escapes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                <div className="absolute right-2 top-2">
                  <Badge variant="secondary" className="flex items-center gap-1 bg-white/90 font-medium text-black">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {pkg.rating}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{pkg.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  {pkg.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {pkg.duration}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Plane className="h-3 w-3" />
                    Flight
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Hotel className="h-3 w-3" />
                    Hotel
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Car className="h-3 w-3" />
                    Transfer
                  </Badge>
                </div>
                <p className="line-clamp-2 text-sm text-muted-foreground">{pkg.description}</p>
                <div className="mt-4">
                  <p className="text-sm font-medium">Package includes:</p>
                  <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                    {pkg.includes.slice(0, 3).map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
                        {item}
                      </li>
                    ))}
                    {pkg.includes.length > 3 && (
                      <li className="text-xs text-muted-foreground">+ {pkg.includes.length - 3} more</li>
                    )}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <p className="text-xl font-bold text-secondary">${pkg.price}</p>
                </div>
                <Link href={`/packages/${pkg.id}`}>
                  <Button>View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        {/* Other tabs would have filtered content based on category */}
        <TabsContent value="beach" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages
            .filter((pkg) => [1, 2].includes(pkg.id))
            .map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                  <div className="absolute right-2 top-2">
                    <Badge variant="secondary" className="flex items-center gap-1 bg-white/90 font-medium text-black">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {pkg.rating}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{pkg.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    {pkg.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {pkg.duration}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Plane className="h-3 w-3" />
                      Flight
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Hotel className="h-3 w-3" />
                      Hotel
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Car className="h-3 w-3" />
                      Transfer
                    </Badge>
                  </div>
                  <p className="line-clamp-2 text-sm text-muted-foreground">{pkg.description}</p>
                  <div className="mt-4">
                    <p className="text-sm font-medium">Package includes:</p>
                    <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                      {pkg.includes.slice(0, 3).map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
                          {item}
                        </li>
                      ))}
                      {pkg.includes.length > 3 && (
                        <li className="text-xs text-muted-foreground">+ {pkg.includes.length - 3} more</li>
                      )}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-xl font-bold text-secondary">${pkg.price}</p>
                  </div>
                  <Link href={`/packages/${pkg.id}`}>
                    <Button>View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
        </TabsContent>

        {/* Similar structure for other tabs */}
        <TabsContent value="city" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages
            .filter((pkg) => [3, 4, 6].includes(pkg.id))
            .map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden">
                {/* Same card structure as above */}
                <div className="relative h-48 w-full">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                  <div className="absolute right-2 top-2">
                    <Badge variant="secondary" className="flex items-center gap-1 bg-white/90 font-medium text-black">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {pkg.rating}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{pkg.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    {pkg.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {pkg.duration}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Plane className="h-3 w-3" />
                      Flight
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Hotel className="h-3 w-3" />
                      Hotel
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Car className="h-3 w-3" />
                      Transfer
                    </Badge>
                  </div>
                  <p className="line-clamp-2 text-sm text-muted-foreground">{pkg.description}</p>
                  <div className="mt-4">
                    <p className="text-sm font-medium">Package includes:</p>
                    <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                      {pkg.includes.slice(0, 3).map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
                          {item}
                        </li>
                      ))}
                      {pkg.includes.length > 3 && (
                        <li className="text-xs text-muted-foreground">+ {pkg.includes.length - 3} more</li>
                      )}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-xl font-bold text-secondary">${pkg.price}</p>
                  </div>
                  <Link href={`/packages/${pkg.id}`}>
                    <Button>View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

