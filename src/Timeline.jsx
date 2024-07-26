import React from 'react';

function formatDate(startDate, endDate) {
  const months = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];

  const formatSingleDate = (date) => {
    const [month, year] = date.split(' ');
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  if (endDate.toUpperCase() === 'PRESENT') {
    return `${formatSingleDate(startDate)} — PRESENT`;
  } else {
    const [startMonth, startYear] = startDate.split(' ');
    const [endMonth, endYear] = endDate.split(' ');

    if (startYear === endYear) {
      return `${months[parseInt(startMonth) - 1]} — ${months[parseInt(endMonth) - 1]} ${endYear}`;
    } else {
      return `${formatSingleDate(startDate)} — ${formatSingleDate(endDate)}`;
    }
  }
}

function TimelineItem({ startDate, endDate, title, subtitle, description, skills }) {
  const formattedDate = formatDate(startDate, endDate);

  const renderDescription = (desc) => {
    return desc.split('\n').map((point, index) => (
      <p key={index} className="mb-1">{point.trim()}</p>
    ));
  };

  return (
    <div className="mb-8 flex">
      <div className="w-1/3 text-right pr-6">
        <div className="text-sm font-bold text-gray-500">
          {formattedDate}
        </div>
      </div>
      <div className="w-2/3 transition-transform duration-300 transform hover:scale-105 hover:bg-gray-800 p-4 rounded-lg">
        <h3 className="text-sm font-bold text-slate-50">{title}</h3>
        {subtitle && <div className="text-sm text-gray-400">{subtitle}</div>}
        <div className="mt-2 text-sm text-gray-400">
          {renderDescription(description)}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 text-xs rounded-full bg-cyan-900 text-teal-300">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Timeline({ experiences }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <TimelineItem 
            key={index}
            startDate={exp.startDate}
            endDate={exp.endDate}
            title={exp.title}
            subtitle={exp.subtitle}
            description={exp.description}
            skills={exp.skills}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
