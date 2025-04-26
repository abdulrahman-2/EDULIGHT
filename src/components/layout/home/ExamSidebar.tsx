import SidebarSection from "./SidebarSection";

const categories = [
  { id: 1, label: "Web development", quantity: 10 },
  { id: 2, label: "Data Science", quantity: 5 },
  { id: 3, label: "Mobile Development", quantity: 8 },
  { id: 4, label: "Web development", quantity: 10 },
  { id: 5, label: "Software Engineering", quantity: 6 },
  { id: 6, label: "Software Development Tools", quantity: 12 },
];

const durations = [
  { id: 1, label: "6-12 Months", quantity: 1345 },
  { id: 2, label: "3-6 Months", quantity: 1345 },
  { id: 3, label: "1-3 Months", quantity: 1345 },
  { id: 4, label: "1-4 Weeks", quantity: 1345 },
  { id: 5, label: "1-7 Days", quantity: 1345 },
];

const ExamSidebar = ({ open }: { open: boolean }) => {
  return (
    open && (
      <div className="fade-slide-in w-[300px] space-y-4">
        <SidebarSection title="Categories" items={categories} />
        <SidebarSection title="Duration" items={durations} />
      </div>
    )
  );
};

export default ExamSidebar;
