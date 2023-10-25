import { Box } from "@mui/material";
import Header from "../../Components/header";
import Geographychart from "../../Components/geographychart";

const Geo = () => {

  return(
    <Box m="20px">
    <Header title="GEOGRAPHY CHART" subtitle="Simple  Geography Chart"></Header>
    <Box height="75vh">
      <Geographychart/>
    </Box>
  </Box>
  )
   
};

export default Geo  ;
 