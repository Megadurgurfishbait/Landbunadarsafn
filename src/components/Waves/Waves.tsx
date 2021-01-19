import styled from '@emotion/styled'

export const Waves = () => (
  <Container className=" max-h-full absolute">
    <SVG viewBox="0 0 230 150" preserveAspectRatio="none">
      <Path
        d="M217.55,-10.36 C244.64,51.80 196.10,88.31 224.32,154.44 L0.00,150.00 L0.00,0.00 Z"
        opacity="80%"
      ></Path>
      <Path
        d="M228.27,-3.45 C185.94,83.38 255.11,81.41 205.13,152.45 L-3.67,157.39 L-5.92,-8.38 Z"
        opacity="100%"
      ></Path>
      <Path
        d="M171.27,-85.36 C122.17,13.31 327.28,24.17 150.96,154.44 L0.00,150.00 L0.00,0.00 Z"
        opacity="70%"
      ></Path>
    </SVG>
  </Container>
)

const Container = styled.div`
  height: 100%;
  width: 200%;
  right: 0;
  top: 0;
  overflow: hidden;
  margin-right: -100px;
`

const SVG = styled.svg`
  height: 100%;
  width: 100%;
`
const Path = styled.path<{ opacity: string }>`
  stroke: none;
  fill: #e4dfcf;
  opacity: ${(props) => `${props.opacity}`};
`
