import styled from 'styled-components';
import { typeStyles } from '../../../styles/typeStyles';

export const Item = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 20rem;
  height: 15rem;
  border: solid 1px ${({ theme }) => theme.colors.selection};
  border-radius: 0.8rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
  position: relative;
`;

export const Title = styled.h3`
  ${typeStyles.h3};
  padding: ${({ theme }) => theme.sitePaddings.mobile};
  text-transform: capitalize;
  text-align: center;
  /* color: ${({ theme }) => theme.colors.white}; */
`;

export const Date = styled.p`
  font-style: italic;
`;

export const Count = styled.div`
  ${typeStyles.button};
  font-size: 2.5rem;
  border: solid 1px ${({ theme }) => theme.colors.selection};
  width: 5rem;
  height: 5rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -1rem;
  right: -1rem;
`;