export function formatData(data: string) {
  const year = data.substring(0, 4)
  const month = data.substring(5, 7)
  const day = data.substring(8, 10)

  return `${day}/${month}/${year}`
}
