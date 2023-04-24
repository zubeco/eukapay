import fs from "fs/promises";
import path from "path";
import { TodoItem } from "../model/todoItem.type";
const dataFilePath = path.join(__dirname, "..", "data", "todo.json");

export const readDataFile = async () => {
  const rawData = await fs.readFile(dataFilePath, "utf8");
  return JSON.parse(rawData) as TodoItem[];
};

export const writeDataFile = async (data: TodoItem[]) => {
  const fileData = JSON.stringify(data, null, 2);
  await fs.writeFile(dataFilePath, fileData);
};
