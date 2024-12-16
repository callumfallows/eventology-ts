import api from './axios';
import { AxiosResponse } from 'axios';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  // Add other event properties as needed
}

export const eventRoutes = {
  getEvents: async (): Promise<Event[]> => {
    const response: AxiosResponse<Event[]> = await api.get('/events.json');
    return response.data;
  },

  getEventById: async (id: string): Promise<Event> => {
    const response: AxiosResponse<Event> = await api.get(`/events/${id}`);
    return response.data;
  },
};
