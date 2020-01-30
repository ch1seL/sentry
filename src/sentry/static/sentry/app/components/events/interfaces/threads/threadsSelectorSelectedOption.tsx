import React from 'react';
import styled from '@emotion/styled';

import {Frame} from 'app/types/events';
import TextOverflow from 'app/components/textOverflow';
/* eslint-disable react/prop-types */
import Text from 'app/components/text';
import space from 'app/styles/space';

const NOT_FOUND_FRAME = '<unknown>';

interface Props {
  id: string;
  details: ThreadInfo;
}

interface ThreadInfo {
  label: string;
  filename?: string;
}

const ThreadsSelectorSelectedOption: React.FC<Props> = ({id, details}) => (
  <StyledContainer>
    <StyledThreadID>{`Thread #${id}:`}</StyledThreadID>
    <StyledOptionLabel>{details.label}</StyledOptionLabel>
  </StyledContainer>
);

export default ThreadsSelectorSelectedOption;

const StyledContainer = styled('div')({
  gridTemplateColumns: '110px 1fr',
  display: 'grid',
  justifyContent: 'flex-start',
  alignItems: 'center',
  justifyItems: 'start',
});

const StyledThreadID = styled(TextOverflow)({
  paddingRight: space(1),
  maxWidth: '100%',
  textAlign: 'left',
});

const StyledOptionLabel = styled(StyledThreadID)({
  // TODO(style): color not yet in the theme
  color: '#2c58a8',
});
