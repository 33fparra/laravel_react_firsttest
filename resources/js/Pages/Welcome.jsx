import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Aeela - Soluciones Empresariales" />
            <div className="min-h-screen bg-white">
                {/* Header */}
                <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                        <Link href="/" className="flex items-center">
                            <img 
                                src="/LOGOAELA_THIN.png" 
                                alt="Aeela" 
                                className="h-12 w-auto"
                            />
                        </Link>
                        
                        <nav className="flex items-center gap-8">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="text-sm font-medium text-gray-700 hover:text-[#98012e] transition-colors"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="text-sm font-medium text-gray-700 hover:text-[#98012e] transition-colors"
                                    >
                                        Iniciar sesión
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-full bg-[#98012e] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#7a0125] hover:shadow-lg hover:shadow-[#98012e]/25"
                                    >
                                        Crear cuenta
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                            <div className="max-w-2xl">
                                <span className="inline-block rounded-full bg-[#98012e]/10 px-4 py-1.5 text-sm font-semibold text-[#98012e]">
                                    Bienvenido a Aeela
                                </span>
                                <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
                                    Simplificamos tu{' '}
                                    <span className="text-[#98012e]">gestión empresarial</span>
                                </h1>
                                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                    Plataforma integral para la administración de tu negocio. 
                                    Controla inventario, ventas, clientes y más desde un solo lugar, 
                                    con tecnología de vanguardia y soporte especializado.
                                </p>
                                <div className="mt-10 flex flex-wrap gap-4">
                                    <Link
                                        href={route('register')}
                                        className="rounded-full bg-[#98012e] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#7a0125] hover:shadow-xl hover:shadow-[#98012e]/25"
                                    >
                                        Comenzar gratis
                                    </Link>
                                    <Link
                                        href={route('login')}
                                        className="rounded-full border-2 border-gray-200 px-8 py-3.5 text-base font-semibold text-gray-700 transition-all hover:border-[#98012e] hover:text-[#98012e]"
                                    >
                                        Ver demo
                                    </Link>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#98012e]/10 to-[#98012e]/5 p-8">
                                    <img 
                                        src="/LOGOAEELA.png" 
                                        alt="Aeela" 
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="bg-gray-50 py-20 lg:py-32">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                                Todo lo que necesitas
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Herramientas poderosas para hacer crecer tu negocio
                            </p>
                        </div>
                        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    title: 'Inventario Inteligente',
                                    description: 'Controla tu stock en tiempo real con alertas automáticas y predictive reorden.',
                                    icon: '📦'
                                },
                                {
                                    title: 'Punto de Venta',
                                    description: 'Sistema de ventas rápido y seguro con múltiples métodos de pago integrados.',
                                    icon: '💳'
                                },
                                {
                                    title: 'Gestión de Clientes',
                                    description: 'CRM completo para fortalecer relaciones con tus clientes.',
                                    icon: '👥'
                                },
                                {
                                    title: 'Reportes Analíticos',
                                    description: 'Dashboards en tiempo real con métricas clave de tu negocio.',
                                    icon: '📊'
                                },
                                {
                                    title: 'Multi-usuario',
                                    description: 'Control de accesos y permisos para tu equipo de trabajo.',
                                    icon: '👨‍💼'
                                },
                                {
                                    title: 'Soporte 24/7',
                                    description: 'Equipo de soporte técnico always disponible para ayudarte.',
                                    icon: '🎧'
                                }
                            ].map((feature, index) => (
                                <div key={index} className="group rounded-2xl bg-white p-8 transition-all hover:shadow-xl hover:shadow-gray-900/5">
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-3 text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 lg:py-32">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="relative overflow-hidden rounded-3xl bg-[#98012e] px-8 py-16 lg:px-16 lg:py-24">
                            <div className="relative z-10 max-w-2xl">
                                <h2 className="text-3xl font-bold text-white lg:text-4xl">
                                    ¿Listo para transformar tu negocio?
                                </h2>
                                <p className="mt-4 text-lg text-white/80">
                                    Únete a miles de empresas que ya confían en Aeela 
                                    para simplificar su gestión diaria.
                                </p>
                                <div className="mt-10 flex flex-wrap gap-4">
                                    <Link
                                        href={route('register')}
                                        className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[#98012e] transition-all hover:bg-gray-100"
                                    >
                                        Crear cuenta gratis
                                    </Link>
                                    <Link
                                        href={route('login')}
                                        className="rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
                                    >
                                        Iniciar sesión
                                    </Link>
                                </div>
                            </div>
                            <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-white/10"></div>
                            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-white/5"></div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-gray-100 py-12">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
                            <div className="flex items-center gap-3">
                                <img 
                                    src="/LOGOAELA_THIN.png" 
                                    alt="Aeela" 
                                    className="h-8 w-auto"
                                />
                                <span className="text-sm text-gray-500">
                                    © 2026 Aeela. Todos los derechos reservados.
                                </span>
                            </div>
                            <div className="flex gap-8">
                                <Link href={route('login')} className="text-sm text-gray-500 hover:text-[#98012e]">
                                    Términos
                                </Link>
                                <Link href={route('login')} className="text-sm text-gray-500 hover:text-[#98012e]">
                                    Privacidad
                                </Link>
                                <Link href={route('login')} className="text-sm text-gray-500 hover:text-[#98012e]">
                                    Contacto
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}