import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { PickersDay, DateCalendar } from '@mui/x-date-pickers';

export const CalendarPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  padding: '1em',
  paddingTop: '0',
  width: '100%',
  margin: '0 auto',
  borderRadius: theme.shape.borderRadius * 3,
  overflow: 'hidden',
  boxShadow: theme.shadows[2],
  height: '100%',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.default,
}));

export const CalendarWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.background.paper,
  overflowY: 'auto'
}));

export const CustomCalendarDay = styled(PickersDay)(({ theme }) => ({
  width: 38,
  height: 38,
  fontSize: '0.75rem',
  margin: '0 2px',
  '&.Mui-selected': {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.dark,
    '&:hover': {
      backgroundColor: theme.palette.success.light,
    }
  },
  '&.MuiPickersDay-today': {
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: 'transparent',
  },
}));

export const EventDot = styled(Box)({
  position: 'absolute',
  bottom: 2,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  gap: 2,
});

export const CompactDateCalendar = styled(DateCalendar)(({ theme }) => ({

  
  '& .MuiPickersCalendarHeader-root': {
    marginBottom: '10px',
  },
  '& .MuiDayCalendar-header': {
    fontWeight: theme.typography.fontWeightBold,
    justifyContent: 'space-between',
    fontSize: '0.1rem'
  },
  '& .MuiDayCalendar-header span': {
    width: '30px',
    height: '30px !important',
    fontSize: '0.75rem !important',
    margin: '0 !important'
  },
  '& .MuiDayCalendar-weekContainer': {
    justifyContent: 'space-between',
    width: '100% !important',
    margin: '10px 0'
  },
  '& .MuiDayCalendar-weekContainer div': {
    width: '30px',
    height: '30px',
  },
  '& .MuiButtonBase-root': {
    width: '30px',
    height: '30px',
    margin: '0',
  },
  '&.MuiDateCalendar-root': {
    height: '280px',
  },
}));