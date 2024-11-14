import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import '@/style/Welcome.css'

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <Guest>
                <div>
                    
                </div>

            
            
            </Guest>
        </>
    );
}
