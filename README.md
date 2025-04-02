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


# jQuery Modal and Toast Libraries Documentation

This documentation provides an overview of the jQuery Modal and jQuery Toast libraries implemented in this project, along with usage examples.

## Table of Contents

- [jQuery Modal](#jquery-modal)
  - [Installation](#modal-installation)
  - [Usage](#modal-usage)
  - [Options](#modal-options)
  - [Events](#modal-events)
  - [Methods](#modal-methods)
- [jQuery Toast](#jquery-toast)
  - [Installation](#toast-installation)
  - [Usage](#toast-usage)
  - [Options](#toast-options)
  - [Methods](#toast-methods)

---

## jQuery Modal

jQuery Modal is a lightweight modal dialog implementation that provides a simple way to display modal windows in your web application.

### Modal Installation

The library is already included in the project in:

```
assets/scripts/libs/jquery-modal/jquery.modal.min.js
assets/scripts/libs/jquery-modal/jquery.modal.min.css
```

Make sure to include jQuery before including the modal library.

### Modal Usage

There are several ways to use jQuery Modal:

#### 1. Using HTML Markup

```html
<!-- Link with rel="modal:open" -->
<a href="#ex1" rel="modal:open">Open Modal</a>

<!-- Modal HTML content -->
<div id="ex1" class="modal">
  <p>This is the modal content.</p>
  <a href="#" rel="modal:close">Close</a>
</div>
```

#### 2. Using JavaScript

```javascript
// Open from JavaScript
$('#ex1').modal();

// With options
$('#ex1').modal({
  fadeDuration: 250,
  fadeDelay: 0.80
});

// Open AJAX modal
$('a.modal-ajax').click(function(event) {
  event.preventDefault();
  $(this).modal({
    fadeDuration: 250
  });
});
```

### Modal Options

The following options are available:

```javascript
$.modal.defaults = {
  closeExisting: true,    // Close existing modals
  escapeClose: true,      // Close modal when escape key is pressed
  clickClose: true,       // Close modal when clicked outside
  closeText: 'Close',     // Text for close button
  closeClass: '',         // Additional class for close button
  modalClass: 'modal',    // Class for modal
  blockerClass: 'jquery-modal', // Class for modal blocker
  spinnerHtml: '...',     // HTML for spinner
  showSpinner: true,      // Show spinner or not
  showClose: true,        // Show close button or not
  fadeDuration: null,     // Duration of fade effect
  fadeDelay: 1.0          // Delay for fade
};
```

### Modal Events

The following events are triggered:

```javascript
$('#modal').on($.modal.BEFORE_BLOCK, function(event, modal) {});
$('#modal').on($.modal.BLOCK, function(event, modal) {});
$('#modal').on($.modal.BEFORE_OPEN, function(event, modal) {});
$('#modal').on($.modal.OPEN, function(event, modal) {});
$('#modal').on($.modal.BEFORE_CLOSE, function(event, modal) {});
$('#modal').on($.modal.CLOSE, function(event, modal) {});
$('#modal').on($.modal.AFTER_CLOSE, function(event, modal) {});
```

For AJAX modals, additional events are available:

```javascript
$(document).on($.modal.AJAX_SEND, function(event, modal) {});
$(document).on($.modal.AJAX_SUCCESS, function(event, modal) {});
$(document).on($.modal.AJAX_FAIL, function(event, modal) {});
$(document).on($.modal.AJAX_COMPLETE, function(event, modal) {});
```

### Modal Methods

```javascript
// Close modal programmatically
$.modal.close();

// Check if a modal is currently active
$.modal.isActive();

// Get the currently active modal
$.modal.getCurrent();
```

---

## jQuery Toast

jQuery Toast provides a flexible notification system with various styles and options.

### Toast Installation

The library is already included in the project in:

```
assets/scripts/libs/jquery-toast/jquery.toast.min.js
assets/scripts/libs/jquery-toast/jquery.toast.min.css
```

Make sure to include jQuery before including the toast library.

### Toast Usage

#### Basic Usage

```javascript
// Display a simple toast
$.toast("Your message here");

// Display toast with options
$.toast({
  text: "This is a toast message",
  heading: 'Note',
  icon: 'info',
  showHideTransition: 'fade',
  allowToastClose: true,
  hideAfter: 3000,
  stack: 5,
  position: 'top-right',
  textAlign: 'left',
  loader: true,
  loaderBg: '#9EC600'
});
```

#### Different Toast Types

```javascript
// Success toast
$.toast({
  heading: 'Success',
  text: 'Operation completed successfully',
  icon: 'success',
  position: 'top-right'
});

// Error toast
$.toast({
  heading: 'Error',
  text: 'An error occurred',
  icon: 'error',
  position: 'top-right'
});

// Info toast
$.toast({
  heading: 'Information',
  text: 'Important information',
  icon: 'info',
  position: 'top-right'
});

// Warning toast
$.toast({
  heading: 'Warning',
  text: 'Attention required',
  icon: 'warning',
  position: 'top-right'
});
```

### Toast Options

The following options are available:

```javascript
$.toast.options = {
  text: '',                  // The message to display
  heading: '',               // The heading of the toast
  showHideTransition: 'fade', // fade, slide or plain
  allowToastClose: true,     // Allow user to close toast
  hideAfter: 3000,           // Duration in ms to auto-close
  loader: true,              // Show loader
  loaderBg: '#9EC600',       // Background color of loader
  stack: 5,                  // Number of toasts that can be shown at once
  position: 'bottom-left',   // top-left, top-right, bottom-left, bottom-right, etc.
};
```

### Toast Methods

```javascript
// Create a toast instance
var myToast = $.toast({ text: 'Some message' });

// Reset all toasts
myToast.reset();

// Update toast options
myToast.update({
  text: 'New message',
  hideAfter: 5000
});

// Close toast manually
myToast.close();


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
