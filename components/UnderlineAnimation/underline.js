import { motion } from '../ThirdPartyLibrariesComponents/third-party';

function Underline(props) {
  return (
    <motion.svg
      width={props.width}
      height={props.height}
      viewBox="0 0 1920 1080"
    >
      <motion.path
        d="M26,706c71.6-184.4,148.5-338.6,206-329c85.9,14.4,69.4,385.3,151,396c90.9,11.9,188.4-438.1,297-428
        c91,8.4,103.1,331.4,195,338c92,6.6,157.1-311.3,242-303c85.7,8.4,95.2,339.5,169,344c78.9,4.9,134.3-369.1,217-366
        c83.8,3.1,113.6,390.4,178,389c65.1-1.4,98.1-398.4,142-396c16.6,0.9,27.3,58.3,34,112"
        stroke="#FFA07A"
        strokeWidth="200"
        initial={{ pathLength: 0, fill: 'none', opacity: 0 }}
        animate={{ pathLength: 1, fill: '#FFA500', opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </motion.svg>
  );
}

export default Underline;
