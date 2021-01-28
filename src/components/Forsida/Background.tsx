import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import React from 'react'

export const Background = ({ children, mynd }) => {
  return (
    <BackgroundDiv mynd={mynd} className="min-h-85vh 2xl:min-h-screen ">
      <SVG
        viewBox="0 0 1920 1300"
        preserveAspectRatio="none"
        className="overflow-x-hidden w-auto min-h-screen"
      >
        <g>
          <linearGradient
            id="lg-0.8872315498797685"
            x1="0"
            x2="1"
            y1="0"
            y2="0"
          >
            <stop stopColor="#8f0223" offset="0" />
            <stop stopColor="#9a1b38" offset="1" />
          </linearGradient>
          <motion.path
            d="M 0 0 L 0 1151.845 Q 192 1100.227 384 1153.957 T 768 1206.199 T 1152 1226.489 T 1536 1170.68 T2020 1193.172 L 2020 0 Z"
            fill="url(#lg-0.8872315498797685)"
            opacity="0.4"
          ></motion.path>
          <motion.path
            d="M 0 0 L 0 1151.845 Q 192 1111.227 384 1223.957 T 768 1206.199 T 1152 1226.489 T 1536 1200.68 T 2020 1183.172 L 2020 0 Z"
            fill="url(#lg-0.8872315498797685)"
            opacity="0.4"
          ></motion.path>
          <motion.path
            d="M 0 0 L 0 1151.845 Q 192 1079.227 384 1113.957 T 800 1206.199 T 1152 1226.489 T 1536 1250.68 T 2020 1213.172 L 2020 0 Z"
            fill="url(#lg-0.8872315498797685)"
            opacity="0.4"
          ></motion.path>
          <motion.path
            d="M 0 0 L 0 1151.845 Q 192 1171.227 384 1203.957 T 768 1206.199 T 1152 1226.489 T 1536 1150.68 T 2020 1153.172 L 2020 0 Z"
            fill="url(#lg-0.8872315498797685)"
            opacity="0.4"
          ></motion.path>
        </g>
      </SVG>
      <Main>{children}</Main>
    </BackgroundDiv>
  )
}

const SVG = styled.svg`
  z-index: 15;
  background-repeat: initial;
  background-color: transparent;
  animation-play-state: running;
  position: absolute;
`

const BackgroundDiv = styled.div<{ mynd: string }>`
  width: 100%;

  background-image: ${(props) => `url(${props.mynd})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  position: relative;
`
const Main = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 16;
`
