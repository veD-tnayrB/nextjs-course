'use client';

import { LinkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx'; // Map of links to display in the side navigation.
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IProps {
	name: string;
	href: string;
	icon: React.ForwardRefExoticComponent<
		Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
			title?: string;
			titleId?: string;
		} & React.RefAttributes<SVGSVGElement>
	>;
}

export default function LinkItem(item: IProps) {
	const pathname = usePathname();
	return (
		<Link
			href={item.href}
			className={clsx(
				'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
				{
					'bg-sky-100 text-blue-600': pathname === item.href,
				},
			)}
		>
			<LinkIcon className="w-6" />
			<p className="hidden md:block">{item.name}</p>
		</Link>
	);
}
