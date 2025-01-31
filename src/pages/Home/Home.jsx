import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container className="text-center mt-5">
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                Welcome to BeyondChats Setup
            </motion.h1>
            <Link to="/register">
                <Button variant="primary" className="mt-3">Get Started</Button>
            </Link>
        </Container>
    );
};

export default Home;