export const formatDate = (date: string): string => {
    return (
      new Date(date).toLocaleDateString("default", {
        weekday: "long",
      }) +
      " " +
      new Date(date).toLocaleString("default", {
        month: "long",
      }) +
      " " +
      date.split("-")[0]
    );
  };