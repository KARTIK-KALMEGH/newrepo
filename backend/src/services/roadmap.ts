export function generateRoadmap(targetRole: string, weeks: number) {
  const milestones = Array.from({ length: weeks }, (_item, i) => ({
    week: i + 1,
    focus: i < 4 ? "Fundamentals" : i < 8 ? "Projects" : "Interview + Applications",
    deliverable: `Week ${i + 1} deliverable for ${targetRole}`
  }));

  return milestones;
}
