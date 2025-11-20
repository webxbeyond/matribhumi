# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Weather Data Integration**: Current weather, 5-day forecasts, and weather by coordinates using OpenWeatherMap API
- **Postal Code Database**: Complete postal code database for major cities and areas in Bangladesh
- **Healthcare Facilities**: Database of hospitals, medical colleges, and clinics with contact information
- **Utility Functions**: Distance calculations, coordinate validation, district search, and proximity features
- **Comprehensive TypeScript types** for all new data structures
- **JSDoc comments** for all new functions
- **Additional unit tests** for new features (18 total tests)
- **Updated documentation** with usage examples for all new features

### Changed
- **Bundle size**: Increased from ~500KB to ~511KB due to additional data and functionality
- **README.md**: Expanded with comprehensive examples and API reference for new features

### Technical Details
- Added weather API integration with configurable API keys
- Implemented postal code search and validation functions
- Created healthcare facility database with filtering capabilities
- Added geographic utility functions for distance calculations and proximity searches
- Maintained full TypeScript type safety across all new features

## [0.0.4] - 2025-11-20

### Added
- Initial release of matribhumi package
- Geographical data for Bangladesh (divisions, districts, upazillas, unions)
- Country information API
- National holidays data
- Currency exchange rates via external API
- Islamic prayer times via external API
- TypeScript support with full type definitions