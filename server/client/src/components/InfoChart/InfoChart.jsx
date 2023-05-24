import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Сесія 1',
        uv: 3,
        pv: 2,
        amt: 15,
    },
    {
        name: 'Сесія 2',
        uv: 3,
        pv: 8,
        amt: 15,
    },
    {
        name: 'Сесія 3',
        uv: 3,
        pv: 2,
        amt: 15,
    },
    {
        name: 'Сесія 4',
        uv: 1,
        pv: 9,
        amt: 15,
    },
    {
        name: 'Сесія 5',
        uv: 3,
        pv: 1,
        amt: 15,
    },
    {
        name: 'Сесія 6',
        uv: 4,
        pv: 2,
        amt: 15,
    },
    {
        name: 'Сесія 7',
        uv: 3,
        pv: 2,
        amt: 15,
    },
    {
        name: 'Сесія 8',
        uv: 3,
        pv: 1,
        amt: 0,
    },
];

export default class InfoChart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/synchronized-line-charts-zc3nl';

    render() {
        return (
            <div style={{ width: '100%' }}>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        width={500}
                        height={200}
                        data={data}
                        syncId="anyId"
                        margin={{top: 10, right: 30, left: 0, bottom: 0,}}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
                        <Brush />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
