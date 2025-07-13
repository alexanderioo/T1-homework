export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "todo" | "in_progress" | "done";
  priority: "low" | "medium" | "high";
  category: "bug" | "feature" | "documentation" | "refactor" | "test";
  createdAt: string;
  dueDate?: string;
}
