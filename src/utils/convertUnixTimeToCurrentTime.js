import moment from "moment";

export const convertUnixTimestamp = (unixTimestamp) => {
  const timestamp = moment.unix(unixTimestamp);
  const formattedDate = timestamp.format("DD MMMM YYYY");

  return formattedDate;
};
