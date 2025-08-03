# GitHub Stats Dashboard - Comprehensive Test Plan

This document outlines all the tests that should be written to ensure complete coverage of the GitHub Stats Dashboard features.

## Overview

The GitHub Stats Dashboard is a Next.js application that displays GitHub repository statistics with interactive charts and visualizations. This test plan covers all components, pages, utilities, and integration scenarios.

## Test Categories

### 1. Page Component Tests

#### Main Overview Page (`app/page.tsx`)

##### Rendering Tests
- [ ] Renders the overview title correctly
- [ ] Displays all key fact cards with proper values
- [ ] Shows commits pie chart with correct data
- [ ] Shows languages bar chart with correct data
- [ ] Shows top repositories charts (by commits and files)
- [ ] Applies correct grid layout styling

##### Data Integration Tests
- [ ] Correctly processes overview data from `getOverviewData()`
- [ ] Properly maps chart colors to data points
- [ ] Handles empty or undefined data gracefully
- [ ] Correctly slices top repositories data (max 8 items)
- [ ] Properly sorts languages by count (top 10)

#### User Page (`app/(pages)/user/page.tsx`)

##### Component Rendering Tests
- [ ] Shows loading state initially
- [ ] Renders user profile data when loaded
- [ ] Displays Bio component when bio exists
- [ ] Renders README content with processed markdown
- [ ] Handles missing profile or README data

##### API Integration Tests
- [ ] Successfully fetches user data from GitHub API
- [ ] Correctly processes README content (base64 decoding)
- [ ] Properly replaces relative image URLs with absolute URLs
- [ ] Handles API errors gracefully
- [ ] Manages loading states correctly

#### Repository Page (`app/(pages)/repository/[name]/page.tsx`)

##### Dynamic Routing Tests
- [ ] Generates correct static params for all repositories
- [ ] Finds correct repository by name parameter
- [ ] Handles invalid repository names gracefully

##### Data Display Tests
- [ ] Shows repository name as title
- [ ] Displays repository key facts correctly
- [ ] Renders commits pie chart for repository
- [ ] Shows languages bar chart for repository
- [ ] Applies correct styling and layout

### 2. Component Tests

#### OverviewKeyFacts Component

##### Props Handling
- [ ] Displays all statistics with correct formatting
- [ ] Formats large numbers with localeString
- [ ] Renders correct labels for each statistic
- [ ] Handles zero values properly

##### UI Structure
- [ ] Creates correct grid layout (4 columns)
- [ ] Applies proper card styling
- [ ] Shows values in correct typography styles

#### RepositoryKeyFacts Component

##### Data Calculation
- [ ] Correctly calculates contributor count from commits object
- [ ] Properly counts languages from repository.languages
- [ ] Displays total commits and files accurately

##### Rendering
- [ ] Shows all 4 key fact cards
- [ ] Applies consistent styling across cards
- [ ] Handles repositories with no contributors or languages

#### CommitsPieChart Component

##### Chart Rendering
- [ ] Displays pie chart with correct data
- [ ] Shows proper tooltips on hover
- [ ] Uses correct color scheme
- [ ] Handles empty data arrays

##### Data Processing
- [ ] Correctly maps user commit data
- [ ] Applies fill colors properly
- [ ] Handles zero commit values

#### LanguagesBarChart Component

##### Chart Display
- [ ] Renders bar chart with language data
- [ ] Shows correct axis labels
- [ ] Displays tooltips with proper information
- [ ] Handles empty language data

##### Configuration
- [ ] Dynamically generates chart config from data
- [ ] Applies correct color scheme
- [ ] Handles missing language entries

#### TopRepositoriesChart Component

##### Flexibility Tests
- [ ] Works with both "commits" and "files" data keys
- [ ] Displays correct title based on props
- [ ] Handles different chart data structures

##### Rendering
- [ ] Shows bar chart with repository data
- [ ] Applies proper styling and colors
- [ ] Handles empty repository arrays

#### SideBar Component

##### Navigation Structure
- [ ] Displays all main navigation items (Summary, User)
- [ ] Shows collapsible repositories section
- [ ] Generates links for all repositories
- [ ] Includes theme toggle in footer

##### Dynamic Content
- [ ] Lists all repositories from data
- [ ] Creates correct navigation URLs
- [ ] Handles repositories with special characters in names

#### ThemeToggle Component

##### Theme Switching
- [ ] Toggles between light and dark themes
- [ ] Shows correct icon for current theme
- [ ] Updates theme context properly

##### UI Interaction
- [ ] Responds to click events
- [ ] Shows proper accessibility labels
- [ ] Animates icon transitions

#### ThemeProvider Component

##### Theme Management
- [ ] Initializes with system theme by default
- [ ] Persists theme selection to localStorage
- [ ] Handles system theme changes
- [ ] Provides theme context to children

##### Mounting Behavior
- [ ] Handles hydration correctly
- [ ] Reads stored theme on mount
- [ ] Applies theme classes to document

#### Bio Component

##### Simple Rendering
- [ ] Displays bio text correctly
- [ ] Shows proper heading
- [ ] Handles empty bio strings

### 3. Library/Utility Tests

#### overview_data.ts

##### Data Aggregation
- [ ] Correctly sums commits across all repositories
- [ ] Properly aggregates language counts
- [ ] Calculates SLOC totals accurately
- [ ] Counts unique contributors correctly

##### Top Repositories Calculation
- [ ] Sorts repositories by commits correctly
- [ ] Sorts repositories by files accurately
- [ ] Returns correct data structure

##### Edge Cases
- [ ] Handles repositories with undefined values
- [ ] Manages empty repository arrays
- [ ] Processes missing language data

