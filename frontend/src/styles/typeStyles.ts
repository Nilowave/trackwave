import { css } from 'styled-components';
import { fluidType } from './helpers/fluidType';
export const typeStyles = {
  h1: css`
    ${fluidType(38, 44)};
    font-weight: 700;
  `,
  h3: css`
    font-size: 2.8rem;
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 1.1;
  `,
  body: css`
    font-size: 1.6rem;
    line-height: 1.375;
  `,
  label: css`
    font-size: 1.2rem;
    line-height: 1.667;
    font-weight: 500;
  `,
  uppercase: css`
    font-size: 1.4rem;
    text-transform: uppercase;
  `,
  bold: css`
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.285;
  `,
  button: css`
    font-size: 1.84rem;
    font-weight: 700;
    line-height: 1.285;
  `,
} as const;

export type TypeStyleType = typeof typeStyles;