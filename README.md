# Polaris Theme
# Polaris Theme - Developer Documentation

## Overview

Polaris is a modern, versatile theme designed for Next.js applications. This documentation provides comprehensive guidance on theme structure, components, utilities, and implementation patterns for front-end developers working with the Polaris theme.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Core Components](#core-components)
3. [Layout System](#layout-system)
4. [Styling Approach](#styling-approach)
5. [Navigation Components](#navigation-components)
6. [UI Components](#ui-components)
7. [Form Components](#form-components)
8. [Data Display Components](#data-display-components)
9. [Utility Functions](#utility-functions)
10. [Theme Configuration](#theme-configuration)
11. [Responsive Design](#responsive-design)
12. [Accessibility Guidelines](#accessibility-guidelines)
13. [Performance Considerations](#performance-considerations)
14. [Development Workflow](#development-workflow)

## Project Structure

The Polaris theme is organized with a modular structure to promote maintainability and scalability:

```
/Polaris-main
├── /app                  # Next.js application pages and routing
├── /components           # Reusable UI components
│   ├── /blocks           # Larger composite components/sections
│   ├── /common           # General-purpose components
│   ├── /layout           # Layout components
│   ├── /navigation       # Navigation-related components
│   └── /ui               # Atomic UI components
├── /lib                  # Utility functions and helpers
├── /providers            # Context providers
├── /public               # Static assets
├── /styles               # Global styles and theme variables
└── /types                # TypeScript type definitions
```

## Core Components

### Page Templates

Page templates serve as the foundation for different page types within the application:

- `DefaultLayout`: The standard page layout with header, footer, and main content area
- `DashboardLayout`: Layout optimized for admin/dashboard interfaces
- `LandingLayout`: Layout designed for marketing and landing pages

### Component Hierarchy

Polaris follows a component hierarchy that promotes reusability:

1. **Atoms**: Basic UI elements (buttons, inputs, icons)
2. **Molecules**: Combinations of atoms (form fields, cards, list items)
3. **Organisms**: Complex UI sections (navigation bars, sidebars, content blocks)
4. **Templates**: Page layouts that arrange organisms
5. **Pages**: Complete views composed of templates and organisms

## Layout System

Polaris uses a flexible grid system based on CSS Grid and Flexbox:

### Grid System

The theme implements a 12-column grid layout that adapts to different screen sizes:

```jsx
<Grid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
  <GridItem>Content 1</GridItem>
  <GridItem>Content 2</GridItem>
  <GridItem>Content 3</GridItem>
</Grid>
```

### Spacing System

Consistent spacing is applied using a predefined scale:

- `space-1`: 0.25rem (4px)
- `space-2`: 0.5rem (8px)
- `space-3`: 0.75rem (12px)
- `space-4`: 1rem (16px)
- `space-5`: 1.5rem (24px)
- `space-6`: 2rem (32px)
- `space-8`: 3rem (48px)
- `space-10`: 4rem (64px)
- `space-12`: 6rem (96px)

## Styling Approach

Polaris uses a hybrid styling approach:

### CSS Modules

Component-specific styles are managed using CSS Modules:

```jsx
// Button.module.css
.button {
  /* styles */
}

// Button.jsx
import styles from './Button.module.css';

export const Button = (props) => (
  <button className={styles.button} {...props} />
);
```

### Utility Classes

Common styling patterns are available through utility classes:

```jsx
<div className="flex items-center justify-between p-4 mb-6 rounded-lg">
  {/* content */}
</div>
```

### Theme Variables

Global theme variables are defined in CSS custom properties:

```css
:root {
  --color-primary: #3853D8;
  --color-secondary: #6941C6;
  --color-accent: #F05D23;
  --color-background: #FFFFFF;
  --color-text: #101828;
  /* etc. */
}
```

## Navigation Components

### NavBar

The primary navigation component for desktop and mobile:

```jsx
<NavBar
  logo="/images/logo.svg"
  items={[
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ]}
/>
```

### Sidebar

Side navigation commonly used in dashboard layouts:

```jsx
<Sidebar
  items={[
    {
      label: 'Dashboard',
      icon: 'dashboard',
      href: '/dashboard',
    },
    {
      label: 'Analytics',
      icon: 'chart',
      href: '/analytics',
    },
    // etc.
  ]}
/>
```

### Breadcrumbs

Navigation aid showing the current page location:

```jsx
<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Current Product', href: '#', current: true },
  ]}
/>
```

## UI Components

### Buttons

Buttons come in multiple variants and sizes:

```jsx
<Button variant="primary" size="md">Primary Action</Button>
<Button variant="secondary" size="md">Secondary Action</Button>
<Button variant="outline" size="sm">Outline</Button>
<Button variant="ghost" size="lg">Ghost</Button>
<Button variant="link">Link Button</Button>
```

### Icons

Polaris includes a comprehensive icon system:

```jsx
<Icon name="arrow-right" size="md" />
<Icon name="check" size="sm" color="success" />
```

### Cards

Containers for related content:

```jsx
<Card>
  <CardHeader title="Card Title" />
  <CardBody>
    {/* Card content */}
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Tabs

Content organization through tabbed interfaces:

```jsx
<Tabs>
  <TabList>
    <Tab>Overview</Tab>
    <Tab>Details</Tab>
    <Tab>Settings</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>{/* Overview content */}</TabPanel>
    <TabPanel>{/* Details content */}</TabPanel>
    <TabPanel>{/* Settings content */}</TabPanel>
  </TabPanels>
</Tabs>
```

## Form Components

### Input Fields

Text input components:

```jsx
<FormField label="Username" required>
  <Input
    type="text"
    placeholder="Enter username"
    name="username"
  />
</FormField>

<FormField label="Password" required>
  <Input
    type="password"
    placeholder="Enter password"
    name="password"
  />
</FormField>
```

### Select

Dropdown selection component:

```jsx
<FormField label="Country">
  <Select
    name="country"
    options={[
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'uk', label: 'United Kingdom' },
    ]}
  />
</FormField>
```

### Checkbox and Radio

Selection controls:

```jsx
<Checkbox label="Remember me" name="remember" />

<RadioGroup name="plan" label="Select a plan">
  <Radio value="basic" label="Basic Plan" />
  <Radio value="pro" label="Pro Plan" />
  <Radio value="enterprise" label="Enterprise" />
</RadioGroup>
```

## Data Display Components

### Table

Component for displaying tabular data:

```jsx
<Table>
  <TableHead>
    <TableRow>
      <TableHeader>Name</TableHeader>
      <TableHeader>Email</TableHeader>
      <TableHeader>Role</TableHeader>
      <TableHeader>Status</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Admin</TableCell>
      <TableCell>
        <Badge variant="success">Active</Badge>
      </TableCell>
    </TableRow>
    {/* Additional rows */}
  </TableBody>
</Table>
```

### Badge

Status indicators:

```jsx
<Badge variant="primary">New</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>
```

### Progress

Progress indicators:

```jsx
<Progress value={75} max={100} />
<Spinner size="md" />
```

## Utility Functions

### Date Formatting

```jsx
import { formatDate } from '@/lib/date';

// Format a date
formatDate(new Date(), 'MMM dd, yyyy'); // 'Apr 02, 2025'
```

### Number Formatting

```jsx
import { formatNumber, formatCurrency } from '@/lib/number';

// Format numbers
formatNumber(1234567.89); // '1,234,567.89'
formatCurrency(1234.56, 'USD'); // '$1,234.56'
```

### String Utilities

```jsx
import { truncate, slugify } from '@/lib/string';

// Truncate long text
truncate('Long text that needs to be shortened', 20); // 'Long text that needs...'

// Convert string to URL slug
slugify('Product Title Here'); // 'product-title-here'
```

## Theme Configuration

The theme can be customized through the `theme.config.js` file:

```js
// theme.config.js
module.exports = {
  colors: {
    primary: '#3853D8',
    secondary: '#6941C6',
    // Additional colors
  },
  fonts: {
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  // Additional theme options
};
```

## Responsive Design

Polaris is designed with a mobile-first approach. The theme includes breakpoints for different screen sizes:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Responsive utilities can be used in class names:

```html
<div class="hidden md:block">
  <!-- Visible only on medium screens and larger -->
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- Responsive grid layout -->
</div>
```

## Accessibility Guidelines

Polaris is built with accessibility in mind:

### Keyboard Navigation

All interactive elements should be accessible via keyboard:

```jsx
<Button
  onClick={handleClick}
  aria-label="Close dialog"
>
  <Icon name="x" />
</Button>
```

### ARIA Attributes

Proper ARIA attributes are used throughout the theme:

```jsx
<Dialog
  isOpen={isOpen}
  onClose={onClose}
  aria-labelledby="dialog-title"
>
  <DialogHeader id="dialog-title">Dialog Title</DialogHeader>
  <DialogBody>Content</DialogBody>
</Dialog>
```

### Focus Management

Focus management utilities help maintain proper focus states:

```jsx
import { useFocus } from '@/lib/accessibility';

const { focusRef, setFocus } = useFocus();

// Set focus to an element
<button ref={focusRef} onClick={handleClick}>
  Click Me
</button>
```

## Performance Considerations

### Code Splitting

Components are designed to support code splitting:

```jsx
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <Spinner />,
});
```

### Image Optimization

Use Next.js Image component for optimal image loading:

```jsx
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority
/>
```

### Lazy Loading

Components support lazy loading for better performance:

```jsx
<LazyLoad height={200} once>
  <ComplexComponent />
</LazyLoad>
```

## Development Workflow

### Component Development

When creating new components:

1. Create the component file in the appropriate directory
2. Create accompanying style file (if using CSS Modules)
3. Export the component from the directory's index file
4. Document props using JSDoc or TypeScript

Example:

```jsx
/**
 * Alert component for displaying notifications
 * @param {Object} props - Component props
 * @param {string} props.variant - Alert variant (info, success, warning, error)
 * @param {string} props.title - Alert title
 * @param {React.ReactNode} props.children - Alert content
 * @param {boolean} props.isDismissable - Whether the alert can be dismissed
 * @param {function} props.onDismiss - Handler for dismiss action
 */
export const Alert = ({
  variant = 'info',
  title,
  children,
  isDismissable = false,
  onDismiss,
  ...props
}) => {
  // Component implementation
};
```

### Testing Components

Components should be tested using the project's testing tools:

```jsx
// Alert.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Alert } from './Alert';

describe('Alert', () => {
  test('renders with correct title', () => {
    render(<Alert title="Test Alert">Content</Alert>);
    expect(screen.getByText('Test Alert')).toBeInTheDocument();
  });

  test('calls onDismiss when dismiss button is clicked', () => {
    const onDismiss = jest.fn();
    render(
      <Alert title="Test Alert" isDismissable onDismiss={onDismiss}>
        Content
      </Alert>
    );
    fireEvent.click(screen.getByLabelText('Dismiss'));
    expect(onDismiss).toHaveBeenCalled();
  });
});
```

## Conclusion

This documentation provides an overview of the Polaris theme structure and components. Front-end developers should refer to this guide when implementing and extending the theme. For specific implementation details, refer to the component source code and comments.

For questions or clarification, please contact the theme maintainers or refer to the official repository documentation.
