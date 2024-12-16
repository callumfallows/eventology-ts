import moment from 'moment';

/**
 * Formats the upcoming event dates into a human-readable string.
 *
 * @param upcomingDates - An array of upcoming event dates as strings, or undefined if no dates are available.
 * @returns A formatted string representing the upcoming event dates, or 'No dates available' if no dates are provided.
 */
export const formatEventDates = (upcomingDates: string[] | undefined): string => {
  if (upcomingDates && upcomingDates.length > 0) {
    const startDate = moment(upcomingDates[0]);
    const endDate = moment(upcomingDates[upcomingDates.length - 1]);
    return `From ${startDate.format('D')} - ${endDate.format('D MMMM YYYY')}`;
  } else if (upcomingDates && upcomingDates.length === 1) {
    const date = moment(upcomingDates[0]);
    return date.format('D MMMM YYYY');
  }
  return 'No dates available';
};