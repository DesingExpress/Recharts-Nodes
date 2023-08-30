![ReChart-logo](https://raw.github.com/DesingExpress/Recharts-Nodes/master/assets/logo.png)

# [Recharts](https://recharts.org/) Nodes

Recharts is a **Redefined** chart library built with [React](https://facebook.github.io/react/) and [D3](http://d3js.org).

The main purpose of this library is to help you to write charts in React applications without any pain. Main principles of Recharts are:

1. **Simply** deploy with React components.
2. **Native** SVG support, lightweight depending only on some D3 submodules.
3. **Declarative** components, components of charts are purely presentational.

## ◽AreaChart Node

```litegraph
{
  "title": "AreaChart",
  "inputs": [
    { "label": "config" },
    { "label": "data" },
    { "label": "color" },
    { "label": "xAxis" },
    { "label": "yAxis" },
    { "label": "xKey" },
    { "label": "yKey" }
  ],
  "outputs": [
    { "label": "component" }
  ]
}
```

### Location

`ReCharts` > `chart` > `AreaChart`

### Slots

#### Inputs

| Label                    | Type               | Description                                                                         |
| ------------------------ | ------------------ | ----------------------------------------------------------------------------------- |
| [**config**](1-template) | `object`           | The object with properties of [AreaChart](https://recharts.org/en-US/api/AreaChart) |
| [**data**](1-template)   | `array`            | The source data, in which each element is an object.                                |
| [**color**](1-template)  | `string`           | The stroke color. If "none", no line will be drawn.                                 |
| [**xAxis**](#1-template) | `rechart::x_axis`  | [XAxis](https://recharts.org/en-US/api/XAxis) component.                            |
| [**yAxis**](#1-template) | `rechart::y_axis`  | [YAxis](https://recharts.org/en-US/api/YAxis) component.                            |
| [**xKey**](1-template)   | `string` , `array` | The key of data displayed in the x-axis.                                            |
| [**yKey**](1-template)   | `string` , `array` | The key of data displayed in the y-axis.                                            |

#### Outputs

| Label         | Type        | Description                                                                               |
| ------------- | ----------- | ----------------------------------------------------------------------------------------- |
| **component** | `component` | UI Component that displays rendered [AreaChart](https://recharts.org/en-US/api/AreaChart) |

## ◽xAxis Node

```litegraph
{
  "title": "xAxis",
  "inputs": [
    { "label": "props" },
    { "label": "key" },
    { "label": "domain" },
    { "label": "tickFormatter" },
    { "label": "scale" }
  ],
  "outputs": [{ "label": "xAxis" }]
}
```

### Location

`ReCharts` > `cartesian` > `xAxis`

### Slots

#### Inputs

| Label                            | Type                         | Description                                                                                                                                                                                                                                                                                             |
| -------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**props**](#1-template)         | `object`                     | The object with [**XAxis**](https://recharts.org/en-US/api/XAxis) properties                                                                                                                                                                                                                            |
| [**key**](#1-template)           | `string`,`number`,`function` | The key of data displayed in the x-axis                                                                                                                                                                                                                                                                 |
| [**domain**](#1-template)        | `array`,`function`           | Specify the domain of axis when the [type](#widgets) is a number axis. The length of domain should be 2. And each element in the array can be a number, 'auto', 'dataMin', 'dataMax', a string like 'dataMin - 20', 'dataMax + 100', or a function that accepts a single argument and returns a number. |
| [**tickFormatter**](#1-template) | `function`                   | The formatter function of tick.                                                                                                                                                                                                                                                                         |
| [**scale**](#1-template)         | `string`, `function`         | `'auto'` , `'linear'` , `'pow'` , `'sqrt'` , `'log'` , `'identity'` , `'time'` , `'band'` , `'point'` , `'ordinal'` , `'quantile'` , `'quantize'` , `'utc'` , `'sequential'` , `'threshold'`                                                                                                            |

#### Widgets

| Label           | Description             |
| --------------- | ----------------------- |
| **type**        | The type of axis.       |
| **orientation** | The orientation of axis |

#### Outputs

| Label     | Type              | Description                                                     |
| --------- | ----------------- | --------------------------------------------------------------- |
| **xAxis** | `rechart::x_axis` | Recahrt [XAxis](https://recharts.org/en-US/api/XAxis) component |

## ◽yAxis Node

```litegraph
{
  "title": "yAxis",
  "inputs": [
    { "label": "props" },
    { "label": "key" },
    { "label": "domain" },
    { "label": "tickFormatter" },
    { "label": "scale" }
  ],
  "outputs": [{ "label": "yAxis" }]
}
```

### Location

`ReCharts` > `cartesian` > `yAxis`

### Slots

#### Inputs

| Label                            | Type                         | Description                                                                                                                                                                                                                                                                                            |
| -------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**props**](#1-template)         | `object`                     | The object with [**yAxis**](https://recharts.org/en-US/api/YAxis) properties                                                                                                                                                                                                                           |
| [**key**](#1-template)           | `string`,`number`,`function` | The key of data displayed in the x-axis                                                                                                                                                                                                                                                                |
| [**domain**](#1-template)        | `array`,`function`           | Specify the domain of axis when the [type](#widget) is a number axis. The length of domain should be 2. And each element in the array can be a number, 'auto', 'dataMin', 'dataMax', a string like 'dataMin - 20', 'dataMax + 100', or a function that accepts a single argument and returns a number. |
| [**tickFormatter**](#1-template) | `function`                   | The formatter function of tick.                                                                                                                                                                                                                                                                        |
| [**scale**](#1-template)         | `string`, `function`         | `'auto'` , `'linear'` , `'pow'` , `'sqrt'` , `'log'` , `'identity'` , `'time'` , `'band'` , `'point'` , `'ordinal'` , `'quantile'` , `'quantize'` , `'utc'` , `'sequential'` , `'threshold'`                                                                                                           |

#### Widgets

| Label           | Description             |
| --------------- | ----------------------- |
| **type**        | The type of axis.       |
| **orientation** | The orientation of axis |

#### Outputs

| Label     | Type              | Description                                                     |
| --------- | ----------------- | --------------------------------------------------------------- |
| **yAxis** | `rechart::y_axis` | Recahrt [YAxis](https://recharts.org/en-US/api/YAxis) component |

## Source Code

Recharts-Nodes is Open Source and You can see the code in [Github](https://github.com/DesingExpress/Rechars-Nodes.git)

## License

Recharts-Nodes is licensed under the [MIT license](https://opensource.org/license/mit/).
