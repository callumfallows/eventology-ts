import { eventRoutes } from '@/lib/api';
import { EventsGrid } from './components/events-grid';

const EventsPage = async () => {

  try {
    const { data } = await eventRoutes.getEvents();
    const currentEvents = data.events;

    return (
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-4 justify-center">
          <EventsGrid currentEvents={currentEvents} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading events:", error);
    return <div>Error loading events</div>;
  }
};

export default EventsPage;