import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Archive, Copy, MoreVertical, Settings } from "lucide-react"

interface EventCardProps {
  imageUrl: string
  title: string
  location: string
  dates: string
  status: string
}

export function EventCard({
  imageUrl,
  title,
  location,
  dates,
  status
}: EventCardProps) {
  return (
    <Card className="w-[350px] overflow-hidden">
      <CardHeader className="p-0">
        <Image
          src={imageUrl}
          width={350}
          height={350}
          alt={title}
          className="w-full h-[200px] object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col w-full justify-between space-y-4 items-start">
          <div>
            <Badge variant="secondary" className="mb-2">
              {status}
            </Badge>
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>

          <div className="flex flex-col space-y-0 text-sm text-muted-foreground">
            <h2 className="w-full">{dates}</h2>
            <div className="w-full">{location}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Popover>
          <PopoverTrigger asChild>
            <div className="w-full flex flex-row bg-blue justify-end">
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-40">
            <div className="flex flex-col space-y-1">
              <Button variant="ghost" className="flex items-center justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button variant="ghost" className="flex items-center justify-start">
                <Copy className="mr-2 h-4 w-4" />
                Duplicate
              </Button>
              <Button variant="ghost" className="flex items-center justify-start">
                <Archive className="mr-2 h-4 w-4" />
                Archive
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </CardFooter>
    </Card>
  )
}
