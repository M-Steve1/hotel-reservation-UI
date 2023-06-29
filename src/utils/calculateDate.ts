export const calculateNumberOfDays = (checkIn: string, checkOut: string): number => {
    const date1 = new Date(checkIn);
    const date2 = new Date(checkOut);
    const diffTime = Math.abs(
      (date2 as unknown as number) - (date1 as unknown as number)
    );
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  };