import styled from "styled-components";

export const StyledNavbarContainer = styled.div`
  width: 100%;
  background-color: #1a1a1a;
`;

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.font};
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  padding: 2.5rem 0;
  width: 85%;
  margin: auto;
  border-bottom: 1px solid #fafafa50;
`;
