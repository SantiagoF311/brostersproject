import React from 'react';
import { ItemContainer, ItemContent } from './CalendarItemStyles';

const CalendarItem = ({ selectedDate }) => {
  return (
    <ItemContainer elevation={3}>
      <ItemContent>
        {selectedDate ? (
          `Eventos para ${selectedDate.toLocaleDateString('es-ES')}`
        ) : (
          'Selecciona una fecha para ver los eventos'
        )}
      </ItemContent>
    </ItemContainer>
  );
};

export default CalendarItem;