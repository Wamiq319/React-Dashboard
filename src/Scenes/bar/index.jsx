import { Box } from "@mui/material";
import Header from "../../Components/header";
import BarChart from "../../Components/barchart";

const Bar = () => {

  return(
    <Box m="20px">
    <Header title="Bar Chart" subtitle="Simple Bar Chart"></Header>
    <Box height="75vh">
      <BarChart />
    </Box>
  </Box>
  )
  
};

export default Bar;
