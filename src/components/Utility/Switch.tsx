import { Villa } from '..'

interface ISwitchProps {
  children: React.ReactElement[]
  test: string
}

export const Switch: React.FC<ISwitchProps> = ({
  children,
  test,
}): JSX.Element => {
  let hello

  if (children[0].props.itemProp) {
    hello = children.filter((child) => child.props.itemProp === test)
  } else {
    hello = children.filter((child) => child.props.path === test)
  }

  if (hello.length <= 0) return <Villa />
  return <>{hello}</>
}
