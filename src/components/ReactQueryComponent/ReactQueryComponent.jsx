"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function ReactQueryComponent({ children }) {
  const myClient = new QueryClient();
  return (
    <QueryClientProvider client={myClient}>{children}</QueryClientProvider>
  );
}
