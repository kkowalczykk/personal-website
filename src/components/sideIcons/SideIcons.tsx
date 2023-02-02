import { TbBrandGithub } from 'react-icons/tb';
import { FiLinkedin } from 'react-icons/fi';
import { MdMailOutline } from 'react-icons/md';
import { motion } from 'framer-motion';

export interface ISideIcons extends React.HTMLAttributes<HTMLDivElement> {}

export const SideIcons: React.FC<ISideIcons> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="SideIcons fixed bottom-0 left-10 z-10 hidden flex-col items-center min-[1366px]:flex"
    >
      <div className="icons mb-5 flex flex-col items-center space-y-4 text-slate-400">
        <a
          href="https://github.com/kkowalczykk"
          target={'_blank'}
          className="text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:text-orange-primary"
        >
          <TbBrandGithub className="block h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/kkowalczykk/"
          target={'_blank'}
          className="text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:text-orange-primary"
        >
          <FiLinkedin className="block h-5 w-5" />
        </a>
        <a
          href="mailto:me@kkowalczyk.dev"
          className="text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:text-orange-primary"
        >
          <MdMailOutline className="block h-6 w-6" />
        </a>
      </div>
      <div className="h-20 w-[1px] bg-slate-400"></div>
    </motion.div>
  );
};
