import { EventsResponse } from '@/types/api';
import { AxiosResponse } from 'axios';
import api from './axios';

/**
 * Provides functions for interacting with the events API.
 */
export const eventRoutes = {
  /**
   * Retrieves a list of events.
   * @returns {Promise<EventsResponse>} A promise that resolves to the events response.
   */
  getEvents: async (): Promise<EventsResponse> => {
    const response: AxiosResponse<EventsResponse> = await api.get('/events.json');
    return response.data;
  },

  /**
   * Retrieves an event by its ID.
   * @param {string} id - The ID of the event to retrieve.
   * @returns {Promise<Event>} A promise that resolves to the event.
   */
  getEventById: async (id: string): Promise<Event> => {
    const response: AxiosResponse<Event> = await api.get(`/events/${id}`);
    return response.data;
  },
};