import React, { useState, useEffect } from "react";
import { Pressable, Animated, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { cn } from "@/lib/utils";

interface ScrollToTopProps {
  className?: string;
  threshold?: number;
  scrollViewRef?: React.RefObject<any>;
}

export function ScrollToTop({ 
  className, 
  threshold = 300, 
  scrollViewRef 
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isVisible ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isVisible, fadeAnim]);

  const scrollToTop = () => {
    if (scrollViewRef?.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setIsVisible(offsetY > threshold);
  };

  // If no scrollViewRef is provided, we'll use a global scroll listener
  useEffect(() => {
    if (!scrollViewRef) {
      // For global scroll detection, we'll use a simple approach
      // In a real app, you might want to use a more sophisticated solution
      const checkScroll = () => {
        // This is a simplified approach - in practice you'd need to track scroll position
        // from your scrollable components
      };
      
      return () => {
        // Cleanup if needed
      };
    }
  }, [scrollViewRef]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ scale: fadeAnim }],
      }}
      className={cn(
        "absolute bottom-6 right-6 z-50",
        !isVisible && "pointer-events-none",
        className
      )}
    >
      <Pressable
        onPress={scrollToTop}
        className={cn(
          "w-12 h-12 bg-black rounded-full items-center justify-center shadow-lg",
          "active:scale-95 transition-transform"
        )}
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <FontAwesome name="chevron-up" size={16} color="white" />
      </Pressable>
    </Animated.View>
  );
}

// Hook for managing scroll position
export function useScrollToTop(scrollViewRef: React.RefObject<any>) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setIsVisible(offsetY > 300);
  };

  return {
    isVisible,
    handleScroll,
    scrollToTop: () => {
      if (scrollViewRef?.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
      }
    },
  };
} 