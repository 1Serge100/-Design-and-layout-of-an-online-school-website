import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { test } from "../test/test";
import { t2 } from "../test/t2";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "1New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Home() {
  return <Welcome />;
}
