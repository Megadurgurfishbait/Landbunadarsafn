import styled from 'styled-components'
import tw from 'twin.macro'

export const DangerousDiv = styled.div`
  height: max-content;
  white-space: pre-wrap;
  & > ul {
    padding-left: 30px;
    list-style: disc;
    line-height: 1rem;
    & > li {
      margin: 0px;
      ${tw`text-sm`}
    }
  }
  & > p {
    ${tw`text-sm my-0`}
  }

  & * img {
    display: block;
    max-width: 500px;
    max-height: 500px;
    margin-right: auto;
    padding-right: 1rem;
    padding-bottom: 1rem;
  }
  & > h2 {
    text-align: center;
    ${tw`text-center text-xl font-semibold`}
  }

  & * a {
    text-decoration: underline;
  }
`
