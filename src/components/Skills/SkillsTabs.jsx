import React, { useState } from "react";
import { Code, Server, Database, GitBranch } from "lucide-react";

const SkillsTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    {
      id: "Frontend",
      name: "Frontend",
      icon: Code,
      color: "text-blue-600",
      iconColor: "text-blue-500",
      skills: [
        { name: "HTML5", desc: "Semantic markup" },
        { name: "CSS3", desc: "Modern styling & animations" },
        { name: "JavaScript", desc: "Modern ES6+ features" },
        { name: "React", desc: "Component-based UI library" },
        { name: "Flutter", desc: "Component-based UI library" },
        { name: "Tailwind CSS", desc: "Utility-first framework" },
        { name: "Framer motion", desc: "Animation library" },
      ],
    },
    {
      id: "Backend",
      name: "Backend",
      icon: Server,
      color: "text-green-600",
      iconColor: "text-green-500",
      skills: [
        { name: "Node.js", desc: "JavaScript runtime" },
        { name: "Express.js", desc: "Web framework" },
        { name: "Flask", desc: "Lightweight framework" },
        { name: "FastApi", desc: "High-performance API" },
        { name: "REST APIs", desc: "RESTful services" },
        { name: "JWT", desc: "Authentication" },
        { name: "Socket.io", desc: "Real-time communication" },
        { name: "Firebase", desc: "Backend-as-service" },
        { name: "Supabase", desc: "Open-source backend" },
      ],
    },
    {
      id: "Database",
      name: "Database",
      icon: Database,
      color: "text-purple-600",
      iconColor: "text-purple-500",
      skills: [
        { name: "MySQL", desc: "Relational database" },
        { name: "MongoDB", desc: "NoSQL database" },
        { name: "Firebase", desc: "BaaS platform" },
        { name: "Mongoose", desc: "MongoDB ODM" },
        { name: "Prisma", desc: "Database ORM" },
        { name: "SQLite", desc: "Lightweight database" },
      ],
    },
    {
      id: "Programming",
      name: "Programming",
      icon: GitBranch,
      color: "text-orange-600",
      iconColor: "text-orange-500",
      skills: [
        { name: "C", desc: "Procedural language" },
        { name: "C++", desc: "System programming" },
        { name: "Java", desc: "Object-oriented programming" },
        { name: "Python", desc: "Data science & web dev" },
        { name: "JavaScript", desc: "Full-stack development" },
        { name: "Dart", desc: "UI language" },
        { name: "Git", desc: "Version control" },
        { name: "Docker", desc: "Containerization" },
        { name: "AWS", desc: "Cloud services" },
      ],
    },
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="mb-16">
      {/* Tab Headers */}
      <div className="flex justify-center mb-6 sm:mb-8 px-2 sm:px-4">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-full p-1.5 sm:p-2 shadow-lg border border-white/50 w-full sm:w-auto max-w-md sm:max-w-none">
          <div className="grid grid-cols-2 sm:flex gap-1 sm:gap-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 justify-center sm:flex-none px-2 sm:px-4 lg:px-6 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2.5 min-w-0 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
                  }`}
                >
                  <IconComponent
                    className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0 ${
                      activeTab === tab.id ? "text-white" : tab.iconColor
                    }`}
                  />
                  <span className="truncate">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-blue-100 mx-2 sm:mx-0">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div
            className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 flex-shrink-0`}
          >
            <currentTab.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${currentTab.color}`} />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
              {currentTab.name} Technologies
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {currentTab.skills.length} technologies mastered
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {currentTab.skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-3 sm:p-4 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-400 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <h4 className="font-semibold text-sm sm:text-base text-gray-800 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white/80 transition-colors duration-300">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Demo component with state management
const App = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Explore my technical expertise across different domains
          </p>
        </div>
        <SkillsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default App;