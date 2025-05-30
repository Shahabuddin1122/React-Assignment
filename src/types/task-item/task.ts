export type TaskType = {
  id: number;
  title: string;
  description: string;
  time: string;
  favourite: boolean;
  state: "Completed" | "Pending";
};
