import Container from '../container/Container';
import { motion } from 'framer-motion';
export const BgGridlines: React.FC = () => {
  return (
    <div className="bg-gridlines pointer-events-none fixed top-0 left-0 h-screen w-full">
      <Container className="mx-auto flex h-full justify-between text-gray-600 opacity-20 min-[1px]:px-3 lg:opacity-30 xl:px-5">
        <motion.div
          className="h-full w-0.5 origin-top bg-current"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.95, delay: 0.4 }}
        ></motion.div>
        <motion.div
          className="hidden h-full w-0.5 origin-top bg-current lg:block"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.95, delay: 0.7 }}
        ></motion.div>
        <motion.div
          className="h-full w-0.5 origin-top bg-current"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.95, delay: 0.9 }}
        ></motion.div>
        <motion.div
          className="hidden h-full w-0.5 origin-top bg-current lg:block"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.95, delay: 0.7 }}
        ></motion.div>
        <motion.div
          className="h-full w-0.5 origin-top bg-current"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.95, delay: 0.4 }}
        ></motion.div>
      </Container>
    </div>
  );
};
