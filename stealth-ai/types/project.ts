export type ProjectLevel = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

export interface Project {
  id: string;
  title: string;
  level: ProjectLevel;
  completed: boolean;
}
