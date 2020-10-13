import external from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true,
            abortOnError: false,
            exclude: [
                '**/__tests__/**/*.{js,jsx,ts,tsx}',
                '**/*.{spec,test}.{js,jsx,ts,tsx}',
                '**/*{spec,test}.{js,jsx,ts,tsx}'
            ]
        })
    ]
}
