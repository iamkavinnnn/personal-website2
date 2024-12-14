import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";
import Link from "../../Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		<Link text="Programming and Productivity" href="https://medium.com/@skavin02/wierd-thing-about-productivity-and-programming-0c8e051a397d" />
		<p className="pt-2 ">Just something I wrote because I was bored.</p>
		<p></p>
	</motion.li>
);


const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		<p className="pb-2">I like motorsports and go occasionally to kart on the weekends.</p>
	</motion.li>
);

const WritingList = [Item1, Item2];

export default WritingList;
