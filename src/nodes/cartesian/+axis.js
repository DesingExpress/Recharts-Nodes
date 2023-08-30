import { ImPure } from "@design-express/fabrica";
import { XAxis, YAxis } from "recharts";

export class xAxis extends ImPure {
  static path = "Recharts/cartesian";
  static title = "xAxis";
  static description = "yaxixAxiss";

  constructor() {
    super();
    this.properties = { orientation: "bottom", type: "number" };
    this.addInput("props", "");
    this.addInput("key", "string,number,function");
    this.addInput("domain", "array,function");
    this.addInput("tickFormatter", "function");
    this.addInput("scale", "string,function");

    this.addOutput("xAxis", "rechart::x_axis");

    this.addWidget(
      "combo",
      "type",
      this.properties.type,
      (v) => {
        this.properties.type = v;
      },
      {
        values: ["number", "category"],
      }
    );
    this.addWidget(
      "combo",
      "orientation",
      this.properties.orientation,
      (v) => {
        this.properties.orientation = v;
      },
      {
        values: ["bottom", "top"],
      }
    );
  }

  onExecute() {
    let _props = this.getInputData(1) ?? {};
    const { type, orientation } = this.properties;
    const _key = this.getInputData(2);
    const _domain = this.getInputData(3);
    const _tickFormatter = this.getInputData(4);
    const _scale = this.getInputData(5) ?? "auto";
    this.setOutputData(
      1,
      <XAxis {..._props} type={type} dataKey={_key} domain={_domain} tickFormatter={_tickFormatter} scale={_scale} orientation={orientation} />
    );
  }
}

export class yAxis extends ImPure {
  static path = "Recharts/cartesian";
  static title = "yAxis";
  static description = "yaxis";

  constructor() {
    super();
    this.properties = { orientation: "left", type: "number" };
    this.addInput("props", "");
    this.addInput("key", "string,number,function");
    this.addInput("domain", "array,function");
    this.addInput("tickFormatter", "function");
    this.addInput("scale", "string,function");

    this.addOutput("yAxis", "rechart::y_axis");

    this.addWidget(
      "combo",
      "type",
      this.properties.type,
      (v) => {
        this.properties.type = v;
      },
      {
        values: ["number", "category"],
      }
    );
    this.addWidget(
      "combo",
      "orientation",
      this.properties.orientation,
      (v) => {
        this.properties.orientation = v;
      },
      {
        values: ["left", "right"],
      }
    );
  }

  onExecute() {
    const _props = this.getInputData(1) ?? {};
    const { type, orientation } = this.properties;
    const _key = this.getInputData(2);
    const _domain = this.getInputData(3);
    const _tickFormatter = this.getInputData(4);
    const _scale = this.getInputData(5) ?? "auto";
    this.setOutputData(
      1,
      <YAxis {..._props} type={type} dataKey={_key} domain={_domain} tickFormatter={_tickFormatter} scale={_scale} orientation={orientation} />
    );
  }
}
