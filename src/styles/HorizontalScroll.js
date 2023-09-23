import styled from "styled-components";

export const HorizontalList = styled.ul`
  display: flex;
  list-style: none;
  overflow-x: scroll;
  gap: 1em;
  // Hide scrollbar
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoriesStyles = styled(HorizontalList)`
  font-size: 1.1em;
  color: gray;
  padding: 8px 10px 0;
  a.active {
    color: red;
  }
  color: blue;
  a.inactive {
    color: black;
  }
  .active-tab-indicator {
    div {
      border: 1.5px solid red;
      margin-top: 0.5rem;
      border-radius: 8px;
    }
  }
`;
export const TiposStyles = styled(HorizontalList)`
  font-size: 1.3em;
  padding: 8px 10px 0;
`;
