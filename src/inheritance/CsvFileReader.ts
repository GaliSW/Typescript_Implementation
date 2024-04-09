import fs from "fs";
import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string];
export abstract class CsvFileReader<TData> {
  data: TData[] = [];
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): TData;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
