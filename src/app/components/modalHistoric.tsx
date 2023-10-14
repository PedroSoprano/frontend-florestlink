"use client"
import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import TimelineIcon from '@mui/icons-material/Timeline';
import { ChartHistoric } from "./graphHistoric";

interface IProps {
    historic: Measure[],
    item: Sensor
}
function ModalHistoric({ historic, item }: IProps) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                <TimelineIcon />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, height: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    <Typography variant="h6" component="h2">
                        Histórico do sensor: {item.name}
                    </Typography>
                    <Typography sx={{ mt: 2, padding: "10px" }}>
                        <ChartHistoric data={historic} />
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalHistoric;