import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Calendar, Clock, List, Settings, Menu, X } from "lucide-react";

const SidebarItem = ({ icon, label, isActive, onClick }) => (
  <motion.div
    className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer ${
      isActive
        ? "bg-amber-200 text-amber-900"
        : "text-amber-700 hover:bg-amber-100"
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </motion.div>
);

const TaskCard = ({ title, description, dueDate }) => (
  <motion.div
    className="bg-white p-4 rounded-lg shadow-md"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-lg font-bold mb-2 text-amber-900">{title}</h3>
    <p className="text-amber-700 mb-2">{description}</p>
    <p className="text-sm text-amber-500">Due: {dueDate}</p>
  </motion.div>
);

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Tasks");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const chartData = [
    { name: "Mon", tasks: 12 },
    { name: "Tue", tasks: 19 },
    { name: "Wed", tasks: 3 },
    { name: "Thu", tasks: 5 },
    { name: "Fri", tasks: 2 },
    { name: "Sat", tasks: 0 },
    { name: "Sun", tasks: 9 },
  ];

  return (
    <div className="flex h-screen bg-amber-50 text-amber-900 font-mono ">
      {/* Toggle button for small screens */}
      <div className="absolute top-2 left-2 sm:p-1  z-30 bg-amber-200 flex justify-center items-center rounded-md">
        <button
          className="text-amber-700 focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <motion.div
        className={`absolute bg-amber-100 inset-y-0 left-0 z-20 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0 w-64" : "-translate-x-full"
        } p-4 space-y-4`}
        initial={{ x: -100, opacity: 0 }}
        animate={sidebarOpen ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }} // Custom easing function
      >
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={sidebarOpen ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-2xl font-bold mb-6 text-center text-amber-900"
        >
          RetroTask
        </motion.h1>
        <SidebarItem
          icon={<List size={20} />}
          label="Tasks"
          isActive={activeTab === "Tasks"}
          onClick={() => setActiveTab("Tasks")}
        />
        <SidebarItem
          icon={<Calendar size={20} />}
          label="Calendar"
          isActive={activeTab === "Calendar"}
          onClick={() => setActiveTab("Calendar")}
        />
        <SidebarItem
          icon={<Clock size={20} />}
          label="Time Tracking"
          isActive={activeTab === "TimeTracking"}
          onClick={() => setActiveTab("TimeTracking")}
        />
        <SidebarItem
          icon={<Settings size={20} />}
          label="Settings"
          isActive={activeTab === "Settings"}
          onClick={() => setActiveTab("Settings")}
        />
      </motion.div>

      {/* Main Content */}
      <div
        className={`flex-1 pt-12 px-2 sm:p-12 overflow-auto w-full transition-all duration-300 ${
          sidebarOpen ? "lg:ml-64" : "ml-0"
        }`}
      >
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome back, RetroUser!
        </motion.h2>

        {/* Task Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <TaskCard
            title="Design RetroUI Components"
            description="Create a set of retro-inspired UI components for the new project."
            dueDate="2023-07-15"
          />
          <TaskCard
            title="Implement Time Machine Feature"
            description="Add a feature that allows users to view past project states."
            dueDate="2023-07-20"
          />
          <TaskCard
            title="Retro Code Refactoring"
            description="Refactor the codebase to improve performance while maintaining the retro feel."
            dueDate="2023-07-25"
          />
        </div>

        {/* Activity Chart */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4">Weekly Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke="#92400e" />
              <YAxis stroke="#92400e" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fef3c7",
                  border: "1px solid #92400e",
                  borderRadius: "4px",
                }}
              />
              <Bar dataKey="tasks" fill="#92400e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}
