import { NodeOutput } from "../types/output.ts";

export class LEDNode implements NodeOutput {
  private readonly nodeID: string;
  private NODE_NAME = "led";

  constructor(nodeID: string) {
    this.nodeID = nodeID;
  }

  getNodeID(): string {
    return this.nodeID;
  }

  getNextConnectedNodes(): NodeOutput[] {
    return [];
  }

  getNodeInitialisationCode(): string {
    return `$${this.NODE_NAME}_${this.nodeID}.run`;
  }

  getNodeCodeOutput(): string {
    return `
Task.suspend

while true
    data = getData("${this.nodeID}")
    if data == "1"
      $led13.write(1)
    else
      $led13.write(0)
    end
end
`;
  }

  getCallCodes(): string {
    return `$${this.NODE_NAME}_${this.nodeID}.resume`;
  }

  getInitialisationCodes(): string[] {
    return [
        `$led13 = GPIO.new(13, GPIO::OUT)`
    ];
  }
}
