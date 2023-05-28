/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              // Neutral
              neutral50: '#F8FAFC',
              neutral100: '#F1F5F9',
              neutral200: '#E2E8F0',
              neutral300: '#CBD5E1',
              neutral400: '#94A3B8',
              neutral500: '#64748B',
              neutral600: '#475569',
              neutral700: '#334155',
              neutral800: '#1E293B',
              nautral900: '#0F172A',

              //Primary
              primary50: '#E4F3FC',
              primary100: '#CAE7F9',
              primary200: '#AFDBF6',
              primary300: '#95CFF3',
              primary400: '#87C9F2',
              primary500: '#7AC3F0',
              primary600: '#4DAFEB',
              primary700: '#219BE6',
              primary800: '#1A7CB8',
              primary900: '#145D8A',

              //Secondary
              secondary50: '#FFF1CC',
              secondary300: '#FFDD80',
              secondary500: '#FFC833',
              secondary700: '#FFBA00',
              secondary900: '#CC9500',

              //Success
              success50: '#A8EE87',
              succeess300: '#87E75A',
              success500: '#67E12D',
              succeess700: '#50C01B',
              success900: '#3D9315',

              //Warning
              warning50: '#FFA470',
              warning300: '#FF833D',
              warning500: '#FF630B',
              warning700: '#D64D00',
              warning900: '#FF8800',

              //Error
              err50: '#FF6666',
              err300: '#FF3333',
              err500: '#FF0000',
              err700: '#CC0000',
              err900: '#990000',

              //Shades
              shade50: '#FFFFFF',
              shade100: '#252525',
          },
          fontFamily: {
            'poppins': ['Poppins']
        }
      },
  },
  plugins: [],
};