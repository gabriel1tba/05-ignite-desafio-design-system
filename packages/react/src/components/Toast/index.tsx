import { X } from 'phosphor-react';

import * as S from './styles';

export interface ToastProps {
	title: string;
	description?: string;
	open: boolean;
	onOpenChange: () => void;
	duration?: number;
}

export function Toast({
	title,
	description,
	open,
	onOpenChange,
	duration = 3000,
}: ToastProps) {
	return (
		<S.ToastProvider swipeDirection='right' duration={duration}>
			<S.ToastContainer open={open} onOpenChange={onOpenChange}>
				<S.ToastTitle>{title}</S.ToastTitle>
				{description && <S.ToastDescription>{description}</S.ToastDescription>}
				<S.ToastClose>
					<X size={20} weight='bold' />
				</S.ToastClose>
			</S.ToastContainer>
			<S.ToastViewport />
		</S.ToastProvider>
	);
}

Toast.displayName = 'Toast';
