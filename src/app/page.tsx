"use client"
import { Box, Paper } from '@mui/material'
import styles from './page.module.css'
import { useState, useEffect } from 'react';
import ModalRegisterSensor from './components/modalRegisterSensor';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import Co2Icon from '@mui/icons-material/Co2';
import { pallet, useColors } from "./styles"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { CardSensor } from './components/cardSensor';
import "./styles.css"
import { getSensor } from './service/sensor/index.sensor';
import { Sensor } from './models/sensor.model';
import io from "socket.io-client"

export default function Home() {
   
  const [row, setRow] = useState<Sensor[]>([]) 
 const socket = io.connect("http://localhost:2026")
   

  useEffect(() => {
    socket.on("onMessage", (data: any) => {
      setRow(data.allSensors)
    }
    )
  }, [socket])

   useEffect(() => {
    getSensor().then((res) => {
      setRow(res.data)
    }
    )
    
  }, [])

  const theme = (useColors("dark"))

  const position = {
    lat: -3.10719,
    lng: -60.0261
  }

  return (
    <Box component={"main"} sx={{ backgroundColor: theme.background, padding: "50px", height: "calc(100vh - 100px)" }}>
      <Paper component={"menu"} elevation={5} sx={{ backgroundColor: theme.secondary, color: theme.text, display: 'flex', alignItems: "center", justifyContent: "space-between", padding: "20px 30px", height: "50px" }}>
        <h1>Monitoring sensors</h1>
        <ModalRegisterSensor />
      </Paper>

      <Box sx={{ display: "flex", alignItems: "center", gap: 5, marginTop: "40px", }}>
        <Paper sx={{
          display: "flex",
          gap: "30px",
          paddingTop: "20px",
          height: "75vh",
          alignItems: "center",
          backgroundColor: theme.secondary,
          flexDirection: "column",
          overflowY: "auto",
          width: "359px",
          '&::-webkit-scrollbar': {
            width: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: theme.secondary,
          },
        }}>
          {row.map((item, index) => (
            <CardSensor item={item} index={index + 1} temp={item.measures[0]?.temperature} lumi={item.measures[0]?.luminosity} gas={item.measures[0]?.gasLevel}  key={index} />
          ))}
        </Paper>
        <Box sx={{ width: "73vw", height: "77vh", backgroundColor: "gray" }}>
          <MapContainer center={position} zoomControl={false} zoom={13} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            />
            <Marker position={position}>
              <Popup>
                Colocar aqui dados do sensor
              </Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Box>

    </Box>

  )
}
