import translate from "translate";

translate.engine = "google";

export async function translateText(str: string): Promise<string>{
  return await translate(str, "ru");
}