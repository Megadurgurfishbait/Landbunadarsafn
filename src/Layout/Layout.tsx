import * as React from 'react'

export const Layout: React.FunctionComponent<{ className?: string }> = ({
  children,
  className,
}) => {
  return <div className={`${className} min-h-screen min-w-3/4`}>{children}</div>
}
