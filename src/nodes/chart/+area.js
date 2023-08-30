import { ImPure } from "@design-express/fabrica";
import { RechartAreaComponent } from "../components/rechart";

export class AreaChart extends ImPure {
  static path = "Recharts/chart";
  static title = "AreaChart";
  static description = "AreaChart Component";

  constructor() {
    super();
    this.addInput("props", "object");
    this.addInput("data", "array");
    this.addInput("color", "string");
    this.addInput("xAxis", "rechart::x_axis");
    this.addInput("yAxis", "rechart::y_axis");
    this.addInput("xKey", "string,number");
    this.addInput("yKey", "string,number");

    this.addOutput("component", "component");
  }

  onExecute() {
    const _props = this.getInputData(1);
    if (!!_props) this.setOutputData(1, <RechartAreaComponent {..._props} />);
    else {
      const _data = this.getInputData(2);
      const _color = this.getInputData(3);
      const _xAxis = this.getInputData(4);
      const _yAxis = this.getInputData(5);
      const _xKey = this.getInputData(6);
      const _yKey = this.getInputData(7);
      this.setOutputData(1, <RechartAreaComponent data={_data} color={_color} xAxis={_xAxis} yAxis={_yAxis} xKey={_xKey} yKey={_yKey} />);
    }
  }
}
