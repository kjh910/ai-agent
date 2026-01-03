export type Integration = {
  id: string;
  title: string;
  status: "Connected" | "Pending" | "Disconnected";
};
