import { ReactNode } from "react";

interface MessageProps {
	variant: string;
	children: ReactNode;
}

const Message = ({ variant, children }: MessageProps) => {
	return <div className={variant}>{children}</div>;
};

export default Message;
