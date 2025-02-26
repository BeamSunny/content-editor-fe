export const EResCode = {
  Success: '00',
  Error: '99',
  Warning: '98',
}

export function convertPixelToRem(px: number) {
  return px / 16
}

export const convertNumberFormat = (txtNumber: string, decimal = 0): string => {
  const floatNumber: number = parseFloat(txtNumber) || 0
  return floatNumber
    .toFixed(decimal)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
