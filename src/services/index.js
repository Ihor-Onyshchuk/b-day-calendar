import { http } from "../api";

const getUsersByMonth = (data) => {
  const groupedByMonth = {
    0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [],
  };
  data.forEach(user => {
    const month = (new Date(user.dob)).getMonth();
    groupedByMonth[month].push(user)
  });
  return groupedByMonth;
}

export const fetchUsers = () => http.get('/users')
  .then(({ data }) => getUsersByMonth(data));