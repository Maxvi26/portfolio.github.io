import { motion } from "framer-motion";
import "./TerminalCard.css";

interface TerminalLine {
    command: string;
    result: React.ReactNode;
}

interface TerminalCardProps {
    lines: TerminalLine[];
}

const TerminalCard = ({ lines }: TerminalCardProps) => {
    return (
        <motion.div
            className="terminal-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="terminal-header">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="terminal-body">
                {lines.map((line, index) => (
                    <div key={index}>
                        <p>
                            <span>$</span> {line.command}
                        </p>
                        <p className="terminal-result">
                            {line.result}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default TerminalCard;