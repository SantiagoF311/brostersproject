import {
    LeftSideContainer,
    SemaforoContainer,
    TableContainer,
  } from "./LeftSideStyles";
import { CheckCircle, Pending, Cancel } from '@mui/icons-material';
import SemaforoItem from "./SemaforoItem/SemaforoItem";
import InventoryTable from "./Table/Table";

  const LeftSide = () => {
    return (
      <LeftSideContainer>
        <SemaforoContainer>
          <SemaforoItem
            icon={<CheckCircle sx={{ fontSize: 50, color: "#006b05" }} />}
            bgColor="#f2fdf6" // Verde claro
            text="Stock suficiente"
            number={23}
          />
          <SemaforoItem
            icon={<Pending sx={ { fontSize: 50, color: "#e2b900" }}/>}
            bgColor="#fdfcf5" // Amarillo claro
            text="Stock moderado"
            number={14}
          />
          <SemaforoItem
            icon={<Cancel sx={{ fontSize: 50, color: "#c00202" }} />}
            bgColor="#fff6f6" // Rojo claro
            text="Stock insuficiente"
            number={4}
          />
        </SemaforoContainer>
        <TableContainer>
          <InventoryTable/>
        </TableContainer>
      </LeftSideContainer>
    );
  };
  
  export default LeftSide;