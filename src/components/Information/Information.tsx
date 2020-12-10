import * as React from 'react'
import { Layout } from '../../Layout'
import {
  IconClock,
  IconPhone,
  IconCreditCard,
  IconInfoCircle,
  TablerIconProps,
} from 'tabler-icons'

interface IinfoDetails {
  name: string
  Icon: React.FC<TablerIconProps>
  text: string
}

const InfoDetails = [
  {
    name: 'Opnunartími',
    Icon: IconClock,
    text:
      'Í vetur var safnið opið fimmtudaga, föstudaga og laugardaga á sama tíma og Ullarselið, sem er í anddyri safnsins. Landbúnaðarsafn Íslands er opið reglulega mánuðina júní, júlí og ágúst, daglega kl. 11-17. Á öðrum tímum er safnið opið eftir þörfum.',
  },
  {
    name: 'Hafa Samband',
    Icon: IconPhone,
    text:
      'Vinsamlegast hafið samband í síma 844 7740, einnig má hafa samband við skiptiborð Landbúnaðarháskólans, í síma 433 5000. Hópum er veitt leiðsögn um safnið, sé þess óskað.',
  },
  {
    name: 'Aðgangseyrir',
    Icon: IconCreditCard,
    text:
      'Almennur aðgangseyrir að safninu er: 1.400 kr. fyrir fullorðna (og í hópum sem sérstök leiðsögn er veitt); 1100 kr. fyrir öryrkja og eldri borgara ókeypis er fyrir 14 ára og yngri í fylgd fullorðinna.',
  },

  {
    name: 'Upplýsingar',
    Icon: IconInfoCircle,
    text:
      'Einnig er boðið upp á stutta kynningu á Hvanneyrarstað og starfinu þar m.a. með heimsókn í Hvanneyrarkirkju, eina fallegustu kirkju landsins og örstuttri gönguferð um Gamla skólastaðinn (þegar veður leyfir). Æskilegt er að panta slíka kynningu með fyrirvara (s. 844 77 40). Minnt er á Skemmuna kaffihús í næsta nágrenni safnsins, sem er opið daglega í sumar frá kl. 13.30.',
  },
] as IinfoDetails[]

export const Information: React.FunctionComponent<{}> = () => {
  return (
    <Layout>
      <div className="flex-col py-4">
        {InfoDetails.map(({ text, name, Icon }) => (
          <div className="flex-col items-center  min-w-full mb-8 ">
            <div className="flex justify-centerm mx-auto border-b-2 w-2/3 text-red-400 border-red-400 ">
              <Icon size={50} stroke={1} className="mb-1 mx-auto" />
            </div>
            <h1 className="mb-3 text-center text-sm font-extrabold tracking-tight text-gray-700 mt-2">
              {name}
            </h1>
            <p className="text-sm">{text}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
