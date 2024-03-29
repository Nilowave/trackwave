import { motion } from 'framer-motion';
import styled from 'styled-components';
import { respondTo } from '../../../styles/helpers/respondTo';
import { MediaQuery } from '../../../styles/mediaQuery';
import { typeStyles } from '../../../styles/typeStyles';
import { Button } from '../../atoms/Button/Button';

export const Dashboard = styled.section<{ $blur?: boolean }>`
  padding: ${({ theme }) => theme.sitePaddings.desktop};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;

  background-image: radial-gradient(${({ theme }) => theme.hexToRgba(theme.colors.primary, 0.2)} 1px, transparent 0);
  background-size: 40px 40px;
  background-position: -19px -19px;
  background-attachment: fixed;

  @media ${respondTo(MediaQuery.MAX_1023)} {
    padding: ${({ theme }) => theme.sitePaddings.mobile};
  }
  ${({ $blur }) => $blur && 'filter: blur(20px)'};
`;

export const Content = styled(motion.div)`
  /* position: relative; */
  width: 100%;
  height: auto;
`;

export const Heading = styled.h1`
  ${typeStyles.h1};
  text-align: center;
  pointer-events: none;
  z-index: 2;
  position: relative;

  svg {
    max-width: 30rem;
    width: 70%;

    @media ${respondTo(MediaQuery.MIN_1024)} {
      max-width: 30rem;
    }
  }
`;

export const ItemList = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 3rem;
  flex-wrap: wrap;
  flex-direction: column;
  padding-bottom: 4rem;

  @media ${respondTo(MediaQuery.MIN_1024)} {
    margin-top: 8rem;
    flex-direction: row;
  }
`;

export const AddButton = styled(Button)`
  position: fixed;
  bottom: ${({ theme }) => theme.sitePaddings.desktop};
  right: ${({ theme }) => theme.sitePaddings.desktop};

  @media ${respondTo(MediaQuery.MAX_1023)} {
    padding: 0;
    bottom: ${({ theme }) => theme.sitePaddings.mobile};
    right: ${({ theme }) => theme.sitePaddings.mobile};
  }
`;

export const Header = styled.div<{ isHidden?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* background-color: ${({ theme }) => theme.colors.background}; */
  padding: 3rem 3rem 0;
  display: flex;
  justify-content: flex-start;
  transition: opacity 0.3s ease;
  z-index: 2;

  ${({ isHidden }) => isHidden && 'opacity: 0; pointer-events: none'};
`;

export const Footer = styled.div`
  padding: ${({ theme }) => theme.sitePaddings.mobile} 0;
  max-width: 80%;
`;

export const FooterWrapper = styled.footer`
  text-align: center;
  color: ${({ theme }) => theme.colors.blueGray};
  font-size: 1.2rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* padding-right: ${({ theme }) => theme.sitePaddings.mobile}; */
  gap: 2rem;
  text-align: left;

  @media ${respondTo(MediaQuery.MIN_1024)} {
    justify-content: space-evenly;
    padding: ${({ theme }) => theme.sitePaddings.desktop};
    padding-bottom: 0;
    gap: 4rem;
    /* position: absolute; */
    /* bottom: 4rem; */
  }

  a {
    transition: color 0.3s ease;

    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
