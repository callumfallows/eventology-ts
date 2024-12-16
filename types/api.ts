/**
 * Represents the data associated with an event, including its location name, address, and scheduled dates.
 */
type EventData = {
  location_name?: string;
  location_address?: string;
  scheduled_dates?: string[];
};

type Event = {
  id: string;
  name: string;
  slug: string;
  is_published: number;
  is_public: number;
  is_guestlist_only: number;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
  data: EventData | null;
};

type Pagination = {
  perPage: number;
  currentPage: number;
  lastPage: number;
  total: number;
};

export type EventsResponse = {
  success: boolean;
  code: number;
  message: string;
  data: {
    events: Event[];
    pagination: Pagination;
  };
};
