import { ReactElement, useContext, useEffect } from 'react';
import * as S from './Login.styles';
import { GoogleIcon, Logo } from '../../atoms/Icon/Icon';

import { IAuthorizationOptions } from 'react-google-oauth2';

import { Text } from '../../atoms/Text/Text.styles';
import { AdUnit } from '../../atoms/AdUnit/AdUnit';
import { UserContext } from '../../../context/UserContext/UserContext';
import { Navigate } from 'react-router-dom';
import { Path } from '../../../data/enum/Path';
import { PageTitle } from '../../../data/enum/PageTitle';
import { Trackwave } from '../../../data/enum/Trackwave';

export const Login = (): ReactElement => {
  const { user } = useContext(UserContext);

  const options: IAuthorizationOptions = {
    clientId: import.meta.env.VITE_CLIENT_ID as string,
    redirectUri: `${import.meta.env.VITE_REACT_APP_BASE_PATH}/auth/google/callback`,
    scopes: ['profile', 'email'],
    includeGrantedScopes: true,
    accessType: 'offline',
  };

  useEffect(() => {
    document.title = PageTitle.BASE + PageTitle.LOGIN;
  }, []);

  return user ? (
    <Navigate
      to={{
        pathname: Path.Home,
      }}
      replace={true}
    />
  ) : (
    <S.Login>
      <S.LogoWrapper>
        <Logo />
        <p>Your tracking assistant</p>
      </S.LogoWrapper>
      <S.StyledButtonWrapper>
        <S.StyledGoogleButton options={options} apiUrl={`${import.meta.env.VITE_REACT_APP_BASE_PATH}/auth/google`} defaultStyle={false}>
          <GoogleIcon />
          Sign in with Google
        </S.StyledGoogleButton>

        <Text type="disclaimer">
          Click “Sign In” to agree to {Trackwave.NAME}’s <S.StyledLink to={Path.Terms}>Terms of Service</S.StyledLink> and acknowledge that
          {Trackwave.NAME}’s <S.StyledLink to={Path.PrivacyPolicy}>Privacy Policy</S.StyledLink> applies to you.
        </Text>
        <div style={{}}>
          <AdUnit slot={6156885942} />
        </div>
      </S.StyledButtonWrapper>
    </S.Login>
  );
};
