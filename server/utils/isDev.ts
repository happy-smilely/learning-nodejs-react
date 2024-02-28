const development: boolean = process.env.NODE_ENV === "development";
console.log("Is dev run and found that development mode is currently running::" + development);

export default function isDev(): boolean {
  return development;
}
