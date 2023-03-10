import { ReactNode } from 'react';

import {
	Provider,
	Root,
	Trigger,
	Arrow,
	Portal,
} from '@radix-ui/react-tooltip';

import * as S from './styles';

export interface TooltipProps {
	trigger: ReactNode;
	content: string;
}

export function Tooltip({ trigger, content }: TooltipProps) {
	return (
		<Provider>
			<Root>
				<Trigger asChild>{trigger}</Trigger>
				<Portal>
					<S.TooltipContent sideOffset={5}>
						{content}
						<Arrow />
					</S.TooltipContent>
				</Portal>
			</Root>
		</Provider>
	);
}

Tooltip.displayName = 'Tooltip';
