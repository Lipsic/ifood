import styled from "styled-components";

export const OrdersPageWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .header {
    width: 100%;
    margin-bottom: 5rem;
    padding-top: 1rem;
    display: flex;
    columns: 5rem 1fr;
  }
  .back {
    position: absolute;
    padding: 5px;
    margin-left: 1rem;
  }
  .red-accent {
    color: #ea1d2c;
  }
  .no-orders-image {
    width: 100%;
    display: grid;
    justify-content: center;
  }
  .no-orders-text {
    margin: 2rem auto;
    max-width: 80%;
    display: grid;
    justify-content: center;
    gap: 1rem;
  }
`;
