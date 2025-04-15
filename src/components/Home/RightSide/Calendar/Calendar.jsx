import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';
import es from 'date-fns/locale/es';
import {
  CalendarPaper,
  CalendarWrapper,
  CustomCalendarDay,
  EventDot,
  CompactDateCalendar
} from './CalendarStyles';
import Box from '@mui/material/Box';

const events = [
  { date: new Date(2024, 5, 15), color: '#2e7d32', title: 'Reunión importante' },
  { date: new Date(2024, 5, 20), color: '#d32f2f', title: 'Entrega de proyecto' }
];

const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());

  const renderCustomDay = (day, selectedDates, pickersDayProps) => {
    const dayEvents = events.filter(event =>
      format(event.date, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')
    );

    return (
      <Box sx={{ position: 'relative' }}>
        <CustomCalendarDay {...pickersDayProps} />
        {dayEvents.length > 0 && (
          <EventDot>
            {dayEvents.map((event, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: event.color,
                  width: 4,
                  height: 4,
                  borderRadius: '50%'
                }}
              />
            ))}
          </EventDot>
        )}
      </Box>
    );
  };

  return (
    <CalendarPaper elevation={3}>
      <CalendarWrapper>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
          <CompactDateCalendar
            value={value}
            onChange={(newValue) => setValue(newValue)}
            slots={{
              day: (props) => renderCustomDay(props.day, value, props)
            }}
          />
        </LocalizationProvider>
      </CalendarWrapper>
    </CalendarPaper>
  );
};

export default CalendarComponent;