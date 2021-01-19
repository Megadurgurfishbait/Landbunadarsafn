import { Switch } from '..'

interface ITextProps {
  Variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'
  text: string
  className?: string
}

/**
 * @type {(h1 | h2| h3| h4| h5 | p)} Variant
 * Text Function
 * @param {Variant} Variant - Creates HTML Text Tag
 * @param {string} Text - Returns Text to HTML Text Tag
 * @param {string} [className] - Creates style for HTML Text Tag
 */

// TODO: Skoða að eyða þessum component til og nota Text frá Chakra í staðin.

export const Text: React.FC<ITextProps> = ({ Variant, text, className }) => (
  <Switch test={Variant}>
    <Variant
      itemProp={'h1'}
      className={`${className} text-h1 text-2xl text-center `}
    >
      {text}
    </Variant>
    <Variant itemProp={'h2'} className={`${className} `}>
      {text}
    </Variant>
    <Variant
      itemProp={'h3'}
      className={` ${className} py-4 text-base text-h1 font-semibold`}
    >
      {text}
    </Variant>
    <Variant itemProp={'h4'}>{text}</Variant>
    <Variant itemProp={'h5'}>{text}</Variant>
    <Variant itemProp={'p'} className={`${className} text-sm my-4 px-4`}>
      {text}
    </Variant>
  </Switch>
)
