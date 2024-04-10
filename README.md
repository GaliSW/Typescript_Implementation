TypeScript 練習與設計模式
==================

這個文檔是一個 TypeScript 練習專案的教學，主要聚焦在如何使用 TypeScript 優化程式碼，並練習運用不同的設計模式。

內容摘要
----

1.  **CSV 讀取器 (CsvFileReader) 的優化**: 原始的 CSV 讀取器只能讀取特定格式的 CSV 文件，我們通過提取轉換方法到 mapRow 中，使其具有更大的彈性。
    
2.  **解決 CSV 讀取器的重用問題**: 我們將 CsvFileReader 改為抽象類別，並使用泛型來增加其重用性。這樣，我們可以用子類別來擴展閱讀器，並定義如何解析不同格式的文件。
    
3.  **分析與輸出的優化**: 我們建立一個 Summary 類來實現分析與輸出的功能，並可以獨立出分析與輸出的方法，依照需求替換。
    
4.  **繼承與組合的比較**: 透過窗戶類別的例子，我們比較了繼承與組合兩種設計模式的優缺點。
    

使用方法
----

1.  安裝相依套件
    
2.  執行 npm start 命令來執行程式
    

參考資源
----

1.  [TypeScript 官方網站](https://www.typescriptlang.org/)
    
2.  [Design Patterns: Elements of Reusable Object-Oriented Software](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612)
