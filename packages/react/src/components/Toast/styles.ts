import {
	Provider,
	Root,
	Viewport,
	Title,
	Close,
	Description,
} from '@radix-ui/react-toast';
import { styled, keyframes } from '@stitches/react';

const slideIn = keyframes({
	from: {
		opacity: 0,
		transform: 'translateX(calc(100% + 1.25rem))',
	},
	to: {
		opacity: 1,
		transform: 'translateX(0)',
	},
});

const swipeOut = keyframes({
	from: {
		opacity: 1,
		transform: 'translateX(var(--radix-toast-swipe-end-x))',
	},
	to: {
		opacity: 0,
		transform: 'translateX(calc(100% + 1.25rem))',
	},
});

export const ToastProvider = styled(Provider, {});

export const ToastContainer = styled(Root, {
	display: 'grid',
	gridTemplateAreas: '"title close" "description close"',
	gridTemplateColumns: 'auto max-content',
	columnGap: '$4',
	alignItems: 'center',

	padding: '$3 $5',

	backgroundColor: '$gray800',
	border: '1px solid $gray600',
	borderRadius: '$sm',

	'&[data-state="open"]': {
		animation: `${slideIn} 0.2s cubic-bezier(0.16, 1, 0.3, 1)`,
	},

	'&[data-state="closed"]': {
		animation: `${swipeOut} 0.2s ease-in`,
	},

	'&[data-swipe="move"]': {
		transform: 'translateX(var(--radix-toast-swipe-move-x))',
	},

	'&[data-swipe="cancel"]': {
		transform: 'translateX(0)',
		transition: 'transform 0.2s ease-out',
	},

	'&[data-swipe="end"]': {
		animation: `${swipeOut} 0.2s ease-out`,
	},
});

export const ToastTitle = styled(Title, {
	gridArea: 'title',

	fontFamily: '$default',
	color: '$white',
	fontWeight: '$bold',
	fontSize: '$xl',
	lineHeight: '$base',
});

export const ToastDescription = styled(Description, {
	gridArea: 'description',

	fontFamily: '$default',
	color: '$gray200',
	fontSize: '$sm',
	lineHeight: '$base',
});

export const ToastClose = styled(Close, {
	gridArea: 'close',

	all: 'unset',
	svg: {
		cursor: 'pointer',
		color: '$gray200',
	},
});

export const ToastViewport = styled(Viewport, {
	position: 'fixed',
	bottom: 0,
	right: 0,

	display: 'flex',
	flexDirection: 'column',
	gap: '10px',

	width: '390px',
	maxWidth: '100vw',
	padding: '$6',
	margin: 0,

	listStyle: 'none',
	outline: 'none',
	zIndex: '2147483647',
});
