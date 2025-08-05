import React, { useRef } from "react";
import { View, ScrollView, ViewProps } from "react-native";
import { ScrollToTop, useScrollToTop } from "@/components/ui/scroll-to-top";

interface ScrollableLayoutProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  showScrollToTop?: boolean;
  threshold?: number;
}

export function ScrollableLayout({
  children,
  className = "",
  contentClassName = "",
  showScrollToTop = true,
  threshold = 300,
  ...props
}: ScrollableLayoutProps) {
  const scrollViewRef = useRef<ScrollView>(null);
  const { isVisible, handleScroll } = useScrollToTop(scrollViewRef);

  return (
    <View className={`flex-1 ${className}`} {...props}>
      <ScrollView
        ref={scrollViewRef}
        className={`flex-1 ${contentClassName}`}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
      
      {showScrollToTop && isVisible && (
        <ScrollToTop 
          scrollViewRef={scrollViewRef}
          threshold={threshold}
          className="absolute bottom-6 right-6"
        />
      )}
    </View>
  );
} 