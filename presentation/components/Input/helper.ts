export { id } from 'app/util/miscelaneous'

export const classNames = (props: Record<string, unknown>): string[] => {
  const width = `width-${String(props.width).replace('%', '')}`
  return ['cell', width]
}
