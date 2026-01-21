#!/bin/bash

echo "Building the application..."
cd /home/ubuntu/Documents/china-trade-insights
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful! The bilingual system has been implemented."
    echo ""
    echo "🌐 Features implemented:"
    echo "  • English/Chinese language switching"
    echo "  • Language switcher in top-right corner"
    echo "  • Persistent language selection (localStorage)"
    echo "  • Translated content for main sections:"
    echo "    - Hero Section"
    echo "    - Drivers Section (6 drivers)"
    echo "    - Outlook Section"
    echo ""
    echo "🚀 To run the development server:"
    echo "  npm run dev"
    echo ""
    echo "📝 Key files created/modified:"
    echo "  • src/lib/translations.ts - Translation definitions"
    echo "  • src/contexts/LanguageContext.tsx - Language state management"
    echo "  • src/components/LanguageSwitcher.tsx - UI component"
    echo "  • Updated main components to use translations"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
