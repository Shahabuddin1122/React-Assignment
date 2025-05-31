import type {Task as TaskType} from "../task-item/task.ts";
import React from "react";

export type TaskProps = {
    tasks: TaskType[];
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
};