import React from "react";
import { Text, View } from "react-native";
import { ScrollableLayout } from "@/components/layout/scrollable-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ScrollToTopDemo() {
  return (
    <ScrollableLayout contentClassName="p-4">
      <Text className="text-xl font-bold mb-6">Scroll to Top Demo</Text>
      <Text className="text-base mb-6 text-gray-600">
        Scroll down to see the scroll-to-top button appear. Tap it to smoothly scroll back to the top.
      </Text>

      {/* Generate lots of content to enable scrolling */}
      {Array.from({ length: 20 }, (_, index) => (
        <Card key={index} className="mb-4">
          <CardHeader>
            <CardTitle>Section {index + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <Text className="mb-2">
              This is section {index + 1} of the demo. Scroll down to see more content and test the scroll-to-top functionality.
            </Text>
            <Text className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <View className="mt-3">
              <Button size="sm" variant="outline">
                Action {index + 1}
              </Button>
            </View>
          </CardContent>
        </Card>
      ))}

      <View className="mb-8 p-4 bg-blue-50 rounded-lg">
        <Text className="text-lg font-semibold mb-2">Scroll to Top Feature</Text>
        <Text className="text-sm text-gray-600">
          The scroll-to-top button appears when you scroll down more than 300px and smoothly scrolls back to the top when tapped.
          This feature is available on all pages that use the ScrollableLayout component.
        </Text>
      </View>
    </ScrollableLayout>
  );
} 