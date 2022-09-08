export const changeColor = (path, pathname) => {
  if (path === pathname) {
    return 'blackAlpha.700'
  } else {
    return 'gray.300'
  }
}
