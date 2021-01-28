import { CardMapper } from './Frettir/'
import { Flex } from '@chakra-ui/react'
import { Button } from '../Shared'
import { useQuery } from 'react-query'
import { frontPageArticles } from '../../lib/api/frodleikurFetch'

export const SectionFrettir = () => {
  const { isSuccess, data } = useQuery('forsidaNews', () => frontPageArticles())
  // Ef að isSuccess er ekki ready förum við beint í "Hleður"
  // Items sendir ekki error
  if (!isSuccess) return <div>hleður</div>

  const Items = data?.map((frettir: any) => ({
    Title: frettir.title,
    TextExample: frettir.content,
    ButtonHref: frettir.slug,
  }))

  return (
    <>
      {!isSuccess ? (
        <div>Hleður</div>
      ) : (
        <Flex
          flexDir="column"
          height="max-content"
          width="100%"
          justifyContent="center"
          alignItems="center"
          className="bg-transparent"
        >
          <CardMapper Frettir={Items} />
          <Button Text="Skoða allar fréttir" href="frettir" />
        </Flex>
      )}
    </>
  )
}
