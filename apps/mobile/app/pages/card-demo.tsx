import React from "react";
import { Text, View } from "react-native";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  PressableCard,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollableLayout } from "@/components/layout/scrollable-layout";

const ProductCardExample = () => {
  return (
    <PressableCard
      onPress={() => console.log("Card pressed")}
      className="max-w-sm"
    >
      <CardHeader>
        <CardTitle>Premium Headphones</CardTitle>
        <CardDescription>Noise cancelling wireless headphones</CardDescription>
      </CardHeader>
      <CardContent>
        <Text className="mt-2">
          Experience crystal clear audio with our premium noise cancelling
          headphones featuring 30-hour battery life.
        </Text>
      </CardContent>
      <CardFooter className="flex-row justify-between">
        <Text className="font-semibold">$129.99</Text>
        <Button size="sm">Add to Cart</Button>
      </CardFooter>
    </PressableCard>
  );
};

export default function CardDemo() {
  return (
    <ScrollableLayout contentClassName="p-4">
      <Text className="text-xl font-bold mb-6">Card Component</Text>
      
      <View className="space-y-4">
        <ProductCardExample />
        
        <PressableCard
          onPress={() => console.log("Second card pressed")}
          className="max-w-sm"
        >
          <CardHeader>
            <CardTitle>Another Card</CardTitle>
            <CardDescription>This is another example card</CardDescription>
          </CardHeader>
          <CardContent>
            <Text className="mt-2">
              This demonstrates how multiple cards can be displayed with scroll-to-top functionality.
            </Text>
          </CardContent>
          <CardFooter>
            <Button size="sm">Learn More</Button>
          </CardFooter>
        </PressableCard>
      </View>
    </ScrollableLayout>
  );
}
