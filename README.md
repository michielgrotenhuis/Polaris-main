# Polaris Theme Developer Documentation

This documentation provides a comprehensive guide to the Polaris theme for Next.js applications. As a modern, versatile theme, Polaris is designed to offer developers a robust framework for creating e-commerce applications.

## Table of Contents

1. [Theme Overview](#theme-overview)
2. [Configuration Files](#configuration-files)
3. [Theme Structure](#theme-structure)
4. [Layout System](#layout-system)
5. [Components](#components)
6. [Sections](#sections)
7. [Styling Approach](#styling-approach)
8. [Templates](#templates)
9. [Customization Options](#customization-options)
10. [Best Practices](#best-practices)

## Theme Overview

Polaris is a modern e-commerce theme designed for Next.js applications, providing a clean and customizable user interface. It follows a modular architecture with well-organized components, templates, and styling approaches.

Key features:
- Responsive design
- Component-based architecture
- Customizable through settings JSON files
- Support for multiple layouts (default, dashboard, landing)
- E-commerce focused components and sections

## Configuration Files

The Polaris theme includes several configuration files that control its appearance and behavior:

### Main Configuration (config.json)
```json
{
    "name": "wintheme/polaris",
    "title": "Polaris",
    "image": "https://cdn.uvodo.com/themes/polaris-cover.png",
    "version": "1.0.20",
    "templates_path": "/views/templates",
    "public": [
        "/assets"
    ]
}
```

### Settings Files

Settings are organized in JSON files within the `settings` directory:

- **colors.json**: Theme color definitions for various elements
- **fonts.json**: Font settings and Google Fonts integration
- **header.json**: Header configuration settings
- **home.json**: Homepage elements configuration
- **settings.json**: General theme settings

## Theme Structure

The Polaris theme follows a well-organized directory structure:

```
/Polaris-main
├── /views                      # Main view templates
│   ├── /components             # Reusable UI components
│   ├── /layouts                # Layout templates
│   ├── /sections               # Page sections
│   ├── /snippets               # Reusable code snippets
│   └── /templates              # Page templates
├── /settings                   # Configuration JSON files
└── /assets                     # Static assets (CSS, JS, images)
```

### Components Directory

Contains reusable UI components organized by functionality:
- Basic UI elements (buttons, inputs, cards, etc.)
- Navigation components (menus, breadcrumbs)
- Layout components (grids, containers)

## Layout System

Polaris uses a flexible grid system based on CSS Grid and Flexbox:

### Grid System

The theme implements a responsive 12-column grid layout that adapts to different screen sizes:

```twig
<div class="row gutter-32 mobile-gutter-16">
    <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
        <!-- Content -->
    </div>
</div>
```

Bootstrap-inspired column classes for responsive layouts:
- `col-xl-*`: Extra large screens (≥1200px)
- `col-lg-*`: Large screens (≥992px)
- `col-md-*`: Medium screens (≥768px)
- `col-sm-*`: Small screens (≥576px)
- `col-*`: Extra small screens (<576px)

### Spacing System

The theme uses a consistent spacing scale:
- `space-1`: 0.25rem (4px)
- `space-2`: 0.5rem (8px)
- `space-3`: 0.75rem (12px)
- `space-4`: 1rem (16px)
- `space-5`: 1.5rem (24px)
- `space-6`: 2rem (32px)
- `space-8`: 3rem (48px)
- `space-10`: 4rem (64px)
- `space-12`: 6rem (96px)

## Components

### Navigation Components

#### NavBar
Main navigation component supporting desktop and mobile layouts:

```twig
{% include "/components/menu.twig" | storefront_path with {'items' : menus.header} %}
```

#### Drawer Menu
Side navigation for mobile devices:

```twig
{% include "/components/drawer-menu.twig" | storefront_path with {'items' : menus.sidebar} %}
```

#### MegaMenu
Advanced dropdown menu system:

```twig
{% include "/components/mega-menu.twig" | storefront_path with {'items' : menus.header} %}
```

#### Mobile Menu
Special menu for mobile devices:

```twig
{% include "/components/mobile-menu.twig" | storefront_path with {
    'sidebarItems' : menus.sidebar,
    'items' : menus.header
} %}
```

### Product Components

#### Product List Item
Component for displaying products in different layouts:

```twig
{% include "/snippets/product-list-item-grid.twig" | storefront_path with {'product' : product} %}
```

#### Product Detail
Component for displaying product details:

```twig
{% include 'snippets/product-detail.twig' | storefront_path %}
```

### Cart Components

#### Cart
Shopping cart component:

```twig
{% include '/snippets/cart.twig' | storefront_path with {'cart' : cart} %}
```

#### Basket
Mini cart component:

```twig
{% include "/snippets/basket.twig" | storefront_path with {'cart' : cart} %}
```

## Sections

Sections are larger building blocks used to compose pages:

### Slider Section
Displays a fullwidth image slider:

```twig
{% include '/sections/slider.twig' | storefront_path %}
```

### Products Section
Displays a curated list of products:

```twig
{% include '/sections/products.twig' | storefront_path with {
    items: products,
    show: 24,
    className: 'product-slider'
} %}
```

### Collections Section
Displays product collections:

```twig
{% include '/sections/collections.twig' | storefront_path %}
```

### Connect Section
Email subscription section:

```twig
{% include '/sections/connect.twig' | storefront_path %}
```

### Media Section
Video and media content section:

```twig
{% include '/sections/media.twig' | storefront_path %}
```

## Styling Approach

Polaris uses a hybrid styling approach:

### CSS Structure
- Component-specific styles embedded within component files
- Global styles defined in external stylesheets
- Theme variables using CSS custom properties

### Theme Variables

Global theme variables are defined using CSS custom properties:

```css
:root {
  --color-primary: #3853D8;
  --color-secondary: #6941C6;
  --color-background: #FFFFFF;
  --color-text: #101828;
  /* etc. */
}
```

### Responsive Design

Polaris is built with a mobile-first approach, using standard breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Media queries are used for responsive styling:

```css
@media (max-width: 767px) {
    .navigation-container {
        display: none;
    }
}
```

## Templates

Polaris includes several page templates:

### Base Layout

The `theme.twig` layout serves as the base template:

```twig
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags and CSS -->
</head>
<body>
    {% include '/sections/header.twig' | storefront_path %}
    
    {% block body %}{% endblock %}
    
    {% include '/sections/footer.twig' | storefront_path %}
    
    <!-- JavaScript -->
</body>
</html>
```

### Page Templates

Standard page templates include:

- **index.twig**: Homepage template
- **product.twig**: Product detail page
- **collection.twig**: Collection page
- **cart.twig**: Cart page
- **account.twig**: Customer account pages

### Customer Templates

Templates for customer-related pages:

- **login.twig**: Login page
- **register.twig**: Registration page
- **addresses.twig**: Address management
- **orders.twig**: Order history

## Customization Options

### Theme Settings

Settings can be accessed in templates using the `setting` filter:

```twig
{{ "home.section_title" | setting }}
```

### Theme Colors

Colors can be customized in the `colors.json` file and are applied through the `color.twig` layout:

```twig
{% include '/layouts/color.twig' | storefront_path %}
```

### Custom Fonts

Font settings are managed in `fonts.json` and can be accessed:

```twig
{% set selectedFontData = "fonts.primary_font" | setting_data_from_option %}
```

### Custom CSS and JavaScript

Custom code can be added through the settings:

```twig
{{ "settings.custom_code_for_header" | setting | raw }}
```

## Best Practices

1. **Component Reusability**: Use components from the components directory whenever possible to maintain consistency.

2. **Responsive Design**: Test layouts on multiple screen sizes and use the provided responsive classes.

3. **Performance Optimization**:
   - Use the proper image format and size
   - Implement lazy loading for components
   - Minimize JavaScript execution

4. **Settings Organization**: Keep settings organized by functionality in the appropriate JSON files.

5. **Template Inheritance**: Extend the base theme template to maintain consistency.

6. **Accessibility**: Ensure components maintain proper accessibility attributes.

7. **JavaScript Modularization**: Keep JavaScript modular and event-driven for better maintainability.

This documentation provides an overview of the Polaris theme structure and components. For specific implementation details, refer to the source code comments and structure.
