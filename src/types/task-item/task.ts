export interface Task {
    id: number;
    title: string;
    description: string;
    time: string;
    favourite: boolean;
    state: 'Completed' | 'Pending';
}
