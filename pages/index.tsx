import { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  font-style: italic;
`;

const index: NextPage = () => {
  return (
    <Container>
      <h1>testtest</h1>
      <h2>testtest</h2>
      <p>testtest</p>
    </Container>
  );
};

export default index;
