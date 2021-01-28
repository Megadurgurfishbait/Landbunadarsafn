import Link from 'next/link'
import { Button as B, Text as T } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

// __css er nauðsynlegt til að override'a css frá Chakra UI
export const Button = ({
  Text,
  className,
  noArrow,
  onClick,
  href,
}: {
  Text: string
  className?: string
  noArrow?: boolean
  onClick?: () => void
  href?: string
}) => {
  return (
    <>
      {href ? (
        <Link href={href} prefetch={false}>
          <a className="flex items-center sm:pt-2 w-max">
            <TextNStyle Text={Text} className={className} noArrow={noArrow} />
          </a>
        </Link>
      ) : (
        <B onClick={onClick}>
          <TextNStyle Text={Text} noArrow={noArrow} />
        </B>
      )}
    </>
  )
}

const TextNStyle: React.FC<{
  Text: string
  noArrow?: boolean
  className?: string
}> = ({ Text, noArrow, className }) => (
  <>
    <T
      borderBottom="1px solid"
      className={`leading-8 text-sm sm:text-base  border-stylishBlack ${className}`}
      letterSpacing={[0, 1.1]}
    >
      {Text}
    </T>
    {!noArrow && (
      <ArrowForwardIcon
        viewBox="0 -3 26 26"
        className="font-extralight ml-2 leading-8"
      />
    )}
  </>
)
