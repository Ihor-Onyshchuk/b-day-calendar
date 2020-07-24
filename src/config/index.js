export const monthList = [
  { value: 0, text: "January" },
  { value: 1, text: "February" },
  { value: 2, text: "March" },
  { value: 3, text: "April" },
  { value: 4, text: "May" },
  { value: 5, text: "June" },
  { value: 6, text: "July" },
  { value: 7, text: "August" },
  { value: 8, text: "September" },
  { value: 9, text: "October" },
  { value: 10, text: "November" },
  { value: 11, text: "December" },
];

const monthsWithColor = (months) => (usersByMonth) => {
  const getColorByLength = (length) => {
    if (length < 3) return '#898f95';
    if (length > 2 && length < 7) return '#007bff';
    if (length > 6 && length < 11) return '#20c997';
    return '#e11313';
  }

  return months.map(month => ({
    ...month,
    color: getColorByLength(usersByMonth[month.value].length)
  }))
}

export const monthOptions = monthsWithColor(monthList);