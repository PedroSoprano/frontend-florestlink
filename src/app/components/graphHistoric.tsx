import { ApexOptions } from "apexcharts";
import { LatLngExpression } from "leaflet";
import Chart from 'react-apexcharts'

interface IProps {
    data?: Measure[]
}

export const ChartHistoric = ({ data }: IProps) => {

    let seriesGas: number[] = []
    let seriesTemperature: number[] = []
    let xAxis: string[] = []

    data?.forEach((item) => {
        xAxis.push(new Date(item.createdAt).toLocaleString())
        seriesGas.push(parseFloat(item.gasLevel))
        seriesTemperature.push(parseFloat(item.temperature))
    })

    const chartData: ApexOptions = {


        series: [
            {
                name: "Nível de gás",
                data: seriesGas,
            },
            {
                name: "Temperatura",
                data: seriesTemperature,
            },
        ],
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },

        },
        colors: ["#eb4034", "#ebd334"],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        xaxis: {
            categories: xAxis,
        }
    }

    return <Chart options={chartData} series={chartData.series} type="line" height={"300px"} width={"100%"} />
}