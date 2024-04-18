export interface Analyzer<T> {
  run(matches: T[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary<T> {
  constructor(
    public analyzer: Analyzer<T>,
    public outputTarget: OutputTarget
  ) {}

  buildAndPrintReport(matches: T[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
