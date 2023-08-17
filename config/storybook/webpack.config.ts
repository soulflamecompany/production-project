import path from 'path';
import webpack, { RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    // if (config.module?.rules) {
    //     // eslint-disable-next-line no-param-reassign
    //     config.module!.rules = config?.module?.rules?.map(
    //         (rule: RuleSetRule | '...') => {
    //             if (rule !== '...' && /svg/.test(rule.test as string)) {
    //                 return { ...rule, exclude: /\.svg$/i };
    //             }

    //             return rule;
    //         },
    //     );
    // }

    const rules = config.module?.rules as RuleSetRule[];
    // eslint-disable-next-line no-param-reassign
    config.module!.rules = rules.map((rule: RuleSetRule) => {
        if (
            rule.test instanceof RegExp &&
            rule.test.toString().includes('svg')
        ) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssLoader(true));

    return config;
};
