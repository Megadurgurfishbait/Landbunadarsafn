import { Button as B } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

// __css er nauðsynlegt til að override'a css frá Chakra UI
export const Button = ({
  Text,
  className,
  noArrow,
  absolute,
  onClick,
}: {
  Text: string
  className?: string
  noArrow?: boolean
  absolute?: boolean
  onClick: () => void
}) => (
  <B
    borderBottom="1px solid"
    __css={{ position: (absolute && 'absolute') || 'relative' }}
    className={`leading-8 text-l border-stylishBlack ${className}`}
    letterSpacing={1.1}
    onClick={onClick}
  >
    {Text}
    {!noArrow && (
      <ArrowForwardIcon
        viewBox="0 -3 26 26"
        className="font-extralight ml-2 leading-8"
      />
    )}
  </B>
)
