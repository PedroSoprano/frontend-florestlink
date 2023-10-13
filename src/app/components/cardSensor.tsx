import { Box } from "@mui/material"
import LightModeIcon from '@mui/icons-material/LightMode';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import Co2Icon from '@mui/icons-material/Co2';
import { useColors } from "../styles";

export const CardSensor = ({ item, index , temp,lumi, gas}: any) => {

    const theme = useColors("dark")
    console.log({temp,lumi, gas})
    const selectCardColor = (temp: string) => {
        const tempNumber = Number(temp)
        console.log(tempNumber)
        if (tempNumber < 5) {
            return "#447cf9"
        } else if (tempNumber >= 5 && tempNumber < 2) {
            return "#f5856d"
        } else if (tempNumber >= 9) {
            return "#f2484a"
        }
    }

    return (
        <Box sx={{
            width: "75%",
            height: "110px",
            color: theme.text,
            backgroundColor: selectCardColor(temp),
            padding: "20px",
            display: "flex",
            alignItems: "left",
            justifyContent: "space-between",
            flexDirection: "column",
            "&:hover": {
                transform: "scale(1.05)",
                transition: "0.3s ease-in-out",
                boxShadow: "0px 5px 6px 5px #262a2f"
            },
            "&:not(:hover)": {
                transform: "scale(1)",
                transition: "0.3s ease-in-out"
            },
        }}>
            <Box marginBottom={"10px"}><h2>Sensor {index}</h2></Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "150px" }}><ThermostatIcon /> <p>Temperatura:</p></Box> <p>{temp}º</p>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "150px" }}><LightModeIcon /> <p>Luminosidade:</p></Box> <p>{lumi}</p>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "150px" }}><Co2Icon /> <p>Nível de gás:</p></Box> <p>{gas}</p>
            </Box>
        </Box>
    )
}