import { CardMapper, IFrett } from './Frettir/'
import { Flex } from '@chakra-ui/react'
import { Button } from '../Shared'
import { useQuery } from 'react-query'
import { getText } from '../../lib/api/frodleikurFetch'

const Array = [
  {
    Title: 'Erindi um miðlun menningararfs til ferðamanna',
    TextExample:
      'er sjálfseignarstofnun sem formlega var stofnað 14. febrúar 2007. Stofnaðilar eru Landbúnaðarháskóli Íslands (LbhÍ), sveitarfélagið Borgarbyggð og Bændasamtök Íslands (BÍ). Í stjórn safnsins eiga sæti, auk fulltrúa áðurnefndra stofnana, þjóðminjavörður eða fulltrúi hans og fulltrúi tilnefndur af landbúnaðarráðherra. Í núverandi stjórn safnsins sitja, skipaðir haustið 2014: Björn Þorsteinsson, rektor fltr. LbhÍ (form), vm: Ragnhildur',
    ButtonText: 'Skoða frétt',
  },
  {
    Title: 'Erindi um miðlun menningararfs til ferðamanna',
    TextExample:
      'er sjálfseignarstofnun sem formlega var stofnað 14. febrúar 2007. Stofnaðilar eru Landbúnaðarháskóli Íslands (LbhÍ), sveitarfélagið Borgarbyggð og Bændasamtök Íslands (BÍ). Í stjórn safnsins eiga sæti, auk fulltrúa áðurnefndra stofnana, þjóðminjavörður eða fulltrúi hans og fulltrúi tilnefndur af landbúnaðarráðherra. Í núverandi stjórn safnsins sitja, skipaðir haustið 2014: Björn Þorsteinsson, rektor fltr. LbhÍ (form), vm: Ragnhildur',
    ButtonText: 'Skoða frétt',
  },
  {
    Title: 'Erindi um miðlun menningararfs til ferðamanna',
    TextExample:
      'er sjálfseignarstofnun sem formlega var stofnað 14. febrúar 2007. Stofnaðilar eru Landbúnaðarháskóli Íslands (LbhÍ), sveitarfélagið Borgarbyggð og Bændasamtök Íslands (BÍ). Í stjórn safnsins eiga sæti, auk fulltrúa áðurnefndra stofnana, þjóðminjavörður eða fulltrúi hans og fulltrúi tilnefndur af landbúnaðarráðherra. Í núverandi stjórn safnsins sitja, skipaðir haustið 2014: Björn Þorsteinsson, rektor fltr. LbhÍ (form), vm: Ragnhildur',
    ButtonText: 'Skoða frétt',
  },
] as IFrett[]

export const SectionFrettir = () => {
  const { isLoading, data } = useQuery('forsidaNews', () => getText('articles'))
  // Búa til næs snyrtilegt format til að senda í CarMapper
  return (
    <>
      {isLoading ? (
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
          <CardMapper Frettir={Array} />
          <Button Text="Skoða allar fréttir" />
        </Flex>
      )}
    </>
  )
}
