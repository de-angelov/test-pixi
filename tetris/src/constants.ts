export const COLORS = {
	strong: "#2c3e50",
	secondary: "#ecf0f1",
	weak: "#96ADC5",
	accent: "#5CFFFC",
} as const;

export type VALUEOF_COLORS = typeof COLORS[keyof typeof COLORS]

export const SIDEBAR_WIDTH_RATIO = 0.25;
export const MAIN_WIDTH_RATIO = 1 - SIDEBAR_WIDTH_RATIO;

export const CELL_SIZE = {
	height: 50,
	width: 50,
} as const;

export const BORDER = {
	width: 4,
	color: COLORS.weak
} as const;



