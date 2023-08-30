import { Area, AreaChart, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function RechartAreaComponent({ data, color, xAxis: XAxisCustom = <XAxis />, yAxis: YAxisCustom = <YAxis />, xKey = "x", yKey = "y" }) {
  return (
    <ResponsiveContainer>
      <AreaChart data={data ?? []} margin={{ left: 10, right: 10, top: 10, bottom: 5 }}>
        {XAxisCustom}
        {YAxisCustom}
        <CartesianGrid strokeDasharray="3 3" />
        <Area type="monotone" dataKey={yKey} stroke={color} fill={color} label={false} strokeWidth={1.5} dot={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