#### repository_statistics.ts

##### Data Import
- [ ] Successfully imports JSON data
- [ ] Exports correct TypeScript interfaces
- [ ] Provides access to repository arrays

##### Type Safety
- [ ] Repository interface matches actual data
- [ ] RepositoryStatistics interface is correct
- [ ] Handles optional fields properly

#### utils.ts

##### Utility Functions
- [ ] Test any helper functions
- [ ] Validate class name merging (if using clsx/cn)
- [ ] Check formatting utilities

### 4. Layout and App Structure Tests

#### Root Layout (`app/layout.tsx`)

##### Provider Setup
- [ ] Wraps app in ThemeProvider correctly
- [ ] Initializes SidebarProvider properly
- [ ] Applies correct font variables

##### Metadata
- [ ] Sets correct page title
- [ ] Includes proper description
- [ ] Handles metadata correctly

#### Global Styles and Fonts

##### Font Loading
- [ ] Loads Geist fonts correctly
- [ ] Applies font variables properly

### 5. Integration Tests

#### Navigation Flow

##### Page Navigation
- [ ] Can navigate between all pages
- [ ] Sidebar links work correctly
- [ ] Repository pages load with correct data

#### Data Flow

##### End-to-End Data
- [ ] Overview page displays aggregated statistics
- [ ] Repository pages show individual repo data
- [ ] User page fetches and displays GitHub data

#### Theme Integration

##### Theme Persistence
- [ ] Theme selection persists across page navigation
- [ ] System theme detection works
- [ ] Theme toggle functions on all pages

### 6. Accessibility Tests

#### Semantic HTML

##### Proper Structure
- [ ] Uses semantic HTML elements
- [ ] Has proper heading hierarchy
- [ ] Includes accessibility labels

#### Keyboard Navigation

##### Interactive Elements
- [ ] All interactive elements are keyboard accessible
- [ ] Focus management works correctly
- [ ] Tab order is logical

### 7. Performance Tests

#### Static Generation

##### Build Process
- [ ] All repository pages generate correctly
- [ ] Static params function works
- [ ] Build completes without errors

#### Data Loading

##### Efficiency
- [ ] Data loads efficiently
- [ ] No unnecessary re-renders
- [ ] Charts render smoothly

### 8. Error Handling Tests

#### API Failures

##### GitHub API
- [ ] Handles API rate limits
- [ ] Manages network failures
- [ ] Shows appropriate error messages

#### Data Validation

##### Invalid Data
- [ ] Handles malformed JSON data
- [ ] Manages missing repository data
- [ ] Gracefully handles corrupt statistics

### 9. Mobile Responsiveness Tests

#### Layout Adaptation

##### Responsive Design
- [ ] Charts display correctly on mobile
- [ ] Grid layouts adapt to screen size
- [ ] Sidebar collapses appropriately

### 10. Chart-Specific Tests

#### Recharts Integration

##### Chart Libraries
- [ ] Pie charts render with correct data
- [ ] Bar charts display properly
- [ ] Tooltips show accurate information
- [ ] Charts handle resize events

## Test Implementation Guidelines

### Testing Stack
- **Jest**: Unit and integration testing
- **React Testing Library**: Component testing
- **jsdom**: DOM environment for tests
- **@testing-library/jest-dom**: Custom Jest matchers

### Test Structure
```
dashboard/
├── __tests__/
│   ├── components/
│   │   ├── CommitsPieChart.test.tsx
│   │   ├── LanguagesBarChart.test.tsx
│   │   ├── OverviewKeyFacts.test.tsx
│   │   ├── RepositoryKeyFacts.test.tsx
│   │   ├── SideBar.test.tsx
│   │   ├── ThemeToggle.test.tsx
│   │   ├── ThemeProvider.test.tsx
│   │   ├── TopRepositoriesChart.test.tsx
│   │   └── Bio.test.tsx
│   ├── pages/
│   │   ├── page.test.tsx
│   │   ├── user/
│   │   │   └── page.test.tsx
│   │   └── repository/
│   │       └── [name]/
│   │           └── page.test.tsx
│   ├── lib/
│   │   ├── overview_data.test.ts
│   │   ├── repository_statistics.test.ts
│   │   └── utils.test.ts
│   └── integration/
│       ├── navigation.test.tsx
│       ├── theme.test.tsx
│       └── data-flow.test.tsx
```

### Mock Data
- Create mock repository statistics for consistent testing
- Mock GitHub API responses for user page tests
- Provide test fixtures for chart data

### Coverage Goals
- **Lines**: 90%+
- **Functions**: 95%+
- **Branches**: 85%+
- **Statements**: 90%+

## Priority Levels

### High Priority (Must Have)
- [ ] All component rendering tests
- [ ] Data processing and display tests
- [ ] Navigation and routing tests
- [ ] Theme functionality tests

### Medium Priority (Should Have)
- [ ] Error handling tests
- [ ] Performance tests
- [ ] Accessibility tests
- [ ] Mobile responsiveness tests

### Low Priority (Nice to Have)
- [ ] Advanced chart interaction tests
- [ ] Complex integration scenarios
- [ ] Edge case handling

## Test Execution

### Running Tests
```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test -- CommitsPieChart.test.tsx
```

### Continuous Integration
- All tests must pass before merging
- Coverage reports should be generated
- Performance benchmarks should be tracked

## Notes

- Tests should be independent and isolated
- Use meaningful test descriptions
- Mock external dependencies appropriately
- Test both happy path and error scenarios
- Keep tests maintainable and readable
- Use data-testid for reliable element selection
- Test user interactions, not implementation details
