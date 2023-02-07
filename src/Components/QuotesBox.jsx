import styled from "styled-components";
import QuoteBtn from "./QuoteBtn";

const StyledQuotes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 30px;
  box-shadow: 5px 5px 0px #000000;
  border-radius: 10px;
  background: #ffffff;
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  text-align: center;
`;

const Content = styled.p`
  color: #404040;
  font-weight: 500;
  font-size: 1.25rem;
`;

const Author = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #737373;
`;

const QuotesBox = ({ quote, state, fetchData }) => {
  const { content, author } = quote;

  return (
    <StyledQuotes>
      <Content>{content}</Content>
      <Author> {author}</Author>
      <QuoteBtn state={state} fetchData={fetchData} />
    </StyledQuotes>
  );
};

export default QuotesBox;
