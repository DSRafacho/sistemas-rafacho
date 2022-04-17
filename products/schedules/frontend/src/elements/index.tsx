import { motion } from "framer-motion";

export const div = (props: any) =>
    <motion.div {...props} />

export const button = (props: any) =>
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} {...props}>{props.title}</motion.button>
