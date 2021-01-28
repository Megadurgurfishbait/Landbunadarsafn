import { AspectRatio, Flex, Link } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

// TODO: Taka út Text componentinn minn
export const Stuttmyndir: React.FC<{}> = () => (
  <Flex flexDir="column" alignItems="center" className="max-w-full">
    <Text as="h1" className="text-lg font-semibold my-4">
      Fordson
    </Text>
    <Link
      href="https://www.youtube.com/watch?v=8j0mK2mxKr0&feature=emb_title"
      className=" text-lg mb-4 sm:hidden"
    >
      Hægt að skoða hér
    </Link>
    {/* Sýnum ekki videoið á síma */}
    <AspectRatio minW="560px" maxW="560px" ratio={1} className="hidden sm:flex">
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
    <Text as="p">
      Bjarni Guðmundsson, verkefnisstjóri Landbúnaðarsafns Íslands, segir frá
      forvera dráttarvélanna.
    </Text>
    <Text as="h1" className="text-lg font-semibold my-4">
      Skilvindur
    </Text>
    <Link
      href="https://www.youtube.com/watch?v=gMamAvZk_QE&feature=emb_title"
      className=" text-lg mb-4 sm:hidden"
    >
      Hægt að skoða hér
    </Link>
    <AspectRatio minW="560px" maxW="560px" ratio={1} className="hidden sm:flex">
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
    <Text as="p">
      Bjarni Guðmundsson, verkefnisstjóri við Landbúnaðarsafn Íslands, segir
      skilvindum og mikilvægi þeirra á íslenskum heimilum á 19.- og 20. öldinni.
    </Text>
    <Text></Text>
  </Flex>
)
