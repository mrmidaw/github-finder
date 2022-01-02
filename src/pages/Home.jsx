import React from "react";
import { motion } from "framer-motion";
import { UserResults } from "../components/users/UserResults";
import { UserSearch } from '../components/users/UserSearch';

export const Home = () => {
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.8, times: [0, 0.5, 1] }}
        >
            <UserSearch />
            <UserResults />
        </motion.div>
    );
};