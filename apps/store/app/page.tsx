'use client';

import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </StyledPage>
  );
}
