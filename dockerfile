FROM node:18

# 設定工作目錄
WORKDIR /app

# 複製 package.json 與 package-lock.json（如果存在）到工作目錄
COPY package*.json ./

# 安裝專案依賴
RUN npm install

# 複製所有專案文件到工作目錄
COPY . .

# 編譯 TypeScript 程式碼
RUN npm run start:build

# 預設指令：啟動應用程式
CMD ["npm", "run", "start:run"]
