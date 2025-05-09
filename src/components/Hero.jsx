import React from "react";
import EmailForm from "./ui/EmailForm";
import content from "../data/content.json";
import SignedUpUsersCount from "./SignedUpUsersCount";

const Hero = () => {
	const { title, highlight, subtitle, description, stats } = content.hero;

	return (
		<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
			{/* Background with overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center z-0"
				style={{
					backgroundImage:
						"url('https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
					filter: "brightness(0.3)",
				}}
			/>

			{/* Background pattern overlay */}
			<div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90 z-0" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
						{title}
						<br />
						<span className="text-blue-400">{highlight}</span>
					</h1>

					<p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
						{subtitle}
						<br />
						{description}
					</p>

					<div className="mb-8 md:mb-12 max-w-md mx-auto">
						<EmailForm />
					</div>

					<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-4">
						{
							// Joined list Avatars not needed for now
						}
						<div className="flex items-center">
							{/*
							<div className="flex -space-x-2">
								{[...Array(4)].map((_, i) => (
									<div
										key={i}
										className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 border-2 border-white flex items-center justify-center text-xs text-white font-bold"
									>
										{String.fromCharCode(65 + i)}
									</div>
								))}
							</div>
              */}
							<div className="ml-2 text-white">
								<span className="font-bold text-blue-400 text-lg">
									<SignedUpUsersCount /> engineers
								</span>{" "}
								already joined!
							</div>
						</div>
						{
							// Ratings not needed for now
						}
						{/*
						<div className="flex items-center text-amber-300">
							<div className="flex">
								{[...Array(5)].map((_, i) => (
									<svg
										key={i}
										className="w-5 h-5 fill-current"
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
								))}
							</div>
							<span className="ml-1 text-white">{stats.rating}/5 rating</span>
						</div>
            */}
					</div>

					<p className="text-white/70 flex items-center justify-center">
						<span>Be next to gain these valuable skills</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
