import {
    CalendaryContainer,
    CalendaryItemContainer,
    RightSideContainer
  } from "./RightSideStyles";

import CalendarComponent from './Calendar/Calendar';
import CalendarItem from "./CalendarItem/CalendarItem";

const RightSide = () => {
  return (
    <RightSideContainer>
        <CalendaryContainer>
          <CalendarComponent/>
        </CalendaryContainer>
        <CalendaryItemContainer>
          <CalendarItem/>
        </CalendaryItemContainer>
    </RightSideContainer>
  );
};

export default RightSide 