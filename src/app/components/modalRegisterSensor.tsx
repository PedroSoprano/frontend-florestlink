"use client"
import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

function ModalRegisterSensor() {
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
                Cadastrar Sensor
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Cadastre um Sensor
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        Coloque aqui o conteúdo do seu formulário de cadastro de sensor.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalRegisterSensor;