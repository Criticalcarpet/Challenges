export const worker = (requiredArray, requiredIdentifier) => {
  return requiredArray.sort((a, b) => {
    return a[requiredIdentifier] - b[requiredIdentifier]
  })
}
