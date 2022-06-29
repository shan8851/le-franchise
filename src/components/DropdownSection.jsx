import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { colors, breakpoints } from "../helpers/globals";

export const DropdownSection = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Section>
      <SectionContainer onClick={() => setExpanded(!expanded)}>
        <Title>{title}</Title>
        {expanded ? (
          <FaChevronUp size={22} color={colors.blue} />
        ) : (
          <FaChevronDown size={22} color={colors.blue} />
        )}
      </SectionContainer>
      {expanded && children}
    </Section>
  );
};

const Section = styled.div`
  border-bottom: 1px solid ${colors.blue};
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h4`
  font-size: 17px;
  color: ${colors.blue};
  width: 93%;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 15px;
  }
`;
