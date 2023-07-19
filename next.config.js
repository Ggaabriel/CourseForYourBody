/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // Остальные настройки...

    // Отключение экспериментальных картинок
    images: {
        disableStaticImages: true,
    },
    experimental: {
        optimizeImages: false,
    },
    // Остальные настройки...
};

module.exports = nextConfig;
