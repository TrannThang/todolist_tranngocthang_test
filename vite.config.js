import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/todolist_tranngocthang_test/",
  plugins: [react()],
});
