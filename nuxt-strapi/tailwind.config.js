export default {
    theme: {
      extend: {
        colors: {
          'form': {
            DEFAULT: '#fafafa',
          },
          'dark-mode': {
            DEFAULT: '#897EFF',
          },
          'light-mode': {
            DEFAULT: '#1A0DAB',
          },
          bggray: {
            DEFAULT: '#e8e8eb',
          },
          bay: {
            950: '#292c42',
            900: '#3d466b',
            800: '#475184',
            700: '#5362a2',
            600: '#5e72b2',
            500: '#7189c0',
            400: '#8ca5ce',
            300: '#b1c4df',
            200: '#d1dbec',
            100: '#e5eaf4',
            50: '#f4f7fa',
          },
          forest: {
            950: '#042f1c',
            900: '#125537',
            800: '#136840',
            700: '#11844d',
            600: '#11a860',
            500: '#1cca76',
            400: '#45e397',
            300: '#82f3bc',
            200: '#b9f9d9',
            100: '#dbfdec',
            50: '#f0fdf6',
          },
          moon: {
            950: '#3e1c0a',
            900: '#6b3918',
            800: '#7e4515',
            700: '#985610',
            600: '#be7910',
            500: '#dc9d16',
            400: '#ebb119',
            300: '#f2cc52',
            200: '#f7e391',
            100: '#faf2c7',
            50: '#fdf9e9',
          },
          sumi: {
            DEFAULT: '#222222',
            900: '#222222',
            800: '#3A3A3A',
            700: '#515151',
            600: '#696969',
            500: '#808080',
            400: '#989898',
            300: '#AFAFAF',
            200: '#C7C7C7',
            100: '#DFDFDF',
            50: '#F6F6F6',
          },
          sun: {
            DEFAULT: '#f53e50',
            950: '#47080e',
            900: '#821a24',
            800: '#9d1724',
            700: '#be1728',
            600: '#da1c2f',
            500: '#f53e50',
            400: '#fd6c7b',
            300: '#ffa2ab',
            200: '#ffc8cd',
            100: '#ffe1e4',
            50: '#fef2f3',
          },
        },
        spacing: {
          '0.75': '0.1875rem', /* 3px */
          '1.25': '0.3125rem', /* 5px */
          '1.75': '0.4375rem', /* 7px */
          '2.25': '0.5625rem', /* 9px */
          '4.5': '1.125rem', /* 18px */
          '7.5': '1.875rem', /* 30px */
          '8.5': '2.125rem', /* 34px */
          '12.5': '3.125rem', /* 50px */
          '15': '3.75rem', /** 60px */
          '18': '4.5rem', /** 72px */
          '25': '6.25rem', /** 100px */
          '45': '11.25rem', /** 180px */
          '50': '12.5rem', /** 200px */
          '75': '18.75rem', /** 300px */
          '100': '25rem', /** 400px */
        },
        lineHeight: {
          'article': '1.6',
        },
        borderWidth: {
          '3': '3px',
          '7': '7px',
        },
        fontSize: {
          'mag2-6xl': '2.125rem', /* 34px */
          'mag2-5xl': '1.5rem', /* 24px */
          'mag2-4xl': '1.375rem', /* 22px */
          'mag2-3xl': '1.25rem', /* 20px */
          'mag2-2xl': '1.125rem', /* 18px */
          'mag2-xl': '1.0625rem', /* 17px */
          'mag2-lg': '1rem', /* 16px */
          'mag2-base': '0.9375rem', /* 15px */
          'mag2-sm': '0.875rem', /* 14px */
          'mag2-xs': '0.8125rem', /* 13px */
          'mag2-2xs': '0.75rem', /* 12px */
          'mag2-3xs': '0.6875rem', /* 11px */
        },
        borderRadius: {
          'sm-plus': '0.1875rem', /* 3px */
        },
        letterSpacing: {
          // 'semi-wide': '0.0125em', 今後使用しない場合、あとで削除
          'semi-wider': '0.04em',
        },
        lineHeight: {
          'article': '1.6',
          // 'semi-loose': '1.75', 今後使用しない場合、あとで削除
        },
        screens: {
          'tablet': '600px',
          'pc': '768px',
        },
        zIndex: {
          '-1': '-1'
        }
      },
    fontFamily: {
      body: [
        'Helvetica Neue',
        'Segoe UI',
        'Hiragino Kaku Gothic ProN',
        'Meiryo',
        'MS PGothic',
        'sans-serif',
      ],
    }

    },
    plugins: [],
    content: [
      `@/components/**/*.{vue,js,ts}`,
      `@/layouts/**/*.vue`,
      `@/pages/**/*.vue`,
      `@/composables/**/*.{js,ts}`,
      `@/plugins/**/*.{js,ts}`,
      `@/utils/**/*.{js,ts}`,
      `@/App.{js,ts,vue}`,
      `@/app.{js,ts,vue}`,
      `@/Error.{js,ts,vue}`,
      `@/error.{js,ts,vue}`,
      `@/app.config.{js,ts}`,
    ],
    // Tailwind未使用クラスはビルド時に削除され、Storybookに反映されないため、以下パターンのクラスを反映させる
    safelist: process.env.NUXT_PUBLIC_APP_ENV !== 'local' ? [] : [
      { pattern: /^h-/ },
      { pattern: /^w-/ },
      { pattern: /^m-/ },
      { pattern: /^mt-/ },
      { pattern: /^mr-/ },
      { pattern: /^mb-/ },
      { pattern: /^ml-/ },
      { pattern: /^mx-/ },
      { pattern: /^my-/ },
      { pattern: /^p-/ },
      { pattern: /^pt-/ },
      { pattern: /^pr-/ },
      { pattern: /^pb-/ },
      { pattern: /^pl-/ },
      { pattern: /^px-/ },
      { pattern: /^py-/ },
      { pattern: /^top-/ },
      { pattern: /^right-/ },
      { pattern: /^bottom-/ },
      { pattern: /^left-/ },
      { pattern: /^text-/ },
      { pattern: /^font-/ },
      { pattern: /^leading-/ },
      { pattern: /^bg-/ },
      { pattern: /^flex-/ },
      { pattern: /^justify-/ },
      { pattern: /^items-/ },
      { pattern: /^grid-/ },
      { pattern: /^gap-/ },
      { pattern: /^tracking-/ },
    ],
  }
