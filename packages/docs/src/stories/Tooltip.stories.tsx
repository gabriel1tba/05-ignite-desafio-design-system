import { Meta, StoryObj } from '@storybook/react';
import { Box, Text, Tooltip, TooltipProps } from '@gabriel1tba-ui/react';

export default {
	title: 'Form/Tooltip',
	component: Tooltip,
	args: {
		content: '26 de Outubro - Disponível',
		trigger: (
			<Box
				css={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: 100,
					width: 200,
					marginTop: 45,
					marginLeft: 45,
				}}
			>
				<Text>Deslize seu mouse aqui</Text>
			</Box>
		),
	},
} as Meta<TooltipProps>;

export const Primary: StoryObj = {};
