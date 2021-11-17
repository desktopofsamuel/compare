import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import customTheme from '../../theme';
import Helmet from 'react-helmet';

const Layout: React.FC = ({ title, children, ...props }) => {
  return (
    <>
      <Helmet title={title}></Helmet>
      <ChakraProvider theme={customTheme} resetCSS={true}>
        <Container as="main">{children}</Container>
      </ChakraProvider>
    </>
  );
};

export default Layout;
