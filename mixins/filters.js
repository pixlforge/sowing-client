export const capitalizeFirstLetter = {
  filters: {
    capitalizeFirstLetter(value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
}
