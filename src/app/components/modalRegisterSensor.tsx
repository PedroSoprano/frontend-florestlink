"use client"
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object().shape({
    nome: Yup.string().required('O nome é obrigatório'),
    tipo: Yup.string().required('A tipo é obrigatório'),
    latitude: Yup.string().required('A latitude é obrigatória'),
    longitude: Yup.string().required('A longitude é obrigatória'),
});

interface IDataForm {
    nome: string,
    tipo: string,
    latitude: string,
    longitude: string
}

function ModalRegisterSensor() {
    const [open, setOpen] = useState(false);

    const { register, handleSubmit, reset, setValue, formState: { errors }, watch, getValues } = useForm({
        resolver: yupResolver(schema),
    });

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        reset()
        setOpen(false);
    };

    const onSubmit = (data: IDataForm) => {
        console.log(data)
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Cadastrar Sensor
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Cadastre um Sensor
                    </Typography>
                    <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={{ gap: "10px", display: "flex", flexDirection: "column", marginTop: "20px" }}>

                        <TextField
                            label={errors.nome?.message ?? "Nome do sensor"}
                            {...register("nome")}
                            error={!!errors.nome?.message}
                            variant="filled"
                            {...register}
                        //sx={errors.nome?.message ? inputError : input}
                        />
                        <TextField
                            label={errors.tipo?.message ?? "Tipo"}
                            {...register("tipo")}
                            error={!!errors.tipo?.message}
                            variant="filled"
                            {...register}
                        //sx={errors.nome?.message ? inputError : input}
                        />
                        <TextField
                            label={errors.latitude?.message ?? "Latitude"}
                            {...register("latitude")}
                            error={!!errors.latitude?.message}
                            variant="filled"
                            {...register}
                        //sx={errors.nome?.message ? inputError : input}
                        />
                        <TextField
                            label={errors.longitude?.message ?? "Longitude"}
                            {...register("longitude")}
                            error={!!errors.longitude?.message}
                            variant="filled"
                            {...register}
                        //sx={errors.nome?.message ? inputError : input}
                        />
                        <Box sx={{ marginTop: "20px" }}>
                            <Button sx={{ width: "50%" }} onClick={handleClose}>Cancelar</Button>
                            <Button variant="contained" type="submit" sx={{ width: "50%" }}>Cadastrar</Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalRegisterSensor;

