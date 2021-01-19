import { AspectRatio, Flex } from '@chakra-ui/react'

import { Layout } from '../../Layout'
import { Text } from '../Shared'

export const Stuttmyndir: React.FC<IFrodleikur> = () => (
  <Flex flexDir="column" alignItems="center">
    <Text Variant="h1" text="Fordson" />
    <AspectRatio minW="560px" maxW="560px" ratio={1}>
      <iframe
        title="Fordson Video"
        src="https://www.youtube.com/embed/8j0mK2mxKr0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        style={{
          minHeight: '400px',
          minWidth: '400px',
          justifyContent: 'center',
        }}
      ></iframe>
    </AspectRatio>
    <Text
      Variant="p"
      text={`Bjarni Guðmundsson, verkefnisstjóri Landbúnaðarsafns Íslands, segir frá forvera dráttarvélanna.`}
    />
    <Text Variant="h1" text="Skilvindur" className="my-4" />
    <AspectRatio minW="560px" maxW="560px" ratio={1}>
      <iframe
        title="Skilvindur Video"
        src="https://www.youtube.com/embed/gMamAvZk_QE"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        style={{
          minHeight: '400px',
          justifyContent: 'center',
        }}
      ></iframe>
    </AspectRatio>
    <Text
      Variant="p"
      text={`Bjarni Guðmundsson, verkefnisstjóri við Landbúnaðarsafn Íslands, segir skilvindum og mikilvægi þeirra á íslenskum heimilum á 19.- og 20. öldinni.`}
    />
  </Flex>
)
