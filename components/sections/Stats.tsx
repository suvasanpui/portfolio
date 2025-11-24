import React from "react";

const stats = [
  { value: "1+", label: "Years Experience", gradient: "from-[#0A0F52] to-[#0F1248]" },
  { value: "15+", label: "Projects Completed", gradient: "from-[#03322E] to-[#032524]" },
  { value: "10+", label: "Technologies", gradient: "from-[#2B170B] to-[#1A0E07]" },
  { value: "2+", label: "Companies", gradient: "from-[#260C43] to-[#19072E]" },
];

const Stats = () => {
  return (
    <section className="w-full flex justify-center items-center  py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full px-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 bg-gradient-to-br ${item.gradient} text-center shadow-lg`}
          >
            <h2 className="text-3xl font-bold text-white">{item.value}</h2>
            <p className="mt-1 text-sm text-gray-300">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
