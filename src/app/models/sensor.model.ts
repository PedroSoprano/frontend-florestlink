export interface Sensor {
  id: number;
  name: string;
  measures: [
    {
      id: number;
      temperature: string;
      gasLevel: string;
      luminosity: string;
      createdAt: string;
    }
  ];
}
