import { Box } from "@mui/material";
import ListActivities from "./ListActivities";

export default function Activities(){
    return(
        <div className="activities" style={{width: "100%"}}>
            <Box sx={{display: "flex", width: "100%"}}>
                <Box component="main" sx={{flexCrow: 1, p: 3}} style={{width: "100%"}}>
                    <ListActivities />
                </Box>
            </Box>
        </div>
    );
}