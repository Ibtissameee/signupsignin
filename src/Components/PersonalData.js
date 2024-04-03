import { Button, Divider } from "@mui/material";
import './personalData.css';

export default function PersonalData({typeData, profData}){

    return (
        
        <div className="personal-data">
            <Divider/>
            <div className="row-1">
                <div><strong>{typeData}</strong></div>
            </div>
            <div className="row-2">
                <div>{profData}</div>
                <Button variant="contained" style={{ backgroundColor: "#68B2A0" }}>Modifier</Button>
            </div>
        </div>
    )
}