import { eventRoutes } from '@/lib/api';
import { formatEventDates } from '@/lib/dates';
import { EventCard } from './components/event-card';

const EventsPage = async () => {
  try {
    const { data } = await eventRoutes.getEvents();

    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center justify-center">
          {data.events.map((event) => {
            const upcomingDates = event.data?.scheduled_dates;
            const location = event.data?.location_address ? event.data?.location_address : "Location not available";
            const imageUrl = `https://picsum.photos/seed/${event.id}/${400}/${300}`;
            const dates = formatEventDates(upcomingDates);

            return (
              <EventCard
                key={event.id}
                imageUrl={imageUrl}
                title={event.name}
                dates={dates}
                location={location}
                status="Upcoming" />
            );
          })}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading events:", error);
    return <div>Error loading events</div>;
  }
};

export default EventsPage;