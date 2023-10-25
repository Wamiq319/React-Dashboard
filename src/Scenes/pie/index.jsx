import { Box } from "@mui/material";
import Header from "../../Components/header";
import PieChart from "../../Components/piechart";

const Pie = () => {

  return(
    <Box m="20px">
    <Header title="Pie Chart" subtitle="Simple  Pie Chart"></Header>
    <Box height="75vh">
      <PieChart />
    </Box>
  </Box>
  )
   
};

export default Pie;
