import * as React from 'react'

export const Layout: React.FunctionComponent<{ className?: string }> = ({
  children,
  className,
}) => {
  return <div className={`${className} `}>{children}</div>
}
