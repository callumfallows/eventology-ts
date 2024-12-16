/**
 * Renders a grid of event cards for the provided list of current events.
 *
 * @param currentEvents - An array of `Event` objects representing the current events to display.
 * @returns A React component that renders the events grid.
 */
import { formatEventDates } from '@/lib/dates';
import { generateEventImageUrl } from '@/lib/image';
import { Event } from '@/types/api';
import { EventCard } from './event-card';

interface EventsGridProps {
    currentEvents: Event[];
}

export const EventsGrid = ({ currentEvents }: EventsGridProps) => {
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {currentEvents.map((event) => {
                const upcomingDates = event.data?.scheduled_dates;
                const location = event.data?.location_address ? event.data?.location_address : "Location not available";
                const imageUrl = generateEventImageUrl(event.id);
                const dates = formatEventDates(upcomingDates);

                return (
                    <EventCard
                        key={event.id}
                        imageUrl={imageUrl}
                        title={event.name}
                        dates={dates}
                        location={location}
                        status="Live" />
                );
            })}
        </div>
    );
};