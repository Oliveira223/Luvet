import fs from "fs";
import path from "path";

import type { HomeContent } from "@/types/content";

const contentDirectory = path.join(process.cwd(), "content");

export async function getContent(filename: string): Promise<HomeContent | null> {
  const fullPath = path.join(contentDirectory, `${filename}.json`);
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    return JSON.parse(fileContents) as HomeContent;
  } catch (error) {
    console.error(`Error loading content for ${filename}:`, error);
    return null;
  }
}
