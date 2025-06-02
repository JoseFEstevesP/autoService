import { type ReactNode } from 'react';

export interface ModalProps {
	className?: string;
	children: ReactNode;
	isOpen: boolean;
	handleClose: () => void;
}

interface UseModalProps {
	initState?: boolean;
}

interface UseModalReturn {
	isOpen: boolean;
	handleOpen: () => void;
	handleClose: () => void;
	setIsOpen: (value: boolean) => void;
}
