/**
 * Renders an event card component with an image, title, location, dates, and status.
 *
 * @param {EventCardProps} props - The props for the event card component.
 * @param {string} props.imageUrl - The URL of the event image.
 * @param {string} props.title - The title of the event.
 * @param {string} props.location - The location of the event.
 * @param {string} props.dates - The dates of the event.
 * @param {string} props.status - The status of the event.
 * @returns {JSX.Element} - The rendered event card component.
 */
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
import { Archive, Copy, Earth, MoreVertical, Settings } from "lucide-react"

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
    <Card className="w-[350px] overflow-hidden shadow-lg bg-gray-100 pb-2">
      <CardHeader className="p-0">
        <Image
          src={imageUrl}
          width={350}
          height={350}
          alt={title}
          className="w-full h-[200px] object-cover"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
        />
      </CardHeader>
      <CardContent className="p-4 shadow-inner bg-white">
        <div className="flex flex-col w-full justify-between space-y-4 items-start">
          <div>
            <Badge variant="default" className="mb-2 p-2 py-1 rounded-lg bg-liveBadge-bg text-liveBadge-text">
              <Earth className="h-4 w-4 mr-2" />
              {status}
            </Badge>
            <h3 className="font-regular text-xl">{title}</h3>
          </div>
          <div className="flex flex-col space-y-0 text-md text-muted-foreground">
            <h2 className="w-full text-gray-500">{dates}</h2>
            <div className="w-full text-gray-500">{location}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0  bg-white">
        <Popover>
          <PopoverTrigger asChild>
            <div className="w-full flex flex-row bg-blue justify-end">
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-40" align="end" side="right">
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
