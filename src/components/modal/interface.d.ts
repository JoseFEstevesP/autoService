import React from 'react';

export interface ModalProps {
	className?: string;
	children: React.ReactNode;
	isOpen: boolean;
	handleClose: () => void;
	title: string;
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
