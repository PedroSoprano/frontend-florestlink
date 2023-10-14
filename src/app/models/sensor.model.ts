interface Measure {
  id: number;
  temperature: string;
  gasLevel: string;
  luminosity: string;
  createdAt: string;
  sensorId: number;
}

interface Sensor {
  id: number;
  name: string;
  type: string;
  latitude: string;
  longitude: string;
  createdAt: string;
  updatedAt: string;
  measures: Measure[];
}

