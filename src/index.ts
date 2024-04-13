import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTarget/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { CsvFileReader } from "./CsvFileReader";
import { HtmlReport } from "./reportTarget/HtmlReport";

//Create an Object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");

//Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
    new WinsAnalysis("Man United"),
    new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
