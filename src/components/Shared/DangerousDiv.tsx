import styled from '@emotion/styled'

export const DangerousDiv = styled.div`
  height: max-content;
  white-space: pre-wrap;
  & > ul {
    padding-left: 30px;
    list-style: disc;
    line-height: 1rem;
    & > li {
      margin: 0px;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
  & > p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  & * img {
    display: block;
    max-width: 500px;
    max-height: 500px;
    margin-right: auto;
    padding-right: 1rem;
    padding-bottom: 1rem;

    @media only screen and (max-width: 600px) {
      max-width: 300px;
      max-height: 300px;
    }
  }
  & > h2 {
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
  }

  & * a {
    text-decoration: underline;
  }
`
