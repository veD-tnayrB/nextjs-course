'use client';
import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import LinkItem from './link-item';

// Depending on the size of the application, this would be stored in a database.
const links = [
	{ name: 'Home', href: '/dashboard', icon: HomeIcon },
	{
		name: 'Invoices',
		href: '/dashboard/invoices',
		icon: DocumentDuplicateIcon,
	},
	{ name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
	return (
		<>
			{links.map((link) => (
				<LinkItem key={link.name} {...link} />
			))}
		</>
	);
}
