import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';

const colorPalette = {
  even: "#ffffff",
  odd: "#f6f7fb",
  header: "#ffffff",
  hover: "#ebebebb3",
  border: "#d2dce3",
};

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  borderRadius: theme.shape.borderRadius * 5,
  boxShadow: theme.shadows[1],
  backgroundColor: "#fafafa",
  display: "flex",
  flexDirection: "column",
}));

export const HeaderBox = styled(Box)({
  padding: "16px 24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: colorPalette.header,
  borderBottom: `1px solid ${colorPalette.border}`,
});

export const StyledTableCell = styled(TableCell)({
  fontWeight: 500,
  fontSize: "14px",
  borderBottom: `1px solid ${colorPalette.border}`,
  color: "#313536",
  "&.MuiTableCell-head": {
    backgroundColor: colorPalette.header,
    color: "#607d8b",
    fontWeight: "bold",
  },
});

export const StyledTableRow = styled(TableRow)(({ index }) => ({
  backgroundColor: index % 2 === 0 ? colorPalette.even : colorPalette.odd,
  "&:hover": {
    backgroundColor: colorPalette.hover,
  },
}));

export const StatusChip = styled(Chip)(({ status }) => {
  const colors = {
    GOODSTOCK: {
      backgroundColor: "#e3f9e5",
      color: "#2e7d32",
    },
    NORMALSTOCK: {
      backgroundColor: "#fff4e5",
      color: "#ed6c02",
    },
    BADSTOCK: {
      backgroundColor: "#fdecea",
      color: "#d32f2f",
    },
  };
  return {
    height: 24,
    fontSize: 12,
    fontWeight: 600,
    borderRadius: 12,
    padding: "0 8px",
    ...colors[status],
  };
});