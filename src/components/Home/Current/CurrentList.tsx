import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";
import Link from "@/components/Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		studying Software Engineering @ <Link text="Swinburne" href="https://www.swinburne.edu.au/" />
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		learning statistical and scientific methods to analyze data and extract insights. /fancy way of saying data science/
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		help design 3D sketchups for residential and commercial properties @ Interprof International
	</motion.li>
);

const Item4 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">04</p>
		trying to build virion.io /coming soon/
	</motion.li>
);

const Item5 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">05</p>
		<p>currently reading The Prince by Niccolo Machiavelli</p>
		<br />
		<p>sometimes i love to read. other times i am a library of half-finished books. i also love journaling.</p>
	</motion.li>
);

const CurrentList = [Item1, Item2, Item3, Item4, Item5];

export default CurrentList;
