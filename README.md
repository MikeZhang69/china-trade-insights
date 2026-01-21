# China Trade Insights - Bilingual Edition

A comprehensive analysis of China's historic $1.2 trillion trade surplus in 2025, presented as an interactive bilingual web application supporting both English and Chinese.

## 🌐 Live Demo

**GitHub Pages**: https://mikezhang09-code.github.io/china-trade-insights/

## 🚀 Features

### Bilingual Support
- **Complete English/Chinese Translation**: Every section, chart, and data point
- **Language Switcher**: Toggle between languages in real-time
- **Persistent Preference**: Language choice saved across sessions
- **Responsive Design**: Works seamlessly on all devices

### Content Sections
1. **Hero Section (英雄部分)**: Key statistics and overview
2. **Historical Evolution (历史演变)**: Timeline chart 2018-2025
3. **Sectoral Transformation (行业转型)**: "New Three" exports analysis
4. **Trade Flow Analysis (贸易流向分析)**: Geographic pivot and connector economy
5. **Structural Analysis (结构性分析)**: Six drivers of the surplus
6. **Future Implications (未来影响)**: 2030 outlook and global backlash

### Technical Features
- **Interactive Charts**: Built with Recharts
- **Smooth Animations**: Framer Motion integration
- **Modern UI**: Tailwind CSS + shadcn/ui components
- **Type Safety**: Full TypeScript implementation
- **Responsive**: Mobile-first design approach

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: GitHub Pages + GitHub Actions
- **Internationalization**: Custom translation system

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── HeroSection.tsx  # Main hero section
│   ├── TimelineChart.tsx # Historical data chart
│   ├── NewThreeSection.tsx # Sectoral analysis
│   ├── GeographicPivot.tsx # Trade flow analysis
│   ├── DriversSection.tsx # Six drivers analysis
│   ├── OutlookSection.tsx # Future implications
│   ├── Footer.tsx       # Footer component
│   └── LanguageSwitcher.tsx # Language toggle
├── contexts/            # React contexts
│   └── LanguageContext.tsx # Language state management
├── lib/                 # Utilities
│   ├── translations.ts  # Translation definitions
│   └── utils.ts        # Helper functions
├── pages/              # Page components
│   ├── Index.tsx       # Main page
│   └── NotFound.tsx    # 404 page
└── main.tsx           # App entry point
```

## 🌍 Translation System

### Implementation
- **Centralized Translations**: All text in `src/lib/translations.ts`
- **Type Safety**: Full TypeScript support with `TranslationKey` type
- **Context-Based**: React Context for state management
- **Persistent Storage**: localStorage for language preference

### Usage Example
```typescript
import { useLanguage } from '@/contexts/LanguageContext';

const Component = () => {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('heroTitle')}</h1>
      <button onClick={() => setLanguage('zh')}>
        Switch to Chinese
      </button>
    </div>
  );
};
```

### Translation Coverage
- ✅ **100% Content Coverage**: All text translated
- ✅ **Section Titles**: All major headings
- ✅ **Data Labels**: Chart labels and statistics
- ✅ **Descriptions**: Detailed explanations
- ✅ **UI Elements**: Buttons, navigation, footer
- ✅ **Dynamic Content**: Country names, regions, statistics

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/mikezhang09-code/china-trade-insights.git

# Navigate to project directory
cd china-trade-insights

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run test         # Run tests
```

## 📊 Data Sources

Analysis compiled from authoritative sources:
- **AP News**: Trade statistics and policy analysis
- **IMF**: International trade data
- **Chinese Customs Administration**: Export/import figures
- **Official Government Reports**: Policy documentation

## 🎨 Design System

### Color Palette
- **Primary**: Gold gradient for key highlights
- **Success**: Green for positive growth
- **Destructive**: Red for negative trends
- **Muted**: Gray tones for secondary information

### Typography
- **Display**: Playfair Display for headings
- **Body**: Inter for readable text
- **Mono**: JetBrains Mono for data/statistics

### Components
Built with shadcn/ui component library:
- Cards, Buttons, Tooltips
- Charts, Tables, Navigation
- Responsive grid system

## 🚀 Deployment

### GitHub Pages
Automatic deployment via GitHub Actions:
- **Trigger**: Push to `main` branch
- **Build**: Vite production build
- **Deploy**: Static files to GitHub Pages
- **URL**: https://mikezhang09-code.github.io/china-trade-insights/

### Manual Deployment
```bash
npm run build        # Generate dist/ folder
# Upload dist/ contents to your hosting provider
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Translation Contributions
To add or improve translations:
1. Edit `src/lib/translations.ts`
2. Add new keys to both `en` and `zh` objects
3. Use the `t()` function in components
4. Test both language versions

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Data Sources**: AP News, IMF, Chinese Customs Administration
- **UI Components**: shadcn/ui component library
- **Charts**: Recharts library
- **Icons**: Lucide React icons
- **Deployment**: GitHub Pages and Actions

## 📧 Contact

For questions or suggestions about this analysis:
- **GitHub Issues**: [Create an issue](https://github.com/mikezhang09-code/china-trade-insights/issues)
- **Pull Requests**: Contributions welcome

---

**Note**: This is an analytical visualization project for educational and informational purposes. All data is sourced from publicly available reports and official statistics.
