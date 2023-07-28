import { error } from "console";

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw error("danger");
  return <div>Hello, Welcome to Next.JS</div>;
}
