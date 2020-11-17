const getDiffBetweenDates = (start, end) => {
  const sprintStart = new Date(start)
  const sprintEnd = new Date(end)
  const days = parseInt((sprintEnd - sprintStart) / (1000 * 60 * 60 * 24), 10);
  return days
}

export default getDiffBetweenDates
