import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import {
  StyledPaper,
  HeaderBox,
  StyledTableCell,
  StyledTableRow,
  StatusChip,
} from "./TableStyles";

const rows = [
  {
    name: "Allison Parker",
    service: "Hair Cut",
    time: "09.00 - 10.00",
    status: "GOODSTOCK",
    staff: "Tatiana Kenter",
    id: "#0012",
  },
  {
    name: "Leo Siphron",
    service: "Hair Cut",
    time: "09.30 - 11.00",
    status: "NORMALSTOCK",
    staff: "James Vaccaro",
    id: "#0013",
  },
  {
    name: "Lincoln Ekstrom",
    service: "Beard Trim",
    time: "14.00 - 15.00",
    status: "GOODSTOCK",
    staff: "Cooper Rosser",
    id: "#0014",
  },
  {
    name: "Emerson Korsgaard",
    service: "Shave",
    time: "15.30 - 16.30",
    status: "BADSTOCK",
    staff: "Kierra Donin",
    id: "#0015",
  },
  {
    name: "Extra Item 1",
    service: "Extra Service",
    time: "10.00 - 11.00",
    status: "NORMALSTOCK",
    staff: "Extra Staff",
    id: "#0016",
  },
  {
    name: "Extra Item 2",
    service: "Extra Service",
    time: "11.00 - 12.00",
    status: "GOODSTOCK",
    staff: "Extra Staff",
    id: "#0017",
  },
];

const ReservationTable = () => {
  return (
    <StyledPaper>
      <HeaderBox>
        <Typography variant="h6" fontWeight={600} color="#313536">
          Inventario
        </Typography>
        <Typography
          variant="body2"
          color="#313536"
          fontWeight={600}
          sx={{ cursor: "pointer" }}
        >
          View all
        </Typography>
      </HeaderBox>

      <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
        <Table stickyHeader aria-label="reservation table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Cliente</StyledTableCell>
              <StyledTableCell>Servicio</StyledTableCell>
              <StyledTableCell>Hora</StyledTableCell>
              <StyledTableCell>Estado</StyledTableCell>
              <StyledTableCell>Staff</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.id} index={index}>
                <StyledTableCell>
                  <Box>
                    <Typography fontWeight={600}>{row.name}</Typography>
                    <Typography variant="caption" color="#818c92">
                      {row.id}
                    </Typography>
                  </Box>
                </StyledTableCell>
                <StyledTableCell>{row.service}</StyledTableCell>
                <StyledTableCell>{row.time}</StyledTableCell>
                <StyledTableCell>
                  <StatusChip label={row.status} status={row.status} />
                </StyledTableCell>
                <StyledTableCell>{row.staff}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPaper>
  );
};

export default ReservationTable;
