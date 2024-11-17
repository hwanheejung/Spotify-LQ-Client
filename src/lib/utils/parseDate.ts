export const parseDate = (
  dateString: string,
): {
  year: number
  month: number
  date: number
} => {
  const [year, month, date] = dateString.split('-').map(Number)

  return { year, month, date }
}
