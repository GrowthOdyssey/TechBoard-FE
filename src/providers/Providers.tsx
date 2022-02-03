/* eslint-disable @typescript-eslint/no-explicit-any */

import { memo, ReactNode, VFC } from 'react';
import { CookiesProvider } from 'react-cookie';
import { LoginUserProvider } from './LoginUserProvider';

type props = {
  children: ReactNode;
};

const bundleComponents = (...components: any[]) => {
  if (components.length === 1) {
    return components[0];
  } else {
    return components.reduce((A, B) => (props: any) => (
      <A>
        <B {...props} />
      </A>
    ));
  }
};

const ComposeProvider = bundleComponents(CookiesProvider, LoginUserProvider);

export const Providers: VFC<props> = memo((props) => {
  const { children } = props;

  return <ComposeProvider>{children}</ComposeProvider>;
});
