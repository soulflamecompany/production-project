import { BuildOptions } from '../types/config';

export function buildBabelLoader({ isDev }: BuildOptions) {
    return {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),

                // Плагин для автоматического создания переводов
                // plugins: [
                //     [
                //         "i18next-extract",
                //         {
                //             locales: ['ru', 'en'],
                // Добавляет автоматически папку с файлами переводов
                //             keyAsDefaultValue: true
                //         }
                //     ],
                // ]
            },
        },
    };
}
