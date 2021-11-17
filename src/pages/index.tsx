import React from 'react';
import { PageProps } from 'gatsby';
import { Button, Text } from '@chakra-ui/react';
import Link from '@/components/gatsby-link';
import Title from '@/components/Title';
import Layout from '@/components/layout';

const Home: React.FC<PageProps> = () => (
  <Layout title="Hello World">
    <Title>Hello Gatsby!</Title>
    <Text>A Chakra UI starter for GatsbyJS.</Text>
    <Link to="https://twitter.com/desktopofsamuel">
      <Button>Follow me on Twitter</Button>
    </Link>
  </Layout>
);

export default Home;
