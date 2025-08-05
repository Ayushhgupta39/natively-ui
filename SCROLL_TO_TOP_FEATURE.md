# Scroll to Top Feature

This document describes the scroll-to-top functionality that has been added to the natively-ui project.

## Overview

The scroll-to-top feature provides a convenient way for users to quickly return to the top of any page. It consists of a button that appears when users scroll down and smoothly scrolls back to the top when clicked.

## Implementation

### Web App (`apps/web`)

The scroll-to-top functionality is implemented using:

- **Component**: `apps/web/components/ui/scroll-to-top.tsx`
- **Integration**: Added to the root layout (`apps/web/app/layout.tsx`)
- **Documentation**: Available at `/docs/components/scroll-to-top`

#### Features:
- Appears when scrolling down more than 300px (configurable)
- Smooth scroll animation using `window.scrollTo({ behavior: 'smooth' })`
- Fixed positioning in bottom-right corner
- Hover effects and transitions
- Accessible with proper ARIA labels
- Responsive design

### Mobile App (`apps/mobile`)

The scroll-to-top functionality is implemented using:

- **Component**: `apps/mobile/components/ui/scroll-to-top.tsx`
- **Layout Wrapper**: `apps/mobile/components/layout/scrollable-layout.tsx`
- **Hook**: `useScrollToTop` for custom implementations
- **Demo**: Available at `/pages/scroll-to-top-demo`

#### Features:
- Animated appearance/disappearance
- Smooth scroll animation using `scrollTo({ y: 0, animated: true })`
- Configurable threshold for button appearance
- Reusable `ScrollableLayout` component
- Custom hook for advanced use cases

## Usage

### Web App

The scroll-to-top button is automatically available on all pages. No additional setup required.

### Mobile App

#### Using ScrollableLayout (Recommended)

```tsx
import { ScrollableLayout } from "@/components/layout/scrollable-layout";

export default function MyPage() {
  return (
    <ScrollableLayout contentClassName="p-4">
      {/* Your content here */}
    </ScrollableLayout>
  );
}
```

#### Custom Implementation

```tsx
import { ScrollToTop, useScrollToTop } from "@/components/ui/scroll-to-top";
import { useRef } from "react";
import { ScrollView } from "react-native";

export default function MyPage() {
  const scrollViewRef = useRef<ScrollView>(null);
  const { isVisible, handleScroll } = useScrollToTop(scrollViewRef);

  return (
    <View className="flex-1">
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {/* Your content here */}
      </ScrollView>
      
      {isVisible && (
        <ScrollToTop scrollViewRef={scrollViewRef} />
      )}
    </View>
  );
}
```

## Configuration

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | string | - | Additional CSS classes |
| `threshold` | number | 300 | Scroll distance before button appears |
| `scrollViewRef` | RefObject | - | Reference to ScrollView (mobile only) |

### Customization

#### Web App
```tsx
<ScrollToTop 
  className="custom-styles" 
  threshold={500} 
/>
```

#### Mobile App
```tsx
<ScrollToTop 
  className="custom-styles"
  threshold={500}
  scrollViewRef={myScrollViewRef}
/>
```

## Demo Pages

- **Web**: `/docs/components/scroll-to-top`
- **Mobile**: `/pages/scroll-to-top-demo`

## Files Added/Modified

### New Files
- `apps/web/components/ui/scroll-to-top.tsx`
- `apps/mobile/components/ui/scroll-to-top.tsx`
- `apps/mobile/components/layout/scrollable-layout.tsx`
- `apps/mobile/app/pages/scroll-to-top-demo.tsx`
- `apps/web/app/docs/components/scroll-to-top/page.tsx`

### Modified Files
- `apps/web/app/layout.tsx` - Added ScrollToTop component
- `apps/mobile/app/(tabs)/components/index.tsx` - Added demo link and used ScrollableLayout
- `apps/mobile/app/pages/button-demo.tsx` - Updated to use ScrollableLayout
- `apps/mobile/app/pages/card-demo.tsx` - Updated to use ScrollableLayout
- `apps/web/docs-sidebar.json` - Added scroll-to-top documentation link

## Browser/Platform Support

- **Web**: All modern browsers with smooth scrolling support
- **Mobile**: iOS and Android with React Native ScrollView

## Accessibility

- Proper ARIA labels for screen readers
- Keyboard navigation support (web)
- High contrast design
- Appropriate touch targets (mobile)

## Performance Considerations

- Scroll event throttling (16ms on mobile)
- Efficient scroll position detection
- Minimal re-renders using React hooks
- Smooth animations using native drivers (mobile) 