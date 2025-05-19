import type { NameIcon } from '../../../../components/icon/interface';

export const methodsPayment: Array<{
	title: string;
	description: string;
	iconName: NameIcon;
}> = [
	{
		title: 'Tarjetas de Crédito/Débito',
		description: 'Aceptamos todas las tarjetas principales',
		iconName: 'card',
	},
	{
		title: 'Billeteras Digitales',
		description: 'Paga rápido y seguro',
		iconName: 'wallet',
	},
	{
		title: 'Transferencia Bancaria',
		description: 'Transferencia directa a nuestra cuenta',
		iconName: 'bank',
	},
	{
		title: 'Pagos Seguros',
		description: 'Tu seguridad es nuestra prioridad',
		iconName: 'shield',
	},
];
