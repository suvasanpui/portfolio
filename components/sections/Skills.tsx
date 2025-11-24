import React from 'react';
import { IconType } from 'react-icons';
import { FaReact, FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const Skills = () => {
	// Replace simple strings with structured items including icon components and gradient classes.
	const skills: { name: string; Icon: IconType; gradient: string }[] = [
		{ name: 'React', Icon: FaReact, gradient: 'bg-gradient-to-r from-cyan-400 to-blue-600' },
		{ name: 'Next.js', Icon: SiNextdotjs, gradient: 'bg-gradient-to-r from-gray-700 to-black' },
		{ name: 'TypeScript', Icon: SiTypescript, gradient: 'bg-gradient-to-r from-sky-400 to-indigo-600' },
		{ name: 'JavaScript', Icon: FaJsSquare, gradient: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
		{ name: 'HTML', Icon: FaHtml5, gradient: 'bg-gradient-to-r from-orange-400 to-red-500' },
		{ name: 'CSS', Icon: FaCss3Alt, gradient: 'bg-gradient-to-r from-blue-400 to-blue-700' },
		{ name: 'Tailwind CSS', Icon: SiTailwindcss, gradient: 'bg-gradient-to-r from-teal-400 to-blue-500' },
		{ name: 'Node.js', Icon: FaNodeJs, gradient: 'bg-gradient-to-r from-green-400 to-green-600' },
		{ name: 'Express', Icon: SiExpress, gradient: 'bg-gradient-to-r from-gray-400 to-gray-600' },
		{ name: 'MongoDB', Icon: SiMongodb, gradient: 'bg-gradient-to-r from-green-500 to-green-800' },
	];

	return (
		<section id="services" className="py-20 bg-blue-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Skills</h2>
				<p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
					Technologies I use to build performant and scalable web applications.
				</p>

				{/* Grid of professional skill cards */}
				<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
					{skills.map((skill) => {
						const Icon = skill.Icon;
						// indicate 1 year for core frontend skills, otherwise "Familiar"
						const core = new Set(['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS']);
						const expLabel = core.has(skill.name) ? '1 yr' : 'Familiar';
						return (
							<div key={skill.name} className="relative group">
								<div
									className={`flex items-center p-5 rounded-xl shadow-lg ${skill.gradient} text-white transition-transform transform hover:-translate-y-2 hover:shadow-2xl`}
									role="listitem"
									aria-label={skill.name}
								>
									<div className="flex-shrink-0">
										<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
											<Icon className="w-6 h-6" aria-hidden="true" />
										</div>
									</div>
									<div>
										<div className="text-lg font-semibold">{skill.name}</div>
										<div className="text-sm text-white/80">{expLabel}</div>
									</div>
								</div>

								{/* subtle outline on hover (purely decorative) */}
								<div
									className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
									aria-hidden="true"
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Skills;
