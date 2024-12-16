export const generateEventImageUrl = (
    eventId: string, 
    width: number = 400, 
    height: number = 300
  ): string => {
    return `https://picsum.photos/seed/${eventId}/${width}/${height}`;
  };
  