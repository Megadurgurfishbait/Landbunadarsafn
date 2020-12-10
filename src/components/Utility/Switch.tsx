import { Villa } from '..'

export const Switch = ({
  children,
  test,
}: {
  children: React.ReactElement[]
  test: string
}): JSX.Element => {
  let hello = children.filter((child) => child.props.value === test)
  if (hello.length <= 0) return <Villa />
  return <>{hello}</>
}
