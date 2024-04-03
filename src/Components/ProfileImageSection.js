import { Avatar, Button } from "@mui/material";
import './profilImageSection.css';
export default function ProfileImageSection(){

    return(
        <div className="profil-image-section">
            <Avatar  sx={{ width: 90, height: 90 }} src="/broken-image.jpg"/>
            <div className="delete-modify-btns">
                <Button className="delete-btn" style={{ color: "#68B2A0" }}>Supprimer la photo</Button>
                <Button className="modify-btn" variant="contained" style={{ backgroundColor: "#68B2A0" }}>Modifier la photo</Button>
            </div>
        </div>
    )
}