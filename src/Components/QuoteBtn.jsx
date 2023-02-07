import styled from "styled-components";
import { motion } from "framer-motion";

const StyledBtn = styled.button`
  border: 1px solid #3a86ff;
  padding: 8px 20px;
  border-radius: 99px;
  background-color: #fff;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  color: #3a86ff;
`;

const QuoteBtn = ({ state, fetchData }) => {
  const { loading } = state;

  return (
    <StyledBtn
      as={motion.button}
      whileHover={{ x: [0, 5, -5, 0] }}
      onClick={fetchData}
      disabled={loading}
    >
      {loading ? "WAIT..." : "GIVE ME ADVICE!"}
    </StyledBtn>
  );
};

export default QuoteBtn;
